import React, { useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "./ProductItemPage.css";
import { Link } from "react-router-dom";
import EditItemModal from "../UI/EditItemModal/EditItemModal";
import EditFormItem from "../EditFormItem/EditFormItem";
import Comments from "../Comments";

const ProductItemPage = () => {
  const params = useParams();
  const currentId = params.id;
  const product = useSelector((state) => state.products.products);
  const currentProduct = product.filter(
    (product) => +product.id === +currentId
  );
  const [modal, setModal] = useState(false);

  if (!product) {
    return;
  }

  return (
    <div>
      <EditItemModal visible={modal} setVisible={setModal}>
        <EditFormItem visible={modal} setVisible={setModal} />
      </EditItemModal>
      <h1>{currentProduct[0].title}</h1>
      <img
        className="currentProductImg"
        src={currentProduct[0].image}
        alt="img"
      />
      <div className="descriptionItem">
        Description: {currentProduct[0].description}
      </div>
      <div>В наявності: {currentProduct[0].rating.count}</div>
      <div>Рейтинг серед покупців: {currentProduct[0].rating.rate}</div>
      <div className="currentPageBtns">
        <Link to="/">
          <button>Назад</button>
        </Link>

        <button className="editItemBtn" onClick={() => setModal(true)}>
          Редагувати
        </button>
      </div>
      <Comments />
    </div>
  );
};

export default ProductItemPage;
