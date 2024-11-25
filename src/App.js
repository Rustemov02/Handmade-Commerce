import React, { useEffect, useState } from "react";
import "./reset.css";
import "./index.css";

import Nav from "./MainSection/Nav";
import OrderNavigation from "./OrderNavigation";
import Register from "./Register";
import Services from "./Services";
import { useDispatch } from "react-redux";
import { fillData } from "./Redux/amiguSlice";
import Bar from "./Header/Bar";
import Footer from "./Footer";
import { Mosaic } from "react-loading-indicators";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(fillData());

    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, [isLoaded]);

  return (
    <>
      <div
        className={`flex justify-center items-center h-screen ${
          isLoaded ? "hidden" : ""
        } `}
      >
        <Mosaic
          color="#c3922f"
          size="large"
          text="Loading..."
          textColor="#c79827"
        />
      </div>

      <div className={`relative ${isLoaded ? "" : "hidden"}`}>
        <Bar />
        <Nav />
        <OrderNavigation />
        <Services />
        <Register />
        <Footer />
      </div>
    </>
  );
}

export default App;
