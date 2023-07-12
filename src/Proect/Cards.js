import { useState, useEffect } from 'react'
import { Card, Button, Row, Col, Spinner, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Cards(props) {
  const [spin,setSpin] = useState(true)
  const [data, setdata] = useState([])
  useEffect(() => {
    setdata(props)
    setTimeout(() => {
      setSpin(false)
    },1000) 
  }, [props])
  console.log(data);
  
  
  return (
    <div>
      <Row>
        {spin ? <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Spinner variant='primary' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
          :
          <>
            {data.name && data.name.map((m) => {
              return (
                <Col md={4}>
                  <Card as={Link} to={`/detailed/${m.idMeal}`} className='m-4' style={{ borderRadius: '30px' }}>
                    <Card.Img style={{ borderRadius: '30px' }} src={m.strMealThumb || m.strCategoryThumb} key={m.id} />
                    <Card.Body>
                      <div align="center">
                        <Card.Title>{m.strMeal || m.strCategory}</Card.Title>
                        <Button variant="primary">Basket</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </>
        }
      </Row>
    </div>
  )
}
