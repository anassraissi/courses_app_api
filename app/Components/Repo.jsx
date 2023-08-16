import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
async function FetchRepo(name){
    const response=await fetch(`https://api.github.com/repos/AnassRaissi/${name}`,{
      next:{
        validate:60,
      }
    });
    const json=await response.json();
    // await new Promise((resolve)=>setTimeout(resolve,1000))
    return json;
}

const Repo =async ({name}) => {
    const repo=await FetchRepo(name);
  return (
        <>
        <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
        </>
  )
}

export default Repo
