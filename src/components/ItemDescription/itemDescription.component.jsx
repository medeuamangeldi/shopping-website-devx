import CartStore from "../../store/CartStore";
import "./itemDescription.styles.css"

const ItemDescription = ({item}) => {
    const {name, description, price, imageUrl} = item;

    return (
        <div className="item-container">
            
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}/>

          <div className="item-body-container">
            <h2>{name}</h2>
            <p>{description}</p>
            <h4>${price}</h4>
            <button className="item-button" onClick={() => CartStore.addToCart(item)}>Add To Cart</button>
          </div>
        </div>
    )
}

export default ItemDescription;