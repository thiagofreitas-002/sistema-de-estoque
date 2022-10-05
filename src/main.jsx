import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Global, css } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Overpass:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap");

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          list-style: none;
          text-decoration: none;
          font-family: "Roboto", "Overpass", sans-serif;
        }

        html,
        body {
          width: 100%;
          min-height: 100vh;
        }
      `}
    />
    <App />
  </React.StrictMode>
);
