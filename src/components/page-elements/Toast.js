import React from 'react'

class Toast extends React.Component {


    render() {
        if (this.props.open) {
            return (
                <div className='toast' data-type={this.props.type}>
                    <span>{this.props.message}</span>
                </div>
            )
        } else {
            return null
        }
    }
}

export default Toast