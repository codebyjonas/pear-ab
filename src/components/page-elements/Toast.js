import React from 'react'

class Toast extends React.Component {

    state = {
        open: true
    }

    render() {
        if (this.props.open) {
            return (
                <div className='toast'>
                    <span>{this.props.message}</span>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Toast