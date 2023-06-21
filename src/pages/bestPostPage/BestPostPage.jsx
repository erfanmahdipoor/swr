import React, { useState } from 'react'
import UseSWR,{mutate} from 'swr'
import axios from 'axios'
const BestPostPage = () => {
  const [pageIndex, setPageIndex]=useState(1)
  const{data}=UseSWR(`http://localhost:9000/bestPost?_page=${pageIndex}&_limit=10`)
  console.log(data);
  return (
    <div className='container mt-3'>
      <div className='d-flex justify-content-between'>
        <h1 className='lead fs-3'>welcome to best post</h1>
        <button onClick={()=>mutate(`http://localhost:9000/bestPost?_page=${pageIndex+1}&_limit=10`,
        axios.get(`http://localhost:9000/bestPost?_page=${pageIndex+1}&_limit=10`).then(res=>res.data))} className='btn btn-outline-primary'>
          prefetch nxt</button>
      </div>

      <table className='table table-striped table-hover'>
   <thead>
    <tr>
      <th>index</th>
      <th>title</th>
      <th>email</th>
      <th>text</th>
    </tr>
   </thead>
   <tbody>
   {
    data.map((item,index)=>{
      return(
        <tr key={item.id}>
          <th>{index+1}</th>
          <th>{item.title}</th>
          <th>{item.date}</th>
          <th>{item.text}</th>
        </tr>
      )
    })
   }
   </tbody>
      </table>
 <div className='my5 d-flex justify-content-between'>
  <button className='btn btn-outline-danger w-50' onClick={()=>setPageIndex(pageIndex-1)}>prev</button>
  <button className='btn btn-outline-secondary w-50 mx-2' onClick={()=>setPageIndex(pageIndex+1)}>next</button>
 </div>


    </div>
  )
}

export default BestPostPage