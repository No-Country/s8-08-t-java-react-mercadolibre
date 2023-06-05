import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home' 
import ProductDetail from './pages/ProductDetail' 
import Payment from './pages/Payment';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/product-detail/:id' element={<ProductDetail/>}  />
      <Route path='/payment' element={<Payment/>}  />
    </Routes>
    </>
  );
}

export default App;
