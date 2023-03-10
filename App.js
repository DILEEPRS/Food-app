import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Header from "./components/header";
import Body from "./components/body";

const AppLayout = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
