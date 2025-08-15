import MainLayaout from "@/layouts/MainLayaout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayaout>
      <Component {...pageProps} />
    </MainLayaout>
  );
}
