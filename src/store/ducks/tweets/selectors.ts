import { createSelector } from "reselect";
import { IRootState } from "../../store";
import {
  ITweetsState,
  LoadingState,
} from "./contracts/state";

export const selectTweets = (
  state: IRootState
): ITweetsState => state.tweets;

export const selectTweetsItems = createSelector(
  selectTweets,
  (tweets) => tweets.items
);

export const selectLoadingState = (
  state: IRootState
): LoadingState =>
  selectTweets(state).loadingStatus;

export const selectIsTweetsLoading = (
  state: IRootState
): boolean =>
  selectLoadingState(state) ===
  LoadingState.LOADING;

export const selectIsTweetsLoaded = (
  state: IRootState
): boolean =>
  selectLoadingState(state) ===
  LoadingState.LOADED;
