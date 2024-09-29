import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import CartContex from "../../Contex/CartContex";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addItem } = useContext(CartContex);
  const onAdd = (c) => {
    addItem(item, c);
  };
  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "videojuegos", id);
    getDoc(docRef).then((snapshot) => {
      setItem({
        id: snapshot.id,
        ...snapshot.data(),
      });
    });
  }, []);

  return <div className="">{<ItemDetail item={item} onAdd={onAdd} />}</div>;
};

export default ItemDetailContainer;
