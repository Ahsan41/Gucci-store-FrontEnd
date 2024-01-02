import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect as Redirect,
  useNavigate,
} from "react-router-dom";
import Succes from './pages/succes';
import Success from './pages/succes';


function App() {
  console.log(localStorage.getItem("persist:root"))

  const user = true;
  return ( 
  <>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>        
      <Routes>
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>

       <Routes>
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
      <Routes>
        <Route path="/login" element={ <Login/>} />
      </Routes>
     
      <Routes>
        <Route path="/register" element={ <Register/>} />
      </Routes> 

      <Routes>
        <Route path="/sucess" element={ <Success/>} />
      </Routes> 

    </Router>
  </>
  )
}

export default App;
