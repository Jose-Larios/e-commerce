import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CCProvider from "./Contex/CCProvider";

const App = () => {
  return (
    <>
      <CCProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />{" "}
        </Routes>
      </CCProvider>
    </>
  );
};

export default App;
