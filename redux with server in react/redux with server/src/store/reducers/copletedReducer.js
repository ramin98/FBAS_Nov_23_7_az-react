export let initialObjectCompletedList = {
    completedArray: []
}


export function completedReducer(state = initialObjectCompletedList, action) {
     if(action.type === 'COMPLETED TODO'){
        let completedArray = [...state.completedArray];
        if(completedArray.length >= 10){
          completedArray.shift()
        }
        completedArray.push(action.payload)
        return {...state, completedArray: completedArray}
      }else if(action.type === 'GET COMPLETED LIST'){
        return {...state, completedArray: action.payload}
      }
    
    return state
}