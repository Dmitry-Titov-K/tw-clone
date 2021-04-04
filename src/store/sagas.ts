import { all } from "redux-saga/effects";
import { watchFeatchTweets } from "./ducks/tweets/saga";

export default function* rootSaga() {
  yield all([watchFeatchTweets()]);
}
