import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Header from './Components/Header'


export default function Home() {
  return (
    <div>
          <h1>Home Page</h1>
    <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="./About">About</Link>
    </li>
    <li>
      <Link href="./About/Team">Team</Link>
    </li>
    </ul>
    </div>

  )
}
