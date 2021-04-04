import {
  setLoadingState,
  setTweets,
  TweetsActionsType,
} from "./actionCreators";
import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import { TweetsApi } from "../../../services/api/tweetsApi";
import {
  ITweet,
  LoadingState,
} from "./contracts/state";

export function* featchTweetsRequest(): Generator {
  try {
    //@ts-ignore
    const data: ITweet[] = yield call(
      TweetsApi.tweetFeatch
    );
    yield put(setTweets(data));
  } catch (error) {
    yield put(
      setLoadingState(LoadingState.ERROR)
    );
  }
}

export function* watchFeatchTweets() {
  yield takeEvery(
    TweetsActionsType.FETCH_TWEETS,
    featchTweetsRequest
  );
}
