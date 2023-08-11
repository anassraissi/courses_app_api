import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
        <header className='header'>
            <div className='container'>
                <div className='logo'>
                    <Link href='/'>Anass's media</Link>
                </div>
                <div className='links'>
                    <Link href='../About'>About</Link>
                    <Link href='../About/Team'>our Team</Link>
                    <Link href='../Code/Repos'>Code</Link>

                </div>
            </div>
        </header>
  )
}

export default Header
