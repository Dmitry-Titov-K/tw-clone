export enum LoadingState {
  LOADED = "LOADED",
  ERROR = "ERROR",
  LOADING = "LOADING",
  NEVER = "NEVER",
}

export interface ITweet {
  _id: string;
  text: string;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

////////////////////////////////

export interface ITweetsState {
  items: ITweet[];
  loadingStatus: LoadingState;
}
