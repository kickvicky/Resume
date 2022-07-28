// eslint-disable-next-line

import React from 'react'
import { Link } from 'react-scroll'
import './navbar.css'

function Navbar() {

    return (
        <div className='navbarContent'>
            <ul>
                <li><a href='#'><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></a></li>
                <li><a href='#'><Link activeClass="active" to="timeline" spy={true} smooth={false}>Timeline</Link></a></li>
                <li><a href='#'><Link activeClass="active" to="projects" spy={true} smooth={false}>Projects</Link></a></li>
                <li><a href='#'><Link activeClass="active" to="skills" spy={true} smooth={false}>Skills</Link></a></li>
                <li><a href='#'><Link activeClass="active" to="socials" spy={false} smooth={false}>Socials</Link></a></li>
            </ul>
        </div>
    )
}

export default Navbar
