export const initialObjectAdminEdit = {
    products:[]
}

export function reducerAdminEdit(state, action) {
    if(action.type === 'GET PRODUCTS'){
        return {...state, products: action.payload}
    }else if(action.type === 'ADD PRODUCT'){
        let newArr = [...state.products]
        newArr.push(action.payload)
        console.log(action.payload)
        return {...state, products: newArr}
    }
    
    return state
}