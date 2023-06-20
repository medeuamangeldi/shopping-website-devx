import { Outlet, useParams } from "react-router-dom"
import categories from "../../data/categories";
import ItemDescription from "../ItemDescription/itemDescription.component";

const ItemsList = () => {
    const { categoryId } = useParams();
    const items = categories[categoryId].items;

    return (
        <div>
            <Outlet />
            {items.map((item, ind) => (
                <ItemDescription key={ind} item={item}/>
            ))}
        </div>
    )
}

export default ItemsList;