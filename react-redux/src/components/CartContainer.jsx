/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { ClearCart } from "../actions";

import { connect } from "react-redux";

import CartItem from "./CartItem";

const CartContainer = ({ cart = [], totalAmount }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>

      {/* cart items */}
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalAmount}.00</span>
          </h4>
        </div>
        <button onClick={() => ClearCart()} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

function mapStateToProps(state) {
  return { cart: state.cart, totalAmount: state.totalAmount };
}

export default connect(mapStateToProps)(CartContainer);
