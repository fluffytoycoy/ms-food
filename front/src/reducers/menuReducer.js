import {
    GET_MENU_START,
    GET_MENU_SUCCESS,
    GET_MENU_FAILURE,
    SET_LOADING_SCREEN,
    SET_DASHBOARD_MENU,
    SET_SELECTED_MENUITEM,
} from '../actions/actions'

const initialState = {
    error: '',
    fetchingMenu: false,
    updatingMenu: false,
    menu: undefined,
    menuExists: false,
    loadingFinished: false,
    dashboardMenu: undefined,
    filteredDashboardMenu: undefined,
    selectedMenuItem: undefined,
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
                menu: action.payload.menu,
                menuExists: true,
                filteredDashboardMenu: action.payload.menu,
                dashboardMenu: action.payload.menu,
                categories: action.payload.categories,
                types: action.payload.types,
                error: "",
            }
        case GET_MENU_FAILURE:
            return {
                ...state,
                fetchingMenu: false,
                menuExists: false,
                error: "FAILED to get Menu from server",
            }
        case SET_DASHBOARD_MENU:
        return{
          ...state,
          filteredDashboardMenu: action.payload
        }
        case SET_SELECTED_MENUITEM:
        return{
          ...state,
          selectedMenuItem: action.payload
        }
        case SET_LOADING_SCREEN:
        return{
          ...state,
          loadingFinished: action.payload
        }
        default:
            return state
    }
}

export default menuReducer;
