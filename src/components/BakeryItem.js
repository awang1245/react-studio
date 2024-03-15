import "../styles/BakeryItem.css";

export default function BakeryItem({ item, cart, setCart, setCartCount }) {
  const onClick = () => {
    setCart([...cart, item]);

    // using the functional form so it updates correctly
    setCartCount((prevCartCount) => ({
      ...prevCartCount,
      [item.name]: prevCartCount[item.name] ? prevCartCount[item.name] + 1 : 1,
    }));
  };
  return (
    <div className="card">
      <img src={item.image} alt="image of bakery item being sold" />
      <div className="card-content">
        <div className="card-text">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
        <div className="row">
          <p>
            {"$"}
            {item.price}
          </p>
          <button onClick={onClick}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
