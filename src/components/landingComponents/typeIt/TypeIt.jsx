import React from 'react'
import TypeIt from 'typeit-react'
const TypeItComponent = () => {
  return (
      <h4 className='text-muted'>
        <TypeIt
        getBeforeInit={(instance)=>{
            instance
            .type("Hi I'm ")
            .pause(750)
            .delete(16)
            .pause(600)
            .type("developer")
            return instance
        }}
        options={{loop:true,speed:200}}></TypeIt>
      </h4>
  )
}

export default TypeItComponent