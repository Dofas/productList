import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store/action-creators/productActions";
import ProductForm from "../ProductForm/ProductForm";
import Select from "../UI/Select/Select";
import CreateItemModal from "../UI/CreateItemModal/CreateItemModal";
import { sortProducts } from "../../store/action-creators/productActions";

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  const [modal, setModal] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    dispatch(sortProducts(sort));
  };

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => setModal(true)}>Добавити товар</button>
      </div>
      <CreateItemModal visible={modal} setVisible={setModal}>
        <ProductForm visible={modal} setVisible={setModal} />
      </CreateItemModal>
      <Select
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортувати по"
        options={[
          { value: "title", name: "По назві" },
          { value: "count", name: "По кількості" },
        ]}
      />
      <ul>
        {products.length > 0 ? (
          <div>
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div>Товарів немає</div>
        )}
      </ul>
    </div>
  );
};

export default ProductPage;
