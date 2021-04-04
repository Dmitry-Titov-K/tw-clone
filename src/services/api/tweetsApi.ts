import axios from "axios";
import { ITweetsState } from "../../store/ducks/tweets/contracts/state";

export const TweetsApi = {
  tweetFeatch(): Promise<ITweetsState["items"]> {
    return axios
      .get("https://trycode.pw/c/1ST7I.json")
      .then(({ data }) => data);
  },
};
