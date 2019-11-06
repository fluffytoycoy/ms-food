import axios from 'axios'

export const LOG_IN = "LOG_IN";

export const login = (user) => dispatch => {
  console.log(user)
    axios
      .post('/auth/login', user)
      .then(res => {
        console.log('hjere')
        console.log(res)
        dispatch({
          type: LOG_IN,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
}
