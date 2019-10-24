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
    SET_PREV_PAGE,
    UPDATE_MENU_ITEM_START,
    UPDATE_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_START,
    DELETE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
} from '../actions/actions'

import {MenuBuilder} from './Utils/MenuBuilder';

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

        case ADD_MENU_ITEM_START:
            return {
                ...state,
                error: "",
            }
        case ADD_MENU_ITEM_SUCCESS:
          return {
            ...state,
            menu: MenuBuilder.addToDisplayMenu(state.menu, action.menuItem),
            dashboardMenu: MenuBuilder.addMenuItem(state.dashboardMenu, action.menuItem),
            filteredDashboardMenu: MenuBuilder.addMenuItem(state.filteredDashboardMenu, action.menuItem),
            error: "",
          }
        case ADD_MENU_ITEM_FAILURE:
        console.log('fail')
            return {
                ...state,
                fetchingMenu: false,
                error: "FAILED to add Menu Item to server",
            }

        case UPDATE_MENU_ITEM_START:
          return{
            ...state
          }
        case UPDATE_MENU_ITEM_SUCCESS:
          return{
            ...state,
            menu: MenuBuilder.updateDisplayMenu(state.menu, action.menuItem),
            dashboardMenu: MenuBuilder.updateMenuItem(state.dashboardMenu, action.menuItem),
            filteredDashboardMenu: MenuBuilder.updateMenuItem(state.filteredDashboardMenu, action.menuItem),
          }
        case UPDATE_MENU_ITEM_FAILURE:
          return{
            ...state
          }

        case DELETE_MENU_ITEM_START:
            return{
              ...state
            }
        case DELETE_MENU_ITEM_SUCCESS:
          return {
            ...state,
            menu: MenuBuilder.removeFromDisplayMenu(state.menu, action.menuItem),
            filteredDashboardMenu: MenuBuilder.removeMenuItem(state.filteredDashboardMenu, action.menuItem),
            dashboardMenu: MenuBuilder.removeMenuItem(state.dashboardMenu, action.menuItem),
          }
        case DELETE_MENU_ITEM_FAILURE:
            return{
              ...state,
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

        case SET_PREV_PAGE:
              return {
                  ...state,
                  prevPage: action.payload,
            }

        default:
            return state
    }
}

export default menuReducer;
