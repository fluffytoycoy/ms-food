import {
    GET_MENU_START,
    GET_MENU_SUCCESS,
    GET_MENU_FAILURE,
} from '../actions/actions'

const initialState = {
    error: '',
    fetchingMenu: false,
    menu: undefined,
    menuExists: false,
}

const menuReducer = (state = initialState, action) => {
    switch(action.type) {
        // Get Menu
        case GET_MENU_START:
            return {
                ...state,
                fetchingMenu: true,
                error: "",
            }
        case GET_MENU_SUCCESS:
            return {
                ...state,
                fetchingMenu: false,
                menu: action.payload.data,
                menuExists: true,
                error: "",
            }
        case GET_MENU_FAILURE:
            return {
                ...state,
                fetchingMenu: false,
                menuExists: false,
                error: "FAILED to get Menu from server",
            }
        default:
            return state
    }
}

export default menuReducer;
