import React from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import Slider from '../../components/slider/Slider'
import {ReactComponent as PostSvg} from '../../assets/undraw_react_re_g3ui.svg'
import useSWR from 'swr'
import LandingLastPost from '../../components/landingComponents/landingLastPost/LandingLastPost'
import LandingBestPost from '../../components/landingComponents/landingBestPost/LandingBestPost'
import TypeItComponent from '../../components/landingComponents/typeIt/TypeIt'
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
  const navigate =useNavigate()
  const {data:sliderData,error:sliderError}=useSWR("http://localhost:9000/posts ");
  const {data:lastPostData,error:lastPostError}=useSWR("http://localhost:9000/lastPost ")
  const {data:bestPostData,error:bestPostError}=useSWR("http://localhost:9000/bestPost ")
  // if(sliderError|| lastPostError||bestPostError) return <h1>erroor</h1>
  // if(!sliderData|| !lastPostData||!bestPostData) return <h1>loading</h1>
  console.log(lastPostData);
  return (
 <Container className='mt-3'>
       <Row>
        <Col xs={4}><Slider data={sliderData}/></Col>
        <Col xs={8}>
       <PostSvg className='position-realative'/>
       <TypeItComponent/>
        </Col>
      </Row>
      <Row className='my-4'>
        <Col xs={12}>
          <div className='d-flex justify-content-between'>
            <h3>bestPost</h3>
            <button className="btn btn-outline-secondary" onClick={()=>navigate("/bestPost")}>more</button>
          </div>
        </Col>
        <Col xs={12} >
          <LandingBestPost data={bestPostData}/>
        </Col>
      </Row>
      <Row className='my-4'>
        <Col xs={12}>
          <div className='d-flex justify-content-between'>
            <h3>lastpost</h3>
            <button className="btn btn-outline-secondary">more</button>
          </div>
        </Col>
        <Col xs={12} >
          <LandingLastPost data={lastPostData}/>
        </Col>
      </Row>
      
 </Container>
  )
}

export default LandingPage