import axios from 'axios'

export const GET_MENU_START = "GET_MENU_START"
export const GET_MENU_SUCCESS = "GET_MENU_SUCCESS"
export const GET_MENU_FAILURE = "GET_MENU_FAILURE"
export const SET_LOADING_SCREEN = "SET_LOADING_SCREEN"

export const getMenu = () => dispatch => {
    dispatch({ type: GET_MENU_START })
    axios
        .get('/api/getMenu')
        .then(res => {
          console.log(res)
            dispatch({ type: GET_MENU_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_MENU_FAILURE, payload: err})
        })
}

export const setLoading = (bool) => dispatch =>{
  dispatch({type: SET_LOADING_SCREEN, payload: bool});
}
