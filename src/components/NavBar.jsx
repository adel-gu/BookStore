import {LinkContainer} from 'react-router-bootstrap';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {PersonFill} from "react-bootstrap-icons";

// Style Sheet
import './NavBar.css';

const NavbarBookStore = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-white">
          <Container>
            <Navbar.Brand className="logo fw-bold">Bookstore CMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto align-items-center w-100">
                <LinkContainer to="/">
                  <Nav.Link className="book-nav-link">BOOKS</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/categories">
                  <Nav.Link className="book-nav-link">CATEGORIES</Nav.Link>              
                </LinkContainer>
                <Nav.Link className="ms-auto">
                  <div className='border rounded-circle d-flex p-1'>
                    <PersonFill className='text-primary'/>
                  </div>
                </Nav.Link>                            
              </Nav>
            </Navbar.Collapse>          
          </Container>
      </Navbar>
    </header>
  )
}

export default NavbarBookStore;