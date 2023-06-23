import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Crypto Redux States
import {
  GET_USERS,
  ADD_NEW_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./actionType";
import {
  UserApiResponseSuccess, UserApiResponseError,
  addUserSuccess,
  addUserFail,
  updateUserSuccess,
  updateUserFail,
  deleteUserSuccess,
  deleteUserFail,
} from "./action";

//Include Both Helper File with needed methods
import {
  getUsers as getUsersApi,
  addNewUser,
  updateOneUser,
  deleteUser,
}
  from "../../../helpers/fakebackend_helper";

function* getUsers() {
  try {
    const response = yield call(getUsersApi);
    yield put(UserApiResponseSuccess(GET_USERS, response));
  } catch (error) {
    yield put(UserApiResponseError(GET_USERS, error));
  }
}

function* onAddNewUser({ payload: user }) {
  try {
    const response = yield call(addNewUser, user);

    yield put(addUserSuccess(response));
  } catch (error) {
    yield put(addUserFail(error));
  }
}

function* onDeleteUser({ payload: user }) {
  try {
    const response = yield call(deleteUser, user);
    yield put(deleteUserSuccess(response));
  } catch (error) {
    yield put(deleteUserFail(error));
  }
}

function* onUpdateUser({ payload: user }) {
  try {
    const response = yield call(updateOneUser, user);
    yield put(updateUserSuccess(response));
  } catch (error) {
    yield put(updateUserFail(error));
  }
}



export function* watchgetUsers() {
  yield takeEvery(GET_USERS, getUsers);
}

export function* watchAddNewUser() {
  yield takeEvery(ADD_NEW_USER, onAddNewUser);
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER, onUpdateUser);
}

export function* watchDeleteUser() {
  yield takeEvery(DELETE_USER, onDeleteUser);
}



function* userSaga() {
  yield all([
    fork(watchgetUsers),
    fork(watchAddNewUser),
    fork(watchUpdateUser),
    fork(watchDeleteUser)
  ]
  );
}

export default userSaga;
