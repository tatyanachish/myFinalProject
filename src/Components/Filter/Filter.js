import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../Redux/cakesSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(          
        <div>            
            <p className={selectedCategory === category ? 'categoryButtonSelected' : 'categoryButton'} 
            onClick={()=>{dispatch(filterCategory(category))}}>{category}</p>
        </div>
        )
}
export default Filter;