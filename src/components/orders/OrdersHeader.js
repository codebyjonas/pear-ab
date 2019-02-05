import React from 'react'


class OrdersHeader extends React.Component {


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

    render() {
        return (
            <div className='orders-header-container table-header-container'>
                <div><span>Datum</span></div>
                <div><span>Produkt</span></div>
                <div><span>Till / från</span></div>
                <div><span>Antal</span></div>
            </div>
        )
    }
}

export default OrdersHeader