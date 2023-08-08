import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  return <div>Item Detail Page for ID: {id}</div>;
}

export default ItemDetail;
