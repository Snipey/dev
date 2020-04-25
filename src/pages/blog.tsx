import { NextPage } from "next";
import { fetcher } from "../lib/fetcher";
import ErrorPage from "./_error";
import styled from "styled-components";
import { timeSince } from "../lib/timeSince";
import { BlogBody, BlogContainer } from "../components/blog";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface Props {
  error?: string;
}

function sec2time(timeInSeconds: number) {
  let pad = function(num, size) { return ('000' + num).slice(size * -1); };
  let time: number = timeInSeconds;
  let minutes = Math.floor(time / 60) % 60;
  let seconds = Math.floor(time - minutes * 60);

  return pad(minutes, 2) + ':' + pad(seconds, 2);
}

const Blog: NextPage<Props> = ({ error }) => {
  if (error) return <ErrorPage err={error} statusCode={500} />;
  return (
    <BlogBody>
	  <HeaderImage></HeaderImage>
      <BlogContainer>
		
      </BlogContainer>
    </BlogBody>
  );
};

// Index.getInitialProps = async () => {
// };

export default Blog;

const HeaderImage = styled.div`
    position: absolute;
    background-color: #FFF;
    display: block;
    height: 570px;
    width: 100%;
    background-size: 100% 570px;
    background-image: linear-gradient(to bottom,rgb(255,255,255,0),#0D0D0D),url('./bg.jpg');
    z-index: -100;
`;
