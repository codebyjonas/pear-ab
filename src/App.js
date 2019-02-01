import React, { Component } from 'react';
import Header from './components/page-elements/Header'

class App extends Component {

    state = {
        title: 'Pear AB | Orders'
    }

    render() {
        return (
            <Header title={this.state.title} />
        )
    }
}

export default App;
