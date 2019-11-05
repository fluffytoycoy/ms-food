import {
    LOG_IN,
} from '../actions/actionsAuth'

const initialState = {
    isLoggedIn: !!localStorage.getItem('accessToken')
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        // Get Menu
        case LOG_IN:
            console.log(action.payload)
            return {
                ...state,
                isLoggedIn: true
            }
        default:
          return state
      }
}

export default authReducer
