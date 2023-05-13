import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme/theme.js";
import { Provider } from "react-redux";

//Store
import store from './Features/Store/Store.js'

// Persist 
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
