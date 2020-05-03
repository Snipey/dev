import { AppProps } from "next/app";
import React, { FunctionComponent } from "react";

import { Layout } from "../components/layout";


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFilm } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faEnvelope, faFilm)


import "isomorphic-fetch";

import "../../global.css";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#0D0D0D",
  darker: "#1f2734",
  accent: "#ffa228",
  color: "#1f1f1f",
  hover: "#9f9f9f",
  text: "#fff",
  grey: "#656d7a",
  error: "#bb3e3e",
};

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
