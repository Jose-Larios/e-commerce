import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContex from "../../Contex/CartContex";

const NavBar = () => {
  const { cart } = useContext(CartContex);
  return (
    <ul className="navbar">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"category/consolas"}>Consolas</NavLink>
      <NavLink to={"category/videojuegos"}>Videojuegos</NavLink>
      <NavLink to={"cart"}>
        Cart
        <span>{cart.length}</span>
      </NavLink>
    </ul>
  );
};

export default NavBar;
