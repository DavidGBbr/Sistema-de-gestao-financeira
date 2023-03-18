import React from "react";
import { CardItems } from "./components/CardItems";
import { Form } from "./components/Form";
import { Header } from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <CardItems />
      <Form/>
    </>
  );
};

export default App;
