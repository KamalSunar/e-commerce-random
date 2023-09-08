import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { AppDispatch, RootState } from "../store/store";
import Loader from "../components/loader";

const Home = () => {
  const [limit, setLimit] = useState(4);
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: { products },
    status,
  } = useSelector((state: RootState) => state.productList);

  useEffect(() => {
    dispatch(fetchProducts(limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  return (
    <div className="container">
      <div className="home">
        <h2>Featured Products</h2>
        {status === "loading" && (
          <div className="loader-container">
            <Loader size="lg" />
          </div>
        )}
        {status === "idle" && (
          <>
            <div className="card-container">
              {products?.map((item, index) => (
                <Card cardInfo={item} key={index} />
              ))}
            </div>
            <div className="show-more">
              <button
                className="button button-primary"
                onClick={() => {
                  setLimit(limit + 4);
                }}
              >
                Show More
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
