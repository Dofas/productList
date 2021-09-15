import React, { useRef, useState } from "react";
import "./EditFormItem.css";
import { useDispatch } from "react-redux";
import { updateProduct } from "../../store/action-creators/productActions";
import { useParams } from "react-router";

const EditFormItem = ({ visible, setVisible }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [count, setCount] = useState(0);
  const picture = useRef();
  const params = useParams();

  const addProduct = (e) => {
    e.preventDefault();
    const updatedProductItem = {
      id: params.id,
      title: title,
      description: descr,
      image: picture.current.value,
      rating: {
        count: count,
      },
    };
    dispatch(updateProduct(updatedProductItem));
    setVisible(false);
  };

  return (
    <form className="productForm">
      <label>Виберіть нове фото для товару</label>
      <input className="formInput" ref={picture} type="file" />
      <input
        className="formInput"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Введіть нову назву товару"
      />
      <input
        className="formInput"
        onChange={(e) => setDescr(e.target.value)}
        value={descr}
        type="text"
        placeholder="Введіть новий опис товару"
      />
      <input
        className="formInput"
        onChange={(e) => setCount(e.target.value)}
        value={count}
        type="text"
        placeholder="Введіть нову кількість товару"
      />
      <div className="editBtns">
        <button onClick={addProduct}>Зберегти зміни</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setVisible(false);
          }}
        >
          Відмінити зміни
        </button>
      </div>
    </form>
  );
};

export default EditFormItem;
