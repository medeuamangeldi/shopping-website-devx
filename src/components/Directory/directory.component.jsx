import './directory.styles.css';
import CategoryItem from '../CategoryItem/categoryItem.component';

const Directory = ({categoryItems}) => {
    return (
        <div className='directory-container'>
            {categoryItems.map((categoryItem)=>(
                < CategoryItem key={categoryItem.id} categoryItem={categoryItem}/>
            ))}
        </div>
    )
}

export default Directory;