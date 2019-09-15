
const initialState = {
    counter: 0
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCR':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECR':
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state;
    }

}
export default counterReducer;