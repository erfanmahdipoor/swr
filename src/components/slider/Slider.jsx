import React from 'react'
import { Carousel } from 'react-bootstrap'
import imageUrl from "../../assets/mesh-gradient.png"
const Slider = ({data}) => {
  console.log(data);
  return (
    <>
  {  data.map((item) => {
    return(
      <Carousel key={item.id}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imageUrl}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.slug}</p>
        </Carousel.Caption>
      </Carousel.Item> 
  </Carousel>
    )
    })}

    </>
  )
}

export default Slider