import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Stock from './pages/Stock'
import Orders from './pages/Orders'
import Products from './pages/Products'

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact render={(props) => <Stock {...props} title={' Stock'} />} />
                    <Route path='/orders' exact render={(props) => <Orders {...props} title={' Orders'} />} />
                    <Route path='/products' exact render={(props) => <Products {...props} title={' Products'} />} />
                </Switch>
            </Router>
        )
    }
}

export default App;
