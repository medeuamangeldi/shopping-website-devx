import './categoryItem.styles.css';
import { Link } from 'react-router-dom';

const CategoryItem = ({categoryItem}) => {
    const { title, imageUrl } = categoryItem;

    return (
        <div className="category-container">
            
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
          }}/>

          <div className="category-body-container">
            <h2>{title}</h2>
            <Link to={`/${categoryItem.id}`}>Shop Now</Link>
          </div>
        </div>
    )
}

export default CategoryItem;