import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const totalSum = (orderProduct) => {
  return orderProduct.reduce((acc, item) => acc + item.price, 0);
}
const showOrder = (props) => {
  return (
    <div>
      {props.orderProduct.map((item) => (
        <Order
          key={item.id}
          data={item}
          removeOrderProduct={props.removeOrderProduct}
        />
      ))}
      <p className="total">{`Total: ${totalSum(props.orderProduct)}$`}</p>
    </div>
  );
};

const Header = (props) => {
  let [cart, setCart] = useState(false);
  return (
    <header>
      <span className="logo"> House Stuffs</span>
      <ul className="menu">
        <li>About us</li>
        <li>Contacts</li>
        <li>Cabinet</li>
      </ul>
      <FaShoppingCart
        onClick={() => setCart((cart = !cart))}
        className={`shop-cart ${cart && "active"}`}
      />
      {cart && (
        <div className="cart">
          {props.orderProduct.length > 0 ? (
            showOrder(props)
          ) : (
            <div className="cart-empty">You didn`t make any orders</div>
          )}
        </div>
      )}
      <div className="presentation"></div>
    </header>
  );
};
export default Header;
