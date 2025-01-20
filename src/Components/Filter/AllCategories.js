import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <p className="question">WHAT KIND OF BAKED DO YOU LIKE?</p>
            {['PIE','BREAD','CAKE','CUPCAKE','WEDDING CAKE','ALL']
            .map(category =><Filter key={category} category={category}/>)}
        </div>
    )
}
export default AllCategories;
