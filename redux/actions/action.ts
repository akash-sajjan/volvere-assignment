import http from "../../http/http";
import CONSTS from "../../constants/consts";
import { Dispatch } from "redux";

const getPosts = (page: number) => (dispatch: Dispatch) => {
  return http.get(`posts`).then((res) => {
    if (res) {
      dispatch({ type: CONSTS.GET_POSTS, data: res.data });
      console.log("posts");
      console.log("::::::::::::::::::::::::::::::::::::::::::::::");
    }
  });
};

export { getPosts };
