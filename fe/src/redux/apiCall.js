import { publicReq,userReq } from "../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,

} from "./userRedux";
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicReq.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
 
  } catch (error) {
    dispatch(loginFailure());
  
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicReq.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

