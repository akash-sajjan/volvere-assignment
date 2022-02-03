import http from "../../http/http";
import CONSTS from "../../constants/consts";
import { Dispatch } from "redux";

const getPosts = (page: number) => (dispatch: Dispatch) => {
  return http.get(`posts`).then((res) => {
    if (res) {
      const posts: Array<any> = res.data.map((rs: any) => {
        rs.key = (Math.random() * 1000000).toString();
        return rs;
      });
      dispatch({ type: CONSTS.GET_POSTS, data: posts });
      console.log("posts");
      console.log("::::::::::::::::::::::::::::::::::::::::::::::");
    }
  });
};

export { getPosts };
