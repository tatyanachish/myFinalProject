
import './App.css';
import Cakes from './Components/CakesComponents/Cakes';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';


function App() {
  return (
    <div className='App'>      
      <div className='headline'>
        <h2>Brooklyn Bakery</h2>
        <h3>Baked Goods to Order</h3>
      </div>
      <div className='container'>
        <div className='partCategory'>      
        <AllCategories />  
        </div>
        <div className='partCakes'>     
        <Cakes />     
        </div> 
        <div className='partCart'> 
        <Cart /> 
        </div>
      </div>
    </div>
  );
}

export default App;
