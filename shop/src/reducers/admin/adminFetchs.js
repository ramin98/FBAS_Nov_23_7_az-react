export async function addOrder(order) {
    let res = await fetch('http://localhost:5000/add-orders', {
        method:'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    let data = await res.json()
    console.log(data)
}

export async function getOrders(dispatch) {
    let res = await fetch('http://localhost:5000/orders')
    let data = await res.json()
    dispatch({type:'GET ORDERS', payload: data})
}