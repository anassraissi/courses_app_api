import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import Link from 'next/link'
async function GetRepos(){

    const response=await fetch('https://api.github.com/users/AnassRaissi/repos',{
      next:{
          validate:60,
      }
    });
    const repos=await response.json();
    await new Promise((resolve)=> setTimeout(resolve,1000))
    //await 1 seconde for spinner to show
    return repos;

  }

const page = async () => {
    const repos=await GetRepos();
  return (
    <div className='repos-container'> 
    <h2>Repositories</h2>
    <ul className='repo-list'>
      {repos.map((repo) => (
        <li key={repo.id}>
          <Link href={`/Code/Repos/${repo.name}`}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className='repo-details'>
              <span>
                <FaStar /> {repo.stargazers_count}
              </span>
              <span>
                <FaCodeBranch /> {repo.forks_count}
              </span>
              <span>
                <FaEye /> {repo.watchers_count}
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default page

