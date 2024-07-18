import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h3>WHAT KIND OF BAKED DO YOU LIKE?</h3>
            {['PIE','BREAD','CAKE','CUPCAKE','WEDDING CAKE','ALL']
            .map(category =><Filter category={category}/>)}
            
        
        </div>
    )
}
export default AllCategories;