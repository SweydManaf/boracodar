import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1>Lista de compras</h1>
        <Form />
      </main>
    </>
  );
}

export default App;
