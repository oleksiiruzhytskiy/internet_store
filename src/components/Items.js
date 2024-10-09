import Item from "./Item";
const Items = ({ items, addToCart, getProductInfo }) => {
  return (
    <main>
      {items.map((item, i) => (
        <Item key={i} item={item} getProductInfo={getProductInfo} addToCart={addToCart}  />
      ))}
    </main>
  );
};

export default Items;
