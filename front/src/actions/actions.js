import axios from 'axios'
import {parseMenu} from './Util/MenuParser';
import {parseMenuItem} from './Util/MenuItemParser';
//Actions for getting menu from database

export const GET_MENU_START = "GET_MENU_START"
export const GET_MENU_SUCCESS = "GET_MENU_SUCCESS"
export const GET_MENU_FAILURE = "GET_MENU_FAILURE"

//Actions Setting and un-setting loading screen
export const SET_LOADING_SCREEN = "SET_LOADING_SCREEN"

//Actions for added a new Menu Item to the database
export const ADD_MENU_ITEM_START = "ADD_MENU_ITEM_START"
export const ADD_MENU_ITEM_SUCCESS = "ADD_MENU_ITEM_SUCCESS"
export const ADD_MENU_ITEM_FAILURE = "ADD_MENU_ITEM_FAILURE"

//Actions for added a new Menu Item to the database
export const UPDATE_MENU_ITEM_START = "UPDATE_MENU_ITEM_START"
export const UPDATE_MENU_ITEM_SUCCESS = "UPDATE_MENU_ITEM_SUCCESS"
export const UPDATE_MENU_ITEM_FAILURE = "UPDATE_MENU_ITEM_FAILURE"

//Actions for deleting a Menu Item
export const DELETE_MENU_ITEM_START = "DELETE_MENU_ITEM_START"
export const DELETE_MENU_ITEM_SUCCESS = "DELETE_MENU_ITEM_SUCCESS"
export const DELETE_MENU_ITEM_FAILURE = "DELETE_MENU_ITEM_FAILURE"

//Util Actions
export const SET_DASHBOARD_MENU = "SET_DASHBOARD_MENU"

export const SET_SELECTED_MENUITEM = "SET_SELECTED_MENUITEM"

export const SET_PREV_PAGE = "SET_PREV_PAGE"

const authHeaders = {
    headers: {
        "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
        "refreshToken" : localStorage.getItem('refreshToken')
    }
}

export const getMenu = () => dispatch => {
    dispatch({ type: GET_MENU_START })
    axios
      .get('/api/getMenu')
      .then(res => {
        dispatch({
          type: GET_MENU_SUCCESS,
          payload: parseMenu(res.data)
        })
      })
      .catch(err => {
        dispatch({
          type: GET_MENU_FAILURE,
          payload: err
        })
      })
  }

export const addMenuItem = (menuItem) => dispatch => {
  dispatch({type: ADD_MENU_ITEM_START})
  axios
    .post('/api/createMenuItem', parseMenuItem(menuItem), authHeaders)
      .then(res =>{
          const newMenuItem = {...res.data,  type: menuItem.type, category: menuItem.category};
          dispatch({
            type: ADD_MENU_ITEM_SUCCESS,
            menuItem: newMenuItem,
            headers: res.headers
          })
      })
      .catch(err => {
        console.log(err)
        dispatch({type: ADD_MENU_ITEM_FAILURE, payload: err})
      })
}

export const updateMenuItem = (menuItem) => dispatch => {
  dispatch({type: UPDATE_MENU_ITEM_START})
  console.log(authHeaders)
  axios
    .post('/api/updateMenuItem', parseMenuItem(menuItem), authHeaders)
      .then(res =>{
                console.log(res)
        dispatch({
          type: UPDATE_MENU_ITEM_SUCCESS,
          menuItem: menuItem,
          headers: res.headers
        })

      })
      .catch(err => {
        console.log(err)
        dispatch({
          type: UPDATE_MENU_ITEM_FAILURE,
          payload: err
        })
      })
}

export const deleteMenuItem = (item) => dispatch => {
  dispatch({type: DELETE_MENU_ITEM_START})
  axios
    .post('/api/deleteMenuItem', {id: item.id}, authHeaders)
    .then(res =>{
        dispatch({
          type: DELETE_MENU_ITEM_SUCCESS,
          menuItem: item,
          headers: res.headers
        })
    })
    .catch(err => {
        dispatch({
          type: DELETE_MENU_ITEM_FAILURE,
          payload: err
        })
    })
}

export const setLoading = (bool) => dispatch =>{
    dispatch({type: SET_LOADING_SCREEN, payload: bool});
  }

export const setPreviousPage = (string) => dispatch => {
    dispatch({type: SET_PREV_PAGE, payload: string});
}

export const setDashboardMenu = (menu) => dispatch => {
  dispatch({type: SET_DASHBOARD_MENU, payload:menu})
}

export const setSelectedMenuItem = (menuItem) => dispatch => {
  dispatch({type: SET_SELECTED_MENUITEM, payload: menuItem})
}
