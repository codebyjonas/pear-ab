import firebase from '../firebase'

export function calculateAndUpdateQuantity(product, stock) {
    let sum = 0
    const db = firebase.firestore()
    db.collection('orders')
        .where('product', '==', product)
        .where('stock', '==', stock)
        .get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let product = doc.data()
                sum += parseInt(product.quantity)
            })
            updateQuantity(product, stock, sum)
        })
}

function updateQuantity(product, stock, sum) {
    const db = firebase.firestore()
    db.collection('stocksCount').doc(product + stock).set({
        product: product,
        stock: stock,
        count: sum
    })
}

export function updateAllQuantity() {
    const stocks = []
    const products = []
    const db = firebase.firestore()

    db.collection('stocks').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            let stock = doc.data()
            stocks.push(stock.city)
        })
    })

    db.collection('products').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            let product = doc.data()
            products.push(product.name)
        })
        updateAllQuantityFirebase(products, stocks)
    })
}

function updateAllQuantityFirebase(products, stocks) {
    if (stocks.length > 0 && products.length > 0) {
        for (let i = 0; i < products.length; i++) {
            for (let j = 0; j < stocks.length; j++) {
                calculateAndUpdateQuantity(products[i], stocks[j])
            }
        }
    } else {
        console.error('Did not update all quantity due to array length problem.')
    }
}