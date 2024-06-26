import { useShoppingCartStore } from "../store/useShoppingCartStore";

export const IncreaseQuantity = ({ id }: { id: number }) => {
  const increaseQuantity = useShoppingCartStore(
    (state) => state.increaseQuantity
  );

  return (
    <button onClick={() => increaseQuantity(id)} className="quantity-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
      </svg>
    </button>
  );
};

export const DecreaseQuantity = ({ id }: { id: number }) => {
  const decreaseQuantity = useShoppingCartStore(
    (state) => state.decreaseQuantity
  );

  return (
    <button onClick={() => decreaseQuantity(id)} className="quantity-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
  );
};
