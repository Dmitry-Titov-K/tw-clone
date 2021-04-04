import { Action } from "redux";
import {
  ITweetsState,
  LoadingState,
} from "./contracts/state";

export enum TweetsActionsType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

export interface ISetTweetsActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: ITweetsState["items"];
}
export interface IFetchTweetsActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}
export interface ISetLoadingTweetsActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
////////////////////////////////

export const setTweets = (
  payload: ITweetsState["items"]
): ISetTweetsActionInterface => ({
  type: TweetsActionsType.SET_TWEETS,
  payload,
});

export const fetchTweets = (): IFetchTweetsActionInterface => ({
  type: TweetsActionsType.FETCH_TWEETS,
});

export const setLoadingState = (
  payload: LoadingState
): ISetLoadingTweetsActionInterface => ({
  type: TweetsActionsType.SET_LOADING_STATE,
  payload,
});
export type TweetsActions =
  | ISetTweetsActionInterface
  | ISetLoadingTweetsActionInterface
  | IFetchTweetsActionInterface;
