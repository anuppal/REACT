import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ProductList from './components/ProductList';


function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Mobile Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#phones">Phones</Nav.Link>
            <Nav.Link href="#cart">
              <FontAwesomeIcon icon={faShoppingCart}/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <ProductList/>  
   
    </div>
    
  );
}

export default App;
