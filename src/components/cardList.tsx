import React from "react";
import ProductImage from "../assets/images/product.png";
import { ReactComponent as DeleteImage } from "../assets/images/delete.svg";
import { ProductListType } from "../types";
import { decrement, increment, remove } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

interface cardListType {
  cardListInfo: ProductListType;
}

const CardList = ({ cardListInfo }: cardListType) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleRemoveFromCart = () => {
    dispatch(remove(cardListInfo.id));
  };
  return (
    <div className="cardList">
      <div className="cardList-left">
        <div className="cardList-image">
          <div className="img-box">
            <img src={ProductImage} alt="" />
          </div>
          <div
            className="remove"
            onClick={() => {
              handleRemoveFromCart();
            }}
          >
            <DeleteImage />
          </div>
        </div>
        <div className="cardList-details">
          <h6>{cardListInfo.title}</h6>
          <div className="qty">
            <p>Qty:</p>
            <div className="qty-total">
              <button
                className="increment"
                type="button"
                onClick={() => {
                  dispatch(decrement(cardListInfo.id));
                }}
                disabled={cardListInfo.cartQuantity === 1}
              >
                -
              </button>
              <div className="total">{cardListInfo.cartQuantity}</div>
              <button
                className="increment"
                type="button"
                onClick={() => {
                  dispatch(increment(cardListInfo.id));
                }}
                disabled={cardListInfo.cartQuantity === cardListInfo.quantity}
              >
                +
              </button>
            </div>
          </div>
          <div className="price">Price: ${cardListInfo.price.toFixed(2)}</div>
        </div>
      </div>
      <div className="cardList-right">
        <h5>
          Sub Total: $
          {(cardListInfo.cartQuantity * cardListInfo.price).toFixed(2)}
        </h5>
      </div>
    </div>
  );
};

export default CardList;
