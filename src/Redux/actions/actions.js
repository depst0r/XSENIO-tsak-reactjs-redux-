export const fetchCompany = url => {
    return dispatch => {
        fetch(url)
            .then(res => res.json())
            .then(res => dispatch({ type: 'company', data: res }))
    }
}
