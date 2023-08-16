import Link from 'next/link';
import React from 'react'
import cours from '../data.json'

const courses = () => {
    console.log(cours)

  return (
    <div className='courses' >
        {cours[0].id}
    </div>
  )
}

export default courses


        