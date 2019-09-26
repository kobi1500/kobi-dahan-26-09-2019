import favReducer from './fav';
import pathReducer from './path'
import searchReducer from './search'
import {combineReducers} from 'redux';
import resultsReducer from './resultsReducer';

const allReducers = combineReducers({
    favorites: favReducer,
    path: pathReducer,
    search: searchReducer,
    result: resultsReducer,
});

export default allReducers;