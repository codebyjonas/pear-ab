import React from 'react'
import NewOrderForm from './NewOrderForm';

class NewOrder extends React.Component {

    state = {
        open: true
    }

    render() {
        if (this.state.open) {
            return <NewOrderForm />
        } else {
            return (
                <div>
                    <button
                        onClick={() => this.setState({ open: true })}
                        className='primary-button'
                    >
                        Registrera ny order
                    </button>
                </div>
            )
        }
    }
}

export default NewOrder