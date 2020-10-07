const initialState = {
    companyName: [],
}

export const getChares = (state = initialState, action) => {
    switch (action.type) {
        case 'company':
            console.log('company', action.data)
            return {
                ...state,
                companyName: action.data
            }
        default:
            return state
    }


}