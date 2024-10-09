import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data";
import categories from "./categories";
import Items from "./components/Items";
import { useState } from "react";
import Categories from "./components/Categories";
import ProductInfo from "./components/ProductInfo";

const App = () => {
  let [orderProduct, setOrdeProduct] = useState([]);
  let [products, setProducts] = useState(data);
  let [showProductInfo, setShowProductInfo] = useState(false);
  let [productInfo, setProductInfo] = useState({});

  const sortProducts = (category) => {
    console.log(category);
    setProducts(
      data.filter(
        (item) =>
          (item =
            category.toLowerCase() === "all"
              ? item
              : item.category === category)
      )
    );
  };

  const addToCart = (item) => {
    if (orderProduct.includes(item)) {
      alert("This product is already in the cart");
      return;
    }
    setOrdeProduct([...orderProduct, item]);
  };
  const removeOrderProduct = (id) => {
    setOrdeProduct(orderProduct.filter((item) => item.id !== id));
  };

  const getProductInfo = (item) => {
    setProductInfo(item);
    setShowProductInfo(!showProductInfo);
  };
  return (
    <div className="App">
      <Header orderProduct={orderProduct} removeOrderProduct={removeOrderProduct}  />
      <Categories
        data={products}
        categories={categories}
        sortProducts={sortProducts}
      />
      <Items
        items={products}
        addToCart={addToCart}
        getProductInfo={getProductInfo}
      />
      {showProductInfo && <ProductInfo productInfo={productInfo} getProductInfo={getProductInfo}  />}
      <Footer />
    </div>
  );
};

export default App;
