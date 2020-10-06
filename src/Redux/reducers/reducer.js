const initialState = {
    companyName: '',
    latestPrice: '',
    latestTime: '',

}

export const getChares = (state = initialState, action) => {
    switch (action.type) {
        case 'test':
            console.log('test', action)
            return {
                ...state,
                companyName: action.data.companyName,
                latestPrice: action.data.latestPrice,
                latestTime: action.data.latestTime,
            }
        default:
            return state
    }


}