import React from 'react'


class OrdersHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeFilter: 'date'
        }
    }


    handleScroll() {
        const nav = document.getElementsByClassName('orders-header-container')[0]
        const navTop = 147
        console.log(navTop)
        if (window.scrollY > navTop) {
            nav.classList.add('sticky')
            document.body.style.paddingTop = nav.offsetHeight+'px'
        } else {
            nav.classList.remove('sticky')
            document.body.style.paddingTop = 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    onClick = (e) => {
        this.setState({activeFilter: e.target.getAttribute('data-value')})
        this.props.setOrderBy(e.target.getAttribute('data-value'))
    }

    render() {
        return (
            <div data-active={this.state.activeFilter} className='orders-header-container table-header-container'>
                <div><span data-value='date' onClick={this.onClick}>Datum</span></div>
                <div><span data-value='product' onClick={this.onClick}>Produkt</span></div>
                <div><span data-value='stock' onClick={this.onClick}>Till / från</span></div>
                <div><span data-value='quantity' onClick={this.onClick}>Antal</span></div>
            </div>
        )
    }
}

export default OrdersHeader