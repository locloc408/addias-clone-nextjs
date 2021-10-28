import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme.";
import createEmotionCache from "../src/createEmotionCache";
import { Provider } from "react-redux";
import store from "../redux/store/store";
import { Navbar } from "../component/Navbar/Navbar";
import "../style.css";
import Router from "next/router";
import nProgress from "nprogress";
import "../style/nprogress.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../redux/store/store";
import { Provider as NextAuthProvider } from "next-auth/client";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* <script src="nprogress.js"></script>
      <link rel="stylesheet" href="nprogress.css" /> */}
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <NextAuthProvider session={pageProps.session}>
            <PersistGate loading={null} persistor={persistor}>
              <CssBaseline />

              <Navbar />
              <Component {...pageProps} />
            </PersistGate>
          </NextAuthProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
