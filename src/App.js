import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Menus from "./components/Menus";

function App() {
  const menusData = [
    {
      name: "피자",
      price: 20000,
      quantity: 1,
    },
    {
      name: "김치찌개",
      price: 9000,
      quantity: 1,
    },
    {
      name: "자장면",
      price: 6500,
      quantity: 1,
    },
  ];

  return (
    <React.Fragment>
      <Header></Header>
      <Menus data={menusData}></Menus>
    </React.Fragment>
  );
}

export default App;
