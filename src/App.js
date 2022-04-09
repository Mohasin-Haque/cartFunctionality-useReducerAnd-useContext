import { useCart } from "./cart-context";
import "./styles.css";

export default function App() {
  const { state, dispatch } = useCart();
  const { cartItems, totalPrice } = state;
  return (
    <div className="App">
      <h1> Items in cart : {cartItems}</h1>
      <h2>Total Price : {totalPrice}</h2>

      {state.items.map((items) => {
        const { id, name, price } = items;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <h2>{price}</h2>
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: price })}
            >
              Add to Cart
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", id: id, payload: price })
              }
            >
              Remove from Cart
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
