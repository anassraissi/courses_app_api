import React from 'react'

const page = ({params:{name}}) => {

//  params:{name}  This code appears to be using destructuring assignment
// to extract the name parameter from an object inside the params object.
  return (
    <div className='card'>
       <h2>{name}</h2> 
    </div>
  )
}

export default page
