import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductList from './components/ProductList';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
       <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mobile Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Phones</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     </div>
     <Routes>
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<ProductList />} />
      <Route path="*" element={<ProductList />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
