import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import { Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export default function Imggg() {
  const[add,setAdd]=useState([])
  let{id}=useParams()
  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`).then((s)=>{console.log(s); setAdd(s.data.meals)})
  },[id])
  return (
    <div>
      <Row>
        <Col>
          <Cards name={add}/>
        </Col>
      </Row>
    </div>
  )
}
