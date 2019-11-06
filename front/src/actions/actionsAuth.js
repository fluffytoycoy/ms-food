import axios from 'axios'

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAIL = "LOG_OUT_FAIL";

export const login = (user) => dispatch => {
  console.log(user)
    axios
      .post('/auth/login', user)
      .then(res => {
        console.log(res)
        dispatch({
          type: LOG_IN_SUCCESS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: LOG_IN_FAIL
        })
      })
}

export const logout = (user) => dispatch => {
  axios
    .post('./auth/logout', user)
    .then(res => {
      dispatch({
        type: LOG_OUT_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: LOG_OUT_FAIL,
      })
    })
}
