import { FunctionComponent } from "react";
import styled from "styled-components";
import Head from "next/head";

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <Body>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💻</text></svg>"
        />
        <title>Stephen F | SnipeyDev</title>
        <meta name="twitter:creator" content="@SnipeyDev" />
        <meta name="twitter:site" content="@SnipeyDev" />
        <meta property="og:title" content="Stephen F | SnipeyDev" />
        <meta property="og:description" content="Fullstack software engineer for hire" />
        <meta property="og:image" content="/profile.png" />
        <meta property="og:url" content="https://snipey.dev" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-176799769-1"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'UA-176799769-1');
              `,
          }}
        />
      </Head>
      <Content>
        <HeaderImage />
        {children}
      </Content>
    </Body>
  );
};

const Body = styled.div`
  display: flex;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  height: 100%;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
`;

const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const HeaderImage = styled.div`
  position: absolute;
  background-color: #FFF;
  display: block;
  height: 570px;
  width: 100%;
  background-size: 100% 570px;
  background-image: linear-gradient(to bottom,rgb(255,255,255,0),#0D0D0D), url('./bg.jpg');
  z-index: -100;
`;
