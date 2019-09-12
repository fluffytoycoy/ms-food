import axios from 'axios'

export const GET_MENU_START = "GET_MENU_START"
export const GET_MENU_SUCCESS = "GET_MENU_SUCCESS"
export const GET_MENU_FAILURE = "GET_MENU_FAILURE"

export const getMenu = () => dispatch => {
    dispatch({ type: GET_MENU_START })
    axios
        .get('/api/getMenu')
        .then(res => {
            dispatch({ type: GET_MENU_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_MENU_FAILURE, payload: err})
        })
}
