import type { AppProps } from "next/app";
import { GlobalStyles } from "../styles/global-styles";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import styled from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
