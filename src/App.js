
import './App.css';
import Bgimg from './Bgimg';
import Homepage from './Homepage';
import GameStart from './GameStart';
import Imposter from './Imposter';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Product from './Product';
import Product_demo from './Product_demo';
import Voting from './Voting';
function App() {
  return (
    <div className="App">
     
      <Router>
      <Bgimg />
      <Switch>
      <Route path='/GameStart'>
            <GameStart />
          </Route>
          <Route path='/Product'>
            <Product />
          </Route>  
          <Route path='/Imposter'>
            <Imposter />
          </Route>
          <Route path='/Product_demo'>
            <Product_demo />
          </Route>
          <Route path='/Voting'>
            <Voting/>
          </Route>
          <Route path='/'>
            <Homepage/>
            </Route>
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
