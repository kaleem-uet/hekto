import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import theme from "./Theme/theme";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
