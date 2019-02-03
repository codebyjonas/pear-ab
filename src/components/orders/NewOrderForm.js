import React from 'react'

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
    }

    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name



        this.setState({ [name] : value})
    }

    render() {
        return (
            <form>
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
                    <span>Tillgängliga: xxx</span>
                    <input
                        type='text'
                        name='quantity'
                        onChange={this.handleChange}
                    >
                    </input>
                </div>
            </form>
        )
    }
}

export default NewOrderForm