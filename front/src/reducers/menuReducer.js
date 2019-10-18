import {
    GET_MENU_START,
    GET_MENU_SUCCESS,
    GET_MENU_FAILURE,
    SET_LOADING_SCREEN,
    SET_DASHBOARD_MENU,
    SET_SELECTED_MENUITEM,
    ADD_MENU_ITEM_START,
    ADD_MENU_ITEM_SUCCESS,
    ADD_MENU_ITEM_FAILURE,
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
                menu: action.payload.rawMenu,
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
        case ADD_MENU_ITEM_START:
            return {
                ...state,
                fetchingMenu: true,
                error: "starting",
            }
        case ADD_MENU_ITEM_SUCCESS:
            return {
                ...state,
                fetchingMenu: false,
                error: "it worked",
            }
        case ADD_MENU_ITEM_FAILURE:
            return {
                ...state,
                fetchingMenu: false,
                menuExists: true,
                error: "FAILED to add Menu Item from server",
            }
        default:
            return state
    }
}

export default menuReducer;
