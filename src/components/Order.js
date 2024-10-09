import {FaTrash} from 'react-icons/fa';
const Order = (props) => {
  const { id, img, title, price } = props.data;
  return (
    <div className="cart-item">
      <img src={`./images/${img}`} alt="item" />
      <h3>{title}</h3>
      <b>{price}$</b>
      <FaTrash className='empty' onClick={() => props.removeOrderProduct(id)}>X</FaTrash>
    </div>
  );
};

export default Order;
