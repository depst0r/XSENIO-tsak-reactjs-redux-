const initialState = {
    company: []
}

export const getChares = (state = initialState, action) => {
    switch (action.type) {
        case 'company':
            console.log('company', action.data)
            return {
                ...state,
                company: action.data
            }
        default:
            return state
    }


}