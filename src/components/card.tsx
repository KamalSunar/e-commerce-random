import React from "react";
import ProductImage from "../assets/images/product.png";
import { ReactComponent as CartImage } from "../assets/images/fast-buy.svg";
import { ProductListType } from "../types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { add } from "../store/cartSlice";

interface CardType {
  cardInfo: ProductListType;
}

const Card = ({ cardInfo }: CardType) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(add(cardInfo));
  };

  return (
    <div className="featured__product">
      <div className="featured__box">
        {cardInfo.discountPercentage > 0 && (
          <div className="featured__new">
            {cardInfo.discountPercentage}% OFF
          </div>
        )}
        <div
          className="featured__cart"
          title="Add to Cart"
          onClick={() => {
            handleAddToCart();
          }}
        >
          <CartImage />
        </div>
        <img src={ProductImage} alt={cardInfo.title} />
      </div>
      <div className="featured__data">
        <h3 className="featured__name">{cardInfo.title}</h3>
        <div className="featured__price">${cardInfo.price}</div>
      </div>
    </div>
  );
};

export default Card;
