import "./App.css";
import BakeryItem from "./components/BakeryItem";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState({});

  return (
    <div className="App">
      <div className="content">
        <div className="bakery">
          <h1>Bananna's Bakery</h1>
          <div className="bakery-items">
            {bakeryData.map((item, index) => (
              <div className="bakery-container" key={index}>
                <BakeryItem
                  item={item}
                  cart={cart}
                  setCart={setCart}
                  setCartCount={setCartCount}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="cart-items">
          <h2>My Cart</h2>
          {cart.length > 0 && (
            <>
              <div className="cart-content">
                {Object.keys(cartCount).map((item, index) => (
                  <div className="cart-item">
                    <div>{`${cartCount[item]}x`}</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
              <div className="cart-item">
                <b>Total</b>
                <b>
                  {"$"}
                  {cart
                    .reduce((currTotal, item) => currTotal + item.price, 0)
                    .toFixed(2)}
                </b>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
