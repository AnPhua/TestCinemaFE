import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registeFailed,
  confirmStart,
  confirmSuccess,
  confirmFailed,
  changepassStart,
  changepassSuccess,
  changepassFailed,
} from "../../component/redux/Slice/authSlice";
import axios from "../Customize-axios";

const loginUser = async (login, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("api/auth/login", login);
    if (res.status === 200) {
      if (res.data.status === 401) {
        alert(
          "Tài Khoản của bạn chưa được kích hoạt! Hãy kiểm tra email để kích hoạt."
        );
      } else {
        dispatch(loginSuccess(res.data));
        navigate("/");
      }
    } else {
      alert(
        "Đăng nhập không thành công.Tài Khoản của bạn chưa được kích hoạt! Hãy kiểm tra email để kích hoạt."
      );
      dispatch(loginFailed());
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Lỗi " + error.response.data.message);
    } else if (error.response && error.response.status === 500) {
      alert("Lỗi Tài Khoản Không Tồn Tại");
    } else {
      alert("Lỗi " + error.message);
    }
  }
};

const registernewUser = async (newUser, dispatch, navigate) => {
  dispatch(confirmStart());
  try {
    const res = await axios.post("api/auth/register", newUser);
    dispatch(confirmSuccess(res.data));
    alert("Đăng Kí Thành Công Hãy Kiểm Tra Mail!!^^");
    navigate("/confirmemail");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Lỗi " + error.response.data.message);
    } else {
      alert("Lỗi " + error.message);
    }
    dispatch(registeFailed());
  }
};
const confirmCode = async (code, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("api/auth/confirmNewAcc", code);
    dispatch(registerSuccess(res.data));
    alert("Xác Minh Tài Khoản Thành Công!!^^");
    navigate("/loginandSignin");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Lỗi " + error.response.data.message);
    } else {
      alert("Lỗi " + error.message);
    }
    dispatch(confirmFailed());
  }
};
const changeYourPassword = async (
  oldPassword,
  newPassword,
  newcfPassword,
  dispatch,
  navigate,
  accessToken
) => {
  console.log(accessToken);
  dispatch(changepassStart());
  try {
    const res = await axios.put(
      `https://localhost:7067/api/auth/changepassword`,
      {
        OldPassword: oldPassword,
        NewPassword: newPassword,
        ConfirmPassword: newcfPassword,
      },
      {
        headers: {
          Authorization: `Bearer Token ${accessToken}`,
        },
      }
    );
    dispatch(changepassSuccess(res.data));
    alert("Đổi Mật Khẩu Thành Công!!^^");
    navigate("/loginandSignin");
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Lỗi " + error.response.data.message);
    } else {
      alert("Lỗi " + error.message);
    }
    dispatch(changepassFailed());
  }
};

export { loginUser, registernewUser, confirmCode, changeYourPassword };
