import CartStore from '../../store/CartStore'
import './cart.styles.css'
import { observer } from 'mobx-react';

const Cart = observer(() => {
    const { cartCount, items, totalPrice } = CartStore;

    return (
        <div>
            Total: {cartCount} {cartCount === 1 ? 'item' : 'items'} for ${totalPrice}

            <div>
                <h3>Name - Price</h3>
                <ul>
                    {items.map((item, ind) => (
                        <li>
                            {item.name} - ${item.price} <button>-</button> <button>+</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

export default Cart;