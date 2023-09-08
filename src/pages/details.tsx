import React from "react";
import CardList from "../components/cardList";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Details = () => {
  const data = useSelector((state: RootState) => state.cart);

  const grantTotal = data.reduce(
    (partialSum, a) => partialSum + a.cartQuantity * a.price,
    0
  );

  const totalDiscount = data.reduce(
    (partialSum, a) =>
      partialSum +
      a.cartQuantity * ((a.total - a.discountedPrice) / a.quantity),
    0
  );

  return (
    <div className="container">
      <div className="cart-details">
        <h4>My Cart</h4>
        {data.length === 0 && <h5>No Item Found</h5>}
        {data.length > 0 && (
          <div className="cart-wrap">
            <div className="cart-left">
              {data.map((item, index) => (
                <CardList cardListInfo={item} key={index} />
              ))}
            </div>
            <div className="cart-right">
              <div className="order">
                <h5>Order Summary</h5>
                <div className="order-info">
                  <p>
                    <span>
                      Selected {data.length} item{data.length > 1 ? "(s)" : ""}{" "}
                      Price:
                    </span>{" "}
                    <b>${grantTotal.toFixed(2)}</b>
                  </p>
                  <p>
                    <span>Discount:</span> <b>${totalDiscount.toFixed(2)}</b>
                  </p>
                </div>
                <div className="order-total">
                  <h6>Grant Total</h6>
                  <h6>${(grantTotal - totalDiscount).toFixed(2)}</h6>
                </div>

                <button className="button button-primary">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
