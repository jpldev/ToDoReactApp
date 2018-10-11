import React from 'react'
import { NavLink } from 'react-router-dom';


function Nav(){
    return (
        <ul className='navbar'>
            <li>
                <NavLink exact activeClassName='active' to='/'>Inicio</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/following'>Siguiendo</NavLink>
            </li>
            <li>
                <NavLink activeClassName='active' to='/profile'>Perfil</NavLink>
            </li>
        </ul>
    )
}

export default Nav;