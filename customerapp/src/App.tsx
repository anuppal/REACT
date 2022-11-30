import './App.css';
import CustomerList from './components/CustomerList';
import ProductList from './samples/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      {/* <CustomerList/> */}
      <ProductList />
    </div>
  );
}

export default App;
