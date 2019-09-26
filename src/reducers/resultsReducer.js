  const defaultCity = JSON.parse(`
    {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    }`);


const resultsReducer = (state = {
    selectedResult: defaultCity
}, action) => {
    switch(action.type){
        case 'selected':
            return {
                selectedResult: action.selectedResult
            }
        default: return state;
    }
}

export default resultsReducer;