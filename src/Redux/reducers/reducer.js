const initialState = {
    company: [],
    quote: []
}

export const getChares = (state = initialState, action) => {
    switch (action.type) {
        case 'company':
            console.log('company', action.data)
            return {
                ...state,
                company: action.data
            }
        case 'quote':
            console.log('quote', action.data)
            return {
                ...state,
                quote: action.data
            }
        default:
            return state
    }


}