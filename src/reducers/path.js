const pathReducer = (state = "main", action) => {
    switch(action.type){
        case 'ChangePath':
            return action.path
        default: return state;
    }
}

export default pathReducer;