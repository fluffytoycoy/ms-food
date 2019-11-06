import {
    LOG_IN_SUCCESS,
    LOG_IN_FAIL,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAIL
} from '../actions/actionsAuth'

const initialState = {
    token: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    isLoggedIn: !!localStorage.getItem('accessToken'),
    loginFailed: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        // Get Menu
        case LOG_IN_SUCCESS:
            localStorage.setItem('accessToken', `bearer ${action.payload.token}`)
            localStorage.setItem('refreshToken', action.payload.refreshToken)
            return {
                ...state,
                isLoggedIn: true,
                loginFailed: false,
                token: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken'),
            }
        case LOG_IN_FAIL:
            return {
                ...state,
                loginFailed: true,
                isLoggedIn: false
            }
        case LOG_OUT_SUCCESS:
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          return{
            ...state,
            isLoggedIn: false,
          }
        default:
          return state
      }
}

export default authReducer
