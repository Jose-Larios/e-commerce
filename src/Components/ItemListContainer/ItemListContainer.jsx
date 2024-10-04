import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import CartContex from "../../Contex/CartContex";
import "./style.css";

const ItemListContainer = () => {
  const [productos, setProdutos] = useState([]);
  const { categoryId } = useParams();
  const { sumar, restar } = useContext(CartContex);
  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "videojuegos");
    getDocs(itemCollection).then((snapshot) => {
      setProdutos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="container">
      <ItemList items={productos} />
    </div>
  );
};

export default ItemListContainer;
