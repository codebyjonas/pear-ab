import React from 'react'
import Header from '../components/page-elements/Header'
import firebase from '../firebase'
import StocksCounts from '../components/stockCount/StockCounts'

class StocksCountPage extends React.Component {

    state = {
        stocksCount: []
    }

    getStocksFromFirebase() {
        let stocksCount = []
        const db = firebase.firestore()
        db.collection('stocksCount').onSnapshot((snapshot) => {
            stocksCount = []
            snapshot.docs.forEach(doc => {
                let product = doc.data()
                stocksCount.push(product)
            })
            this.setState({ stocksCount: [] })
            this.setState({ stocksCount: stocksCount })
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
                    <StocksCounts stocks={this.state.stocksCount} />
                </div>
            </div>
        )
    }
}

export default StocksCountPage