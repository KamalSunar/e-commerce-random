import React, { useContext } from "react";
import "./app.scss";
import Home from "./pages/home";
import { RoutingContext, pagesMapping } from "./routes/routes";
import Navbar from "./components/navbar";
import Details from "./pages/details";

function App() {
  const { page } = useContext(RoutingContext);
  return (
    <div className="App">
      <Navbar />
      {(pagesMapping.home === page) && <Home />}
      {(pagesMapping.details === page) && <Details />}
    </div>
  );
}

export default App;
