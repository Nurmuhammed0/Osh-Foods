import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Detailed from './Detailed'
export default function Home() {
  const [spin, setSpin] = useState(true)
  const [dd, setDd] = useState([])
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((i) => {
        setDd(i.data.categories)
      }).finally(e => {
        setSpin(false)
      })
  }, [])
  return (
    <div>
      <Detailed/>
      <Row>
        {spin ? <div style={{ display: 'flex', justifyContent: 'center' }}>

          <Spinner variant='primary' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>

        </div>
          :
          <>
            {
              dd.map((e) => {
                return (
                  <Col md={4} className="mt-5">
                    <Card as={Link} to={`/imgg/${e.strCategory}`} style={{ borderRadius: '50px' }}>
                      <Card.Img variant="top" style={{ hover: '20px' }} src={e.strCategoryThumb} key={e.id} />
                      <Card.Body>
                        <Card.Title align="center">{e.strCategory}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }</>
        }

      </Row>
    </div>
  )
}
