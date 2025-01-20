import { useSelector } from "react-redux";
import { dataCakes } from "../../Data/dataCakes";
import Cake from "./Cake";
import { getSelectedCategory } from "../../Redux/cakesSlice";

const Cakes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div>
            {dataCakes
            .filter(cake => {
                if (selectedCategory === 'ALL') return true;
                return selectedCategory === cake.category
            })
            .map(cake => <Cake key={cake.id} cake={cake}/>)}            
        </div>
    )
}
export default Cakes;
