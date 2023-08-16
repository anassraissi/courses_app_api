import Repo from '@/app/Components/Repo'
import RepoDir from '@/app/Components/RepoDir'
import Link from 'next/link'
import React, { Suspense } from 'react'

const page = ({params:{name}}) => {

//  params:{name}  This code appears to be using destructuring assignment
// to extract the name parameter from an object inside the params object.
  return (
    <div className='card'>
      <Link href='../Repos' className='btn btn-back'>Go back To Repositories</Link>
      <Suspense fallback={<div>Loading Repo ...</div>}>
      <Repo name={name}/>
      </Suspense>
      <Suspense fallback={<div>Loading Directories ...</div>}>
      <RepoDir name={name}/>
      </Suspense>
    </div>
  )
}

export default page
