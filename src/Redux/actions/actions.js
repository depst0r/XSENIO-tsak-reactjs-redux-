export const fetchChares = (url) => {
    return (dispatch) => {
        fetch(url).then(
            (res) => res.json(),
        ).then(res => dispatch({ type: 'company', data: res }))
    }
}

export const getCompanyName = (url) => {
    return (dispatch) => {
        fetch(url).then(res => res.json()).then(res => {
            dispatch({ type: 'act', data: res })
        })
    }
}