import { addOrder } from "../admin/adminFetchs"

export const initialObjectBag = {
    bag:[]
}

export function reducerBag(state, action) {
    let storageBag = JSON.parse(localStorage.getItem('bag'))

    if(action.type === 'GET BAG'){
        return {...state, bag: storageBag}
    } else if(action.type === 'DELETE'){
        let index = storageBag.findIndex((item) => item.id === action.payload)
        storageBag.splice(index, 1)
        localStorage.setItem('bag', JSON.stringify(storageBag))

        return {...state, bag: storageBag}
    }
    else if(action.type === 'MINUS'){
        let index = storageBag.findIndex((item) => item.id === action.payload)
        storageBag[index].count -= 1
        if( storageBag[index].count < 1){
            storageBag.splice(index, 1)
        }else{
            storageBag[index].total_price = storageBag[index].count * storageBag[index].product_price
        }
        
        localStorage.setItem('bag', JSON.stringify(storageBag))

        return {...state, bag: storageBag}
    }else if(action.type === 'PLUS'){
        let index = storageBag.findIndex((item) => item.id === action.payload)

        storageBag[index].count += 1      
        storageBag[index].total_price = storageBag[index].count * storageBag[index].product_price
        
        localStorage.setItem('bag', JSON.stringify(storageBag))
        return {...state, bag: storageBag}
    }else if(action.type === 'ORDER'){
        let order = {...action.payload}
        order.customer_bag = storageBag
        order.products_sum = storageBag.reduce((total, price) => total + price.total_price, 0)
        console.log(order)
        addOrder(order)
        localStorage.setItem('bag', JSON.stringify([]))

        return {...state, bag: []}
    }

    return state
}