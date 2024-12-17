export const initialObjectAdmin = {
    orders:[]
}

export function reducerAdmin(state, action) {
    if(action.type === 'GET ORDERS'){
        return {...state, orders: action.payload}
    }

    return state
}