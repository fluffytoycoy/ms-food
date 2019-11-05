import axios from 'axios'

export const LOG_IN = "LOG_IN";

export const login = () => dispatch => {
  //  dispatch({ type: GET_MENU_START })
    axios
      .get('/auth/login')
      .then(res => {
        dispatch({
          type: LOG_IN,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
}
