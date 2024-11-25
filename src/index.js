import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Bar from "./Header/Bar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <Provider store={store}> 
    <Router>   
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Cart />} />
      </Routes>
    </Router>
  </Provider>
);
