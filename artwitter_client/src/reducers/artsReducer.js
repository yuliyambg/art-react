export const artsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ARTS':
            return action.payload
        case 'ADD_ART':
            return [...state, action.payload]
        default:
            return state
    }
}