import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
export default function Navbar1() {
  const [add, setAdd] = useState([])

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((f) => { setAdd(f.data.meals) })
    console.log(add);
  }, []) 
  return (
    <div>
      <Navbar bg="dark" variant={'success'} style={{ fontSize: '30px' }} expand='lg'>
        <Container fluid>
          <Navbar.Brand href="#" style={{ fontSize: '30px' }}>Osh Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="country" id="navbarScrollingDropdown">
                {add && add.map(f => {
                  return (
                  
                      <NavDropdown.Item as={Link} to={`/add/${f.strArea}`} key={f.id }>{f.strArea}</NavDropdown.Item>
                   
                  )
                })
                }
              </NavDropdown>
            </Nav>
            <Form className="d-flex " >
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 fs-3"
                aria-label="Search"
              />
              <Button variant="danger" className='fs-3'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
