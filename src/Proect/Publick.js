import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Cards from './Cards'
export default function Publick(props) {

  const [add, setAdd] = useState([])

  let { id } = useParams()

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)
      .then((f) => { setAdd(f.data.meals) })
    console.log(add)
  }, [id])
  return (
    <div>
      <Row>
        <Col>
          <Cards name={add} />
        </Col>
      </Row>
    </div>
  )
}
