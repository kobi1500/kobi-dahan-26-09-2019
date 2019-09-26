const asyncReducer = (state = false, action) => {
    switch(action.type){
        case 'async':
            return action.wait
        default: return state;
    }
}

export default asyncReducer;