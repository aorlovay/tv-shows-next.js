import RootLayout from "@/app/layout";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  html,
  body {
    width: 100%;
    display: flex;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }

  @font-face {
    font-family: "MT-Arial";
    src: url('/fonts/arial-mt.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  
  @font-face {
    font-family: "MT-Arial-Bold";
    src: url('/fonts/arial-mt-bold.woff') format('woff');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <RootLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </RootLayout>
  );
}
