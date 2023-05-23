/** @jsxImportsource @emotion/react*/
import { css } from "@emotion/react"
import mainLogo from '../assets/mainLogo.png';
import { NavLink } from 'react-router-dom';
import { useState } from "react";

export default function Navbar(){

    const [toggle, setToggle] = useState(false);

    const styles = {
        display: toggle ? "block" : "none"
    }

    /*
    
            display: "flex",
        justifyContent: "space-between",
        position: "relative",
        top: "0",
        padding: "10px 0",

    */

    return(
        <nav>
            <img src={mainLogo} alt="logo" className='nav-logo' />
            <button 
                className="nav-btn" 
                onClick={() => setToggle(function(prev){
                    return prev = !prev
                })}
            >
                {
                    toggle ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                }
            </button>
            <ul className='nav-ul' style={styles}>
            <li className='nav-li' >
                    <NavLink 
                        className="navlink"
                        to={"/inicio"}
                    >
                        Inicio
                    </NavLink>
                </li>
                <li className='nav-li' >
                    <NavLink 
                        className="navlink"
                        to={"/penal"}
                    >
                        Derecho Penal
                    </NavLink>
                </li>
                {
                    /**

                <li className='nav-li' >
                    <NavLink 
                        className="navlink"
                        to={"./familia"}
                    >
                        Derecho de Familia
                    </NavLink>
                </li>

                     */
                }
            </ul>
        </nav>
    )
}