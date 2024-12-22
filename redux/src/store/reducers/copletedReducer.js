export let initialObjectCompletedList = {
    completedArray: []
}


export function completedReducer(state = initialObjectCompletedList, action) {
     if(action.type === 'COMPLETE'){
        let completedArray = [...state.completedArray];
        completedArray.push(action.payload)
        return {...state, completedArray: completedArray}
      }
    return state
}