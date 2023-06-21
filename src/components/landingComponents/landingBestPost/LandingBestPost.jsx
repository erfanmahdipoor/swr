import React from 'react'
import { Row,Col,Card } from 'react-bootstrap'
const LandingBestPost = ({data}) => {
  return (
    <Row>
    {
      data.filter((items,index)=>index<4).map((item)=>{
          return(
              <Col xs={3} key={item.id} className="my-3">
                 <Card className='border-3 shadow-lg h-100 '>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      {item.text.lenghth<50?item.text:`${item.text.slice(0,50)} ...`}
                   </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                      <p>{item.date}</p>
                  </Card.Footer>
                </Card>
               </Col>
          )
      })
    }
      </Row>
  )
}

export default LandingBestPost