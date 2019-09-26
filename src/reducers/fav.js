const favReducer = (state = [] , action) => {
    switch(action.type){
        case 'Add':
            if(state.includes(action.city)) return state;
            return [
                ...state,
                 action.city
                ]
        case 'Remove':
            return [...state.filter( item=> item.selectedCity !== action.city.selectedCity )]
        default: return state
    }
}




export default favReducer;

