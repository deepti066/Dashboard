import React from 'react'

function NavItem({nav}) {
  return (
       <li className="nav-item">
                <a className ="nav-item collapsed" href='#'>
                    <i className={nav.icon}></i>
                    <span>{nav.name}</span>
                </a>
            </li>
  )
}

export default NavItem