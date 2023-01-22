import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import LinkContextProvider from "./Context/LinkContext";
import SearchContextProvider from "./Context/SearchContext";
import FavoriteContextProvider from "./Context/FavoriteContext";
import LoginContextProvider from "./Context/LoginContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider>
      <LoginContextProvider>
        <FavoriteContextProvider>
          <SearchContextProvider>
            <LinkContextProvider>
              <App />
            </LinkContextProvider>
          </SearchContextProvider>
        </FavoriteContextProvider>
      </LoginContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
