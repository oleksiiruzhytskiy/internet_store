const ProductInfo = (props) => {
  return (
    <div className="product-info">
      {props.productInfo.title && (
        <div>
          <img onClick={props.getProductInfo}
            src={`./images/${props.productInfo.img}`}
            alt={props.title}
          />
          <h2>{props.productInfo.title}</h2>
          <p>{props.productInfo.category}</p>
          <b>{props.productInfo.price}$</b>
          <div className='add-to-basket'>+</div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
