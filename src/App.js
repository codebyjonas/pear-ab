import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Stock from './pages/Stock'
import StocksPage from './pages/StocksPage'
import Orders from './pages/Orders'
import ProductsPage from './pages/ProductsPage'

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => <Stock {...props} title={' Stock'} />} />
                    <Route exact path='/orders' render={(props) => <Orders {...props} title={' Orders'} />} />
                    <Route exact path='/products' render={(props) => <ProductsPage {...props} title={' Products'} />} />
                    <Route exact path='/stocks' render={(props) => <StocksPage {...props} title={' Färdigvarulager'} />} />
                </Switch>
            </Router>
        )
    }
}

export default App;
