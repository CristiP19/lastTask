import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes/theme";
import { DataProvider } from "context/DataContext";
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<span className="loader" />}>
        <BrowserRouter>
          <DataProvider>
            <App />
          </DataProvider>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
