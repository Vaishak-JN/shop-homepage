
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/NavBar';
import Products from './components/Products';
import ProductContextProvider from './store.js/ProductContextProvider';


function App() {

  return (
    <ProductContextProvider>
      <Navbar />

      <Banner />
      <Products />
    </ProductContextProvider>
  );
}

export default App;
