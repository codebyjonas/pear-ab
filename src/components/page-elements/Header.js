import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = props => (
    <header>
        <h1>
            Pear AB |
            {props.title}
        </h1>
        <nav>
            <NavLink activeClassName='active' to='/' exact={true}>Lagersaldo</NavLink>
            <NavLink activeClassName='active' to='/orders'>Ordrar</NavLink>
            <NavLink activeClassName='active' to='/products'>Produkter</NavLink>
        </nav>
    </header>
)

export default Header