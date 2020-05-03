import { NextPage } from "next";
import ErrorPage from "../_error";
import styled from "styled-components";
import { fetcher } from "../../lib/fetcher";
import { timeSince } from "../../lib/timeSince";
import { Post } from "../../interfaces/blog"
import { BlogBody, BlogContainer, BlogPost, BlogWrapper, BlogTitle } from "../../components/blog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const blogQuery = `
query {
  lastUpdated
  posts {
    id
    slug
    title
    excerpt
    feature_image
  }
}
`;

interface Props {
  posts?: Post[];
  error?: string;
}

function sec2time(timeInSeconds: number) {
  let pad = function(num, size) { return ('000' + num).slice(size * -1); };
  let time: number = timeInSeconds;
  let minutes = Math.floor(time / 60) % 60;
  let seconds = Math.floor(time - minutes * 60);

  return pad(minutes, 2) + ':' + pad(seconds, 2);
}

const Blog: NextPage<Props> = ({ posts, error }) => {
  if (error) return <ErrorPage err={error} statusCode={500} />;
  return (
    <BlogBody>
      <BlogWrapper> </BlogWrapper>
        <BlogTitle>
          Blog
        </BlogTitle>
        <BlogContainer>
          {posts.map((post: Post) => (
            <Link key={post.id} href="/blog/[post]" as={`/blog/${post.id.replace("pid", "")}`}>
              <BlogPost>
                <img src={post.feature_image}/>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </BlogPost>
            </Link>
          ))}
        </BlogContainer>
      
    </BlogBody>
  );
};

Blog.getInitialProps = async () => {
  try {
    const { data, errors } = await fetcher(blogQuery).then((data) =>
      data.json()
    );

    return {
      posts: data?.posts,
      lastUpdated: data?.lastUpdated ? timeSince(data.lastUpdated) : null,
      error: errors && errors[0]?.message,
    };
  } catch (e) {
    return { error: "Failed to load posts" };
  }
};

export default Blog;

