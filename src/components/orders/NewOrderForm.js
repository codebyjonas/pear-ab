import React from 'react'
import firebase from '../../firebase'
import { calculateAndUpdateQuantity } from '../../functions/calculateQuantity'

class NewOrderForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: '',
            product: '',
            stock: '',
            quantity: 0
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.addOrderToFirebase = this.addOrderToFirebase.bind(this)
    }

    handleChange(e) {
        const target = e.target
        let value = target.value
        const name = target.name

        if (name == 'date') {
            value = new Date(value)
        }

        this.setState({ [name]: value })
    }

    addOrderToFirebase() {
        const db = firebase.firestore()
        db.collection('orders').add(this.state)
    }

    onSubmit(e) {
        e.preventDefault()
        this.addOrderToFirebase()
        const msg = document.getElementById('submit-order-form')
        msg.classList.add('active')
        calculateAndUpdateQuantity(this.state.product, this.state.stock)
        setTimeout(() => {
            msg.classList.remove('active')
        }, 1000)
    }

    render() {
        return (
            <form className='new-order-form' onSubmit={this.onSubmit}>
                <div className='row'>
                    <div>
                        <label>Datum</label>
                        <input
                            name='date'
                            type='date'
                            onChange={this.handleChange}
                        >
                        </input>
                    </div>
                    <div>
                        <label>Produkt</label>
                        <select
                            name='product'
                            onChange={this.handleChange}
                        >
                            <option value='null'>-----</option>
                            <option value='jTelefon'>jTelefon</option>
                            <option value='jPlatta'>jPlatta</option>
                            <option value='Päronklocka'>Päronklocka</option>
                        </select>
                    </div>
                    <div>
                        <label>Till / Från</label>
                        <select
                            name='stock'
                            onChange={this.handleChange}
                        >
                            <option value='null'>-----</option>
                            <option value='Cupertino'>Cupertino</option>
                            <option value='Norrköping'>Norrköping</option>
                            <option value='Frankfurt'>Frankfurt</option>
                        </select>
                    </div>
                    <div>
                        <label>Antal</label>
                        <input
                            type='text'
                            name='quantity'
                            onChange={this.handleChange}
                        >
                        </input>
                        <span>Tillgängliga: xxx</span>
                    </div>
                </div>
                <div className='row'>
                    <span id='submit-order-form' className='submit-ok'>
                        Din order är nu tillagd...
                    </span>
                    <input type='submit' className='primary-button' value="Lägg till order"></input>
                </div>
            </form>
        )
    }
}

export default NewOrderForm