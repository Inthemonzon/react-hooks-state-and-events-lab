import React, {useState} from "react";

function Item({ name, category }) {

  const[inCart, setInCart] = useState(false);

  const cartClick = () => {
    setInCart(!inCart);
  };

  const buttonText = () => inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={inCart ? "In-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={cartClick} className={inCart ? "remove" : "add"}>
        {buttonText()}
      </button>
    </li>
  );
}

export default Item;
