import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/teatr'>Teatr</NavLink>
                </li>
                <li>
                    <NavLink to='/film'>Film</NavLink>
                </li>
                <li>
                    <NavLink to='/galeria'>Galeria</NavLink>
                </li>
                <li>
                    <NavLink to='/aktualnośći'>Aktualnośći</NavLink>
                </li>
                <li>
                    <NavLink to='/bio'>Bio</NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>

        </div>
    )
}

export default Navbar;
