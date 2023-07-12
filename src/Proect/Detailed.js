import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export default function Detailed() {
  let { id } = useParams()
  const [dd, setDd] = useState([])
  console.log(dd)
  useEffect(() => {
    const f = axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`); f.then((s) => { console.log(s); setDd(s.data.meals) })
  }, [id])
  return (
    <div>
      <Row>
        {dd && dd.map((n) => {
          return (
            <Col>
              <Card style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <Card.Title style={{fontSize:'40px'}}>{n.strMeal}</Card.Title>
                  <Card.Img style={{width:'500px', padding:'10px'}} src={n.strMealThumb} />
                </div>
                <Card.Body>
                  <div><br/><br/>
                    <div className='d-flex'>
                    Area:
                    <Card.Title>{n.strArea}</Card.Title>
                    </div>
                    <div className='d-flex'>
                    Category: 
                    <Card.Title>{n.strCategory}</Card.Title>
                    </div>
                    <Card.Text>{n.strInstructions}
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })
        }
      </Row>
    </div>
  )
}
