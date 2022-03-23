import { call, put, takeEvery } from "redux-saga/effects";
import { actions, userError, userSuccess } from "../../actions";
import { fetchUser } from "../requests/fetchUser";

function* getUsers() {
  try {
    const users = yield call(fetchUser);
    yield put(userSuccess(users))
  } catch (error) {
      yield put(userError(error?.message || "Something went wrong!!"))
  }
}

export function* requestUserWatcher(){
    yield takeEvery(actions.USER_REQUEST,getUsers)
}


