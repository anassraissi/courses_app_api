import Link from 'next/link';
import React from 'react'
async function FetchRepoDir(name){
    await new Promise((resolve)=>setTimeout(resolve,3000))
    const response=await fetch(`https://api.github.com/repos/anassraissi/${name}/contents`,{
        next:{
            validate:60,
        }
    });
    const json=await response.json();

    return json;
}   

const RepoDir = async ({name}) => {
    const RepoContent=await FetchRepoDir(name);
    const dirs = RepoContent.filter((content) => content.type === 'dir');

  return (
    <>
          <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
    )
}

export default RepoDir