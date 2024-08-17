import { Nav, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css'
function Mynavbar(){
    let expand ='md'
    return(
        <>
          <Navbar key={expand} expand={expand} className="navbar-bg mb-3" fixed='top'>
          <Container >
            <Navbar.Brand href="#">W3schollWebsite</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                W3schollWebsite
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink href='/'>Home </NavLink>
                    <NavLink href='/html'>Html </NavLink> 
                    <NavLink href='/css'>CSS</NavLink>
                    <NavLink href='/javascript'>JAVASCRIPT </NavLink>
                    <NavLink href='/'>PYTHON </NavLink>
                    <NavLink href='/'>SQL </NavLink>
                    <NavLink href='/'>REACT </NavLink>
                    <NavLink href='/'>DJANGO </NavLink>
                    <NavLink href='/'>PHP </NavLink>
                    <NavLink href='/about'> ABOUT</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
        </>
    )
}
export default Mynavbar