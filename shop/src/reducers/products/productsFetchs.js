export async function getProducts(dispatch) {
    let res = await fetch('http://localhost:5000/goods')
    let data = await res.json()
    dispatch({type:'GET PRODUCTS', payload: data})
}