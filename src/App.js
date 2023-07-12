
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar1 from './Proect/Navbar1'
import Home from './Proect/Home'
import { Container } from 'react-bootstrap'
import Cards from './Proect/Cards'
import Publick from './Proect/Publick'
import Imgg from './Proect/Imgg'
import Detailed from './Proect/Detailed'
export default function App() {
  return (
    <div>
      <Navbar1 />
      <Container>
        <Routes>
          <Route path='/cards' element={<Cards/>}/>
          <Route path='/add/:id' element={<Publick/>}/>
          <Route path='/imgg/:id' element={<Imgg/>}/>
          <Route path='/detailed/:id' element={<Detailed/>}/>
          <Route path="/" element={<Home/>} />

        </Routes>
      </Container>
    </div>
  )
}
