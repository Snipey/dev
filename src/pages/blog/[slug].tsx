import { NextPage, NextPageContext } from "next";
import { fetcher, host } from "../lib/fetcher";
import { Post } from '../interfaces/posts';
import ErrorPage from "./_error";
import styled from "styled-components";
import { timeSince } from "../lib/timeSince";
import { PostBody } from "../components/blog";
import Link from "next/link";
import Head from "next/head";

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
          {post.contentTitle} - Snipey's Clips
        </title>
        <meta name="twitter:card" content="photo" />
        <meta name="twitter:title" content={post.contentTitle} />
        <meta name="twitter:image" content={post.contentThumbnail} />
        <meta name="twitter:url" content={`${host}/${id}`} />

        <meta property="og:title" content={post.contentTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={post.contentThumbnail} />
        <meta
          property="og:site_name"
          content="Snipey - Some guy you don't know"
        />
        <meta property="og:description" content={post.contentTitle} />

        <meta itemProp="name" content={post.contentTitle} />
        <meta itemProp="description" content={post.contentTitle} />
        <meta itemProp="image" content={post.contentThumbnail} />
      </Head>
      {/* Video Display */}
      <PostContainer>
        {/* Post info here */}
      </PostContainer>
    </PostBody>
  );
};

PostPage.getInitialProps = async ({ query }: NextPageContext) => {
  const id: string = query.clip as string;

  try {
	// TODO Fix query for blogs
    const { data, errors } = await fetcher(`
      query {
        clip(contentId: "cid${id}") {
          directClipUrl
          contentTitle
          contentThumbnail
          createdTimestamp
          contentViews
          contentLikes
        }
      }
    `).then((data) => data.json());

    return {
      id,
      post: data?.clip,
      error:
        (!data?.clip && "Post not found") || (errors && errors[0]?.message),
    };
  } catch (e) {
    return { error: "Post not found" };
  }
};

export default POstPage;