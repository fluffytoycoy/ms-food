import axios from 'axios'
import authHeaders from './Util/AuthHeaders';

export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";

export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAIL = "LOG_OUT_FAIL";

export const login = (user) => dispatch => {
    axios
      .post('/auth/login', user)
      .then(res => {
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
    .post('./auth/logout', {logout: 'user'}, authHeaders())
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
