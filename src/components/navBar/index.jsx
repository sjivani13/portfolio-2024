import React from "react";
import {Link} from 'react-router-dom';


const data = [
    {
        label: "Home",
        to: '/'
    },
    {
        label: "About Me",
        to: '/about'
    },
    {
        label: "Skills",
        to: '/skills'
    },
    {
        label: "Portfolio",
        to: '/portfolio'
    },
    {
        label: "Contact",
        to: '/contact'
    },
]
const Navbar = ()=>{
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                <ul className="navbar__container__menu">
                    {
                        data.map((item, key)=>(
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu___links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div>
                    
                </div>
                </div>
            </nav>

     </div>
    )
}

export default Navbar;