import { all } from "redux-saga/effects";
import fakeSaga from "./fake/saga";

export default function* rootSaga() {
   yield all([fakeSaga])
} 