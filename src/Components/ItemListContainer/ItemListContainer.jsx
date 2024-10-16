import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getDocs,
  collection,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import CartContex from "../../Contex/CartContex";
import "./style.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams(); // Obtienes la categoría seleccionada
  const { sumar, restar } = useContext(CartContex);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "videojuegos");

    // Filtras los productos según la categoría seleccionada
    let q;
    if (categoryId === "consolas") {
      q = query(
        itemCollection,
        where("categoria", "==", "Consola de videojuegos")
      );
    } else if (categoryId === "videojuegos") {
      q = query(itemCollection, where("categoria", "==", "Videojuego"));
    } else {
      q = itemCollection; // Si no hay categoría seleccionada, muestra todo
    }

    getDocs(q).then((snapshot) => {
      setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, [categoryId]); // El efecto se ejecuta cada vez que `categoryId` cambia

  return (
    <div className="container">
      <ItemList items={productos} />
    </div>
  );
};

export default ItemListContainer;
