export const initialObjectProducts = {
    products:[]
}

export function reducerProducts(state, action) {
    if(action.type === 'GET PRODUCTS'){
        return {...state, products: action.payload}
    }else if(action.type === 'ADD TO BAG'){
        let storageBag = JSON.parse(localStorage.getItem('bag'))
        let product = {...action.payload}
        product.count = 1
        product.total_price =  product.count * product.product_price
        if(!storageBag.some((item) => item.id === product.id)){
            storageBag.push(product)
            localStorage.setItem('bag', JSON.stringify(storageBag))
        }
        
    }else if(action.type === 'SORTING'){
        let sortedProducts = [...state.products]
  
        if(action.payload === 'INCREASE PRICE'){
            sortedProducts.sort((a,b) => a.product_price - b.product_price)
        }else{
            sortedProducts.sort((a,b) => b.product_price - a.product_price)
        }
        return {...state, products: sortedProducts}
    }

    return state
}