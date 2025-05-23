import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// eslint-disable-next-line
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// eslint-disable-next-line
import NotificationList from "./chapter_06/NotificationList";
// eslint-disable-next-line
import Accommodaten from "./chapter_07/Accommodate";
import ConfirmButton from "./chapter_08/ConfirmButton";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
