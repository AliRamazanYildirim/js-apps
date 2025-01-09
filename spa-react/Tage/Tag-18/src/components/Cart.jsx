import useCartStore from "../store/useCartStore"

const Cart = () => {
    const {cart, removeFromCart, calculateTotal, total} = useCartStore();

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <button onClick={calculateTotal}>Calculate Total</button>
            <h3>Total: {total}</h3>
        </div>
    );
};

export default Cart;