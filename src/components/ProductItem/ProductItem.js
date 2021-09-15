import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { removeProductItem } from "../../store/action-creators/productActions";
import { useHistory } from "react-router";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const router = useHistory();

  const removeHandler = (id) => {
    let confirm = window.confirm("Ви точно хочете видалити товар ?");
    if (confirm) {
      dispatch(removeProductItem(id));
    }
  };

  return (
    <div className="productItem">
      {product.id}. <img className="productImg" src={product.image} alt="img" />{" "}
      {product.title}
      <div className="descriptionItem">Опис: {product.description}</div>
      <div>В наявності: {product.rating.count}</div>
      <div className="itemBtns">
        <button
          onClick={() => router.push(`/${product.id}`)}
          className="itemBtn"
        >
          Детальніше
        </button>
        <button onClick={() => removeHandler(product.id)}>Видалити</button>
      </div>
    </div>
  );
};

export default ProductItem;
