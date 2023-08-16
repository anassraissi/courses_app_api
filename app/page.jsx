import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Header from './Components/Header'
import Courses from './Components/courses'
export default function Home() {
  return (
    <div>
         <h1>Wellcome to Anass's media</h1>
         <Courses></Courses>
    </div>

  )
}
