import "../i18n";
import MainLayaout from "@/layouts/MainLayaout";
import { persistor, store } from "@/redux/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { appWithTranslation, useTranslation } from "next-i18next";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainLayaout>
          <Component {...pageProps} />
        </MainLayaout>
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
