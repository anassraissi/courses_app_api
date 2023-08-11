import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import Link from 'next/link'
async function GetRepos(){

    const response=await fetch('https://api.github.com/users/AnassRaissi/repos');
    const repos=await response.json();
    return repos;

}
import React from 'react'

const page = async () => {
    const repos=await GetRepos();
  return (
    <div className='repos-container'>
        <h2>Repositories</h2>
        <ul className='repo-list'>
            {repos.map((repo)=>(
                <li key={repo.id}>
                    <Link href={`/Code/Repos/${repo.name}`}>
                        <h3>{repo.name}</h3>
                        <p>{repo.description}</p>
                    </Link>
                </li>

            ))}

        </ul>
    </div>
  )
}

export default page

