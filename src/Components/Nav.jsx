import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
<>
<nav className='flex justify-center items-center w-full gap-[3vw]'>
<NavLink to='/'>Home</NavLink>
<NavLink to='/create'>Entry</NavLink>
<NavLink to='/show'>Library</NavLink>
</nav>

</>
  )
}

export default Nav