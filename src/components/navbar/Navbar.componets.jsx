import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Navbarcomponets = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">

        <Link className="link-light text-decoration-none pt-1 bold" to="/">eComerce swr</Link>

      </Navbar.Brand>
      <Nav className="me-auto">
        <Link className="link-light text-decoration-none pt-1" to="/">Home</Link>
        <Link className="link-light text-decoration-none pt-1" to="/bestPost">..................BestPost</Link>
       
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Navbarcomponets