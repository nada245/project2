import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar />
        </div>
        <div className='col-10'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="products/productID" element={<ProductDetails />} />
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
