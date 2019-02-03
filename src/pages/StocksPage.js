import React from 'react'
import Header from '../components/page-elements/Header'
import firebase from '../firebase'
import Stocks from '../components/stocks/Stocks'

class StocksPage extends React.Component {

    state = {
        stocks: []
    }

    getStocksFromFirebase() {
        const stocks = []
        const db = firebase.firestore()
        db.collection('stocks').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let product = doc.data()
                stocks.push(product)
            })
            this.setState({ stocks: stocks })
        })
    }

    componentDidMount() {
        this.getStocksFromFirebase()
    }

    render() {
        return (
            <div>
                <Header title={this.props.title} />
                <div className='page-container'>
                    <Stocks stocks={this.state.stocks} />
                </div>
            </div>
        )
    }
}

export default StocksPage