import React from 'react';
import { NavLink } from 'react-router-dom';

const SideMenu = (props) => {

    let sideMenuClasses = 'side__menu'
    if (props.show) {
        sideMenuClasses = 'side__menu open'
    }

    return (
        <div className={sideMenuClasses}>
            <ul>
                <li>
                    <NavLink className="menu__link__element" to='/'>home</NavLink>
                </li>
                <li>
                    <NavLink className="menu__link__element" to='/teatr'>teatr</NavLink>
                </li>
                <li>
                    <NavLink className="menu__link__element" to='/film'>film</NavLink>
                </li>
                <li>
                    <NavLink className="menu__link__element" to='/galeria'>galeria</NavLink>
                </li>
                <li>
                    <NavLink className="menu__link__element" to='/aktualności'>aktualności</NavLink>
                </li>
                <li>
                    <NavLink className="menu__link__element" to='/bio'>bio</NavLink>
                </li>
                <li>
                    <NavLink className="menu__link__element" to='/kontakt'>kontakt</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideMenu;