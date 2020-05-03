import { NextPage, NextPageContext } from "next";
import { fetcher, host } from "../../lib/fetcher";
import ErrorPage from "../_error";
import styled from "styled-components";
import { timeSince } from "../../lib/timeSince";
import Link from "next/link";
import Head from "next/head";
import { PostImage, PostHeader, PostContainer, PostBody, PostContent } from '../../components/post';
import { Post } from '../../interfaces/blog'
import parse from 'html-react-parser';

interface Props {
  id?: string;
  post?: Post;
  error?: string;
}

const PostPage: NextPage<Props> = ({ id, post, error }) => {
  if (error) return <ErrorPage err={error} statusCode={500} />;

  return (
    <PostBody>
      <Head>
        <title>
          {post.title} - Snipey's Blog
        </title>
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={post.twitter_title} />
        <meta name="twitter:image" content={post.twitter_image} />
        <meta name="twitter:url" content={`${host}/${id}`} />

        <meta property="og:title" content={post.og_title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={post.og_image} />
        <meta
          property="og:site_name"
          content="Snipey - Some guy you don't know"
        />
        <meta property="og:description" content={post.og_description} />

        <meta itemProp="name" content={post.title} />
        <meta itemProp="description" content={post.excerpt} />
        <meta itemProp="image" content={post.feature_image} />
      </Head>
      {/* Video Display */}
      <PostContainer>
        {/* Post info here */}
        <PostContent>
          <BackButton>
            <Link href="/blog">⬅</Link>
          </BackButton>
          <PostHeader>
            <h1>{post.title}</h1>
            <span>Published: {timeSince(post.published_at)} - {post.reading_time} Minute Read</span>
          </PostHeader>
          <PostImage src={post.feature_image}/>
          {parse(post.html)}
          {/* TODO Add comments */}
        </PostContent>
      </PostContainer>
    </PostBody>
  );
};

PostPage.getInitialProps = async ({ query }: NextPageContext) => {
  const id: string = query.post as string;
  console.log(id)
  try {
	// TODO Fix query for blogs
    const { data, errors } = await fetcher(`
      query {
        post(id: "${id}") {
          id
          title
          excerpt
          html
          published_at
          updated_at
          feature_image
          reading_time
          twitter_title
          twitter_image
          og_description
          og_title
        }
      }
    `).then((data) => data.json());

    return {
      id,
      post: data?.post,
      error: (!data?.post && "Post not found ❗") || (errors && errors[0]?.message),
    };
  } catch (e) {
    return { error: "Post not found" };
  }
};

export default PostPage;

export const BackButton = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  font-size:20px;
  a{
    &:hover {
      text-decoration: none;
    }
  }
`;