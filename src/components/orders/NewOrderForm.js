import React from 'react'
import firebase from '../../firebase'
import { calculateAndUpdateQuantity } from '../../functions/calculateQuantity'
import Toast from '../../components/page-elements/Toast'

class NewOrderForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: '',
            product: '',
            stock: '',
            quantity: 0,
            quantityLeft: 0,
            submitok: false,
            quantityError: false,
            submitError: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.addOrderToFirebase = this.addOrderToFirebase.bind(this)
        this.calculateQuantityLeft = this.calculateQuantityLeft.bind(this)
    }

    handleChange(e) {
        const target = e.target
        let value = target.value
        const name = target.name

        if (name === 'date') {
            value = new Date(value)
        } else if (name === 'quantity') {
            console.log(this.state.quantityLeft + value)
            if (this.state.quantityLeft + parseInt(value) < 0) {
                this.setState({ quantityError: true })
            } else {
                this.setState({ quantityError: false })
            }
        }

        this.setState(
            { [name]: value },
            () => this.calculateQuantityLeft()
        )

    }

    addOrderToFirebase() {
        const db = firebase.firestore()
        db.collection('orders').add({
            'date': this.state.date,
            'product': this.state.product,
            'stock': this.state.stock,
            'quantity': this.state.quantity,
        })
    }

    onSubmit(e) {
        e.preventDefault()

        if (!this.state.quantityError) {
            this.addOrderToFirebase()
            calculateAndUpdateQuantity(this.state.product, this.state.stock)
            this.setState({ submitok: true })
            this.calculateQuantityLeft()
            setTimeout(
                () => this.setState({ submitok: false }),
                3000
            )
        } else {
            this.setState({ submitError: true })
            setTimeout(
                () => this.setState({ submitError: false }),
                3000
            )

        }
    }

    calculateQuantityLeft() {
        if (this.state.product !== '' && this.state.stock !== '') {
            let sum = 0
            const db = firebase.firestore()
            db.collection('orders')
                .where('product', '==', this.state.product)
                .where('stock', '==', this.state.stock)
                .get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        let product = doc.data()
                        sum += parseInt(product.quantity)
                    })
                    this.setState({ quantityLeft: sum })
                })
        }
    }

    render() {
        return (
            <div>
                <form className='new-order-form' onSubmit={this.onSubmit}>
                    <div className='grid'>
                        <div className='row'>
                            <div>
                                <label>Datum</label>
                                <input
                                    name='date'
                                    type='date'
                                    onChange={this.handleChange}
                                    required
                                />
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
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='row'>
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
                                    className={this.state.quantityError ? 'error' : ''}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='row submit-row'>
                        <span className='available-quantity'>Tillgängliga: {this.state.quantityLeft}</span>
                        <input type='submit' className='primary-button' value="Lägg till order"></input>
                    </div>
                </form>
                <Toast type={'confirmation'} open={this.state.submitok} message={'Din order är nu tillagd...'} />
                <Toast type={'error'} open={this.state.submitError} message={`Det finns för få ${this.state.product} på lagret i ${this.state.stock}`} />
            </div >
        )
    }
}

export default NewOrderForm