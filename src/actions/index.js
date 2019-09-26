

export const addFav = (city) => {
    return {
        type: 'Add',
        city
    }
}

export const removeFav = (city) => {
    return {
        type: 'Remove',
        city
    }
}

export const changePath = (path) => {
    return {
        type: 'ChangePath',
        path
    }
}

export const oneDayForecast = (response) => {
    return {
        type: 'oneDay',
        oneDayForecast: response
    }
}

export const fiveDayForecast = (response) => {
    return {
        type: 'fiveDay',
        fiveDayForecast: response
    }
}


export const selectedResult = (selectedResult) => {
    return {
        type: 'selected',
        selectedResult
    }
}

export const async = (wait) => {
    return {
        type: 'async',
        wait
    }
}

export const favWeather = (weather) => {
    return {
        type: 'addFavWeather',
        weather
    }
}