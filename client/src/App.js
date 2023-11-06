import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/Title";
import { Body } from "./components/body";
import { Footer } from "./components/Footer";

const Applayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<Applayout />, rootElement);
