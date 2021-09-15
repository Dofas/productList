import React, { useRef, useState } from "react";
import "./ProductForm.css";
import { useDispatch } from "react-redux";
import { createProductItem } from "../../store/action-creators/productActions";

const ProductForm = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [count, setCount] = useState(0);
  const picture = useRef();

  const addProduct = (e) => {
    e.preventDefault();
    const newProductItem = {
      id: Date.now(),
      title: title,
      description: descr,
      image: picture.current.value,
      rating: {
        count: count,
      },
    };
    dispatch(createProductItem(newProductItem));
    setVisible(false);
  };

  return (
    <form className="productForm">
      <div className="closeBtn">
        <button
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Закрити
        </button>
      </div>
      <label>Виберіть фото для товару</label>
      <input className="formInput" ref={picture} type="file" />
      <input
        className="formInput"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Введіть назву товару"
      />
      <input
        className="formInput"
        onChange={(e) => setDescr(e.target.value)}
        value={descr}
        type="text"
        placeholder="Введіть опис товару"
      />
      <input
        className="formInput"
        onChange={(e) => setCount(e.target.value)}
        value={count}
        type="text"
        placeholder="Введіть кількість товару"
      />
      <button onClick={addProduct}>Додати товар</button>
    </form>
  );
};

export default ProductForm;
