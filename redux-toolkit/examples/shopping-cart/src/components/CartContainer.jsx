import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../slice/modal/modalSlice";

function CartContainer() {
  const { quantity, cart, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (quantity < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your bag</h2>
      </header>

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <footer>
        <hr />

        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>

        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          clear
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;
