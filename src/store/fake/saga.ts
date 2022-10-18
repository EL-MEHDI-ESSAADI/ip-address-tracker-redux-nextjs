import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "./actions";

function* logUser(action: { type: string; payload: string }) {
   console.log(action.payload);
}

export function* watchChangeUserName() {
   yield takeEvery(actionTypes.CHANGE_USER_NAME, logUser);
}
