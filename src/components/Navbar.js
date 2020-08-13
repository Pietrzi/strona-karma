import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
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
                    <NavLink to='/aktualności'>Aktualności</NavLink>
                </li>
                <li>
                    <NavLink to='/bio'>Bio</NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
            <Hamburger click={props.menuHandler}/>
        </div>
    )
}

export default Navbar;
