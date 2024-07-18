
import './App.css';
import Cakes from './Components/CakesComponents/Cakes';
import Cart from './Components/Cart/Cart';

import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div>
      <div className='headline'>
        <h2>Brooklyn Bakery</h2>
        <h3>Baked Goods to Order</h3>
      </div>
      <div className='container'>       
        <AllCategories />      
        <Cakes />      
        <Cart /> 
      </div>
    </div>
  );
}

export default App;
