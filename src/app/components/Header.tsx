import Link from 'next/link'
import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='header'>
        <h1 className='logo'>Pet Doctor</h1>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/About'>About</Link>
            <Link href='/Team'>Team</Link>
            <Link href='/Contact'>Contact</Link>
            <FaUserDoctor style={{ color: 'yellow', fontSize: '20px'}}/>

        </nav>
    </header>
  )
}

export default Header
