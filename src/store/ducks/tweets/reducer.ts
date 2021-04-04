import produce, { Draft } from "immer";
import { act } from "react-dom/test-utils";
import {
  TweetsActions,
  TweetsActionsType,
} from "./actionCreators";
import {
  LoadingState,
  ITweetsState,
} from "./contracts/state";

const initialTweetState: ITweetsState = {
  items: [],
  loadingStatus: LoadingState.NEVER,
};

export const tweetReducer = produce(
  (
    draft: Draft<ITweetsState>,
    action: TweetsActions
  ) => {
    switch (action.type) {
      case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingStatus = LoadingState.LOADED;
        break;
      case TweetsActionsType.SET_LOADING_STATE:
        draft.loadingStatus = action.payload;
        break;
      case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingStatus =
          LoadingState.LOADING;
        break;
      default:
        break;
    }
  },
  initialTweetState
);
