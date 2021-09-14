import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/logo.png'

export const Navbar = () => {
    return (
        <>
            <header>
                <nav className="nav">
                    <ul className="nav__ul">
                        <li className="nav__li"><img className="nav__logo" src={logo} alt="" /></li>
                        <li className="nav__li"><i className="fas fa-home"></i><Link to="/">Inicio</Link></li>
                        <li className="nav__li"><i className="fas fa-code"></i><Link to="/projects">Proyectos</Link></li>
                    </ul>
                    <ul className="nav__responsive-ul">
                        <div className="nav__responsive-button-container">
                            <div className="nav__responsive-button fas fa-bars">

                            </div>

                        </div>
                        <div className="nav__li-container">
                            <li className="nav__responsive-li"><i className="fas fa-home"></i><Link to="/">Inicio</Link></li>
                            <li className="nav__responsive-li"><i className="fas fa-code"></i><Link to="/projects">Proyectos</Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    )
}
