import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Orders from './pages/Orders'
import Deliveries from './pages/Deliveries'
import Products from './pages/Products'

class App extends Component {
    state = {
        title: 'Pear AB |'
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/' exact render={(props) => <Orders {...props} title={'Orders'} />} />
                    <Route path='/deliveries' exact render={(props) => <Deliveries {...props} title={'Deliveries'} />} />
                    <Route path='/products' exact render={(props) => <Products {...props} title={'Products'} />} />
                </Switch>
            </Router>
        )
    }
}

export default App;
