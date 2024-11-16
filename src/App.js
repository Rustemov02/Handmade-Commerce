import React, { useEffect, useState } from "react";
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

function App() {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fillData());
 
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <Bar />
      <Nav />
      <OrderNavigation />
      {/* <BestSeller /> */}
      {/* <Categories /> */}
      <Services />
      <Register />
      <Footer/>
    </div>
  );
}

export default App;
