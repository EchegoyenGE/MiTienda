import './App.css';
import { ProductsProvider } from './context/providers/ProductsContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/* Components */
import Navbar from './components/ui/Navbar'
import HomePage from './pages/home/HomePage';
import ProductForm from './pages/products/ProductForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container App'>
        <Switch>
          <ProductsProvider>
            <Route path='/' exact component={HomePage} />
            <Route path='/products/new' component={ ProductForm }/>
          </ProductsProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
