//npm install react-router-dom
// react-router-dom v6
import Welcome from './components/Welcome/Welcome';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom'
import MainHeader from './components/MainHeader/MainHeader';

//Routes is a group of all route
//route is the path for single page
function App() {
  return (
    <div>
      <MainHeader />
      <main>
      <Routes>
        {/* localhost:3000 */}
        {/* <Route path='/' element={<Welcome />} /> */}
        <Route path='/' element={<Navigate to='/welcome' />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />{/*productId is a placeholder*/}
        <Route path='*' element={<p>Page Not Found</p>} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
