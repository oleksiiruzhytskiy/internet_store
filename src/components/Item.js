
const Item = ({ item, addToCart, getProductInfo }) => {
    const {title, img, category, price } = item;
  return (
    <div>
      <img src={`./images/${img}`} alt={title} onClick={() => getProductInfo(item)} />
      <h2>{title}</h2>
      <p>{category}</p>
      <b>{price}$</b>
      <div onClick={()=> addToCart(item)} className="add-to-basket">+</div>
    </div>
  );
}

export default Item;
