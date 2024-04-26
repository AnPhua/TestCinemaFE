import {
  loginFailed,
  loginStart,
  loginSuccess,
} from "../../component/redux/Slice/authSlice";
import axios from "../Customize-axios";

const loginUser = async (newUser, dispath, navigate) => {
  dispath(loginStart());
  try {
    const res = await axios.post("api/auth/login", newUser);
    dispath(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    console.log("Lỗi ", error);
    dispath(loginFailed());
  }
};
export { loginUser };
