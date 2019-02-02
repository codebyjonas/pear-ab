import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => (
    <header>
        <h1>
            Pear AB |
            {props.title}
        </h1>
        <nav>
            <Link to='/'>Lagersaldo</Link>
            <Link to='/orders'>Ordrar</Link>
            <Link to='/products'>Produkter</Link>
        </nav>
    </header>
)

export default Header