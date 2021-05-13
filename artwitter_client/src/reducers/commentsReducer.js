export const commentsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, action.payload]
        case 'FETCH_COMMENTS':
            return action.payload
        default:
            return state
    }
}