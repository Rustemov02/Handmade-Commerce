import React, { useEffect, useState, lazy, Suspense } from "react";
import "./reset.css";
import "./index.css";

// import { Header } from './Header/Header'
import Nav from "./MainSection/Nav";
// import Categories from './Categories'
import OrderNavigation from "./OrderNavigation";
// import BestSeller from './BestSeller'
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
    }, 1000); 
  }, [isLoaded]);

  return (
    <>
      {isLoaded ? (
        <div>
          {/* <Header /> */}
          <Bar />
          <Nav />
          <OrderNavigation />
          {/* <BestSeller /> */}
          {/* <Categories /> */}
          <Services />
          <Register />
          <Footer />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <Mosaic
            color="#c3922f"
            size="large"
            text="Loading..."
            textColor="#c79827"
          />
        </div>
      )}
    </>
  );
}

export default App;
