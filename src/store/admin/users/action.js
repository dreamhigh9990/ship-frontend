import {
  GET_USERS,
  API_RESPONSE_SUCCESS,
  API_RESPONSE_ERROR,
  ADD_NEW_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "./actionType";

// common success
export const UserApiResponseSuccess = (actionType, data) => ({
  type: API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const UserApiResponseError = (actionType, error) => ({
  type: API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const updateOneUser = user => ({
  type: UPDATE_USER,
  payload: user,
});

export const updateUserSuccess = user => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFail = error => ({
  type: UPDATE_USER_FAIL,
  payload: error,
});

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user,
});

export const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

export const addUserFail = error => ({
  type: ADD_USER_FAIL,
  payload: error,
});
export const deleteUser = user => ({
  type: DELETE_USER,
  payload: user,
});

export const deleteUserSuccess = user => ({
  type: DELETE_USER_SUCCESS,
  payload: user,
});

export const deleteUserFail = error => ({
  type: DELETE_USER_FAIL,
  payload: error,
});