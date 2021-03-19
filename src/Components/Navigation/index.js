import React from 'react'
import {Link} from 'react-router-dom'

export default function Navigation(props) {
    return (
    <header className="nav-wrapper">
        <Link to="/" className="logo-wrapper">LOGO</Link>
        <nav className="nav-menu">{props.children}</nav>
    </header>)
}