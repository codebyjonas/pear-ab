import React from 'react'
import NewOrderForm from './NewOrderForm';

class NewOrder extends React.Component {

    state = {
        open: true
    }

    render() {
        if (this.state.open) {
            return (
                <div className='new-order-container'>
                    <NewOrderForm />
                </div>
            )
        } else {
            return (
                <div className='new-order-container'>
                    <button
                        onClick={() => this.setState({ open: true })}
                        className='new-order-btn primary-button'
                    >
                        Registrera ny order
                    </button>
                </div>
            )
        }
    }
}

export default NewOrder