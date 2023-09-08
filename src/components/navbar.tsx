import React, { useContext } from "react";
import { ReactComponent as CartImage } from "../assets/images/cart.svg";
import { RoutingContext, pagesMapping } from "../routes/routes";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Navbar = () => {
  const { setPage }: any = useContext(RoutingContext);
  const data = useSelector((state: RootState) => state.cart);

  return (
    <div className="nav">
      <div className="container">
        <div className="navbar">
          <div className="logo" onClick={() => setPage(pagesMapping.home)}>
            <h3>E commerce</h3>
          </div>
          <div className="store" onClick={() => setPage(pagesMapping.details)}>
            <CartImage />
            <div className="count">{data.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
