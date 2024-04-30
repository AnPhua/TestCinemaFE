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
  sendEmailStart,
  sendEmailSuccess,
  sendEmailFailed,
} from "../../component/redux/Slice/authSlice";
import axios from "../Customize-axios";
import queryString from "query-string";
const loginUser = async (login, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("api/auth/login", login);
    if (res.status === 200) {
      if (res.data.status === 401) {
        // hoặc lỗi 400
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
  token
) => {
  dispatch(changepassStart());
  try {
    const queryParams = queryString.stringify({
      ConfirmPassword: newcfPassword,
      NewPassword: newPassword,
      OldPassword: oldPassword,
    });

    const res = await axios.put(
      `api/auth/changepassword?${queryParams}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.status === 200) {
      dispatch(changepassSuccess(res.data));
      alert("Thay Đổi Mật Khẩu Thành Công!!^^");
      navigate("/");
    } else if (res.status === 400) {
      const errorMessages = res.data.errors;
      if (errorMessages.NewPassword) {
        alert("Lỗi1: " + errorMessages.NewPassword[0]);
      } else if (errorMessages.OldPassword) {
        alert("Lỗi2: " + errorMessages.OldPassword[0]);
      } else if (errorMessages.ConfirmPassword) {
        alert("Lỗi3: " + errorMessages.ConfirmPassword[0]);
      } else {
        alert("Lỗi4: " + res.data.message);
      }
      dispatch(changepassFailed());
    }
  } catch (error) {
    alert("Mật khẩu cũ không đúng !!!");
    dispatch(changepassFailed());
  }
};
const sendEmail = async (email, dispatch, navigate) => {
  dispatch(sendEmailStart());
  try {
    const res = await axios.post("api/auth/confirmemaillink", email);
    if (res.status === 200) {
      dispatch(sendEmailSuccess(res.data));
      alert("Gửi Mail Thành Công!Hãy Kiểm Tra Mail");
      navigate("/");
    } else if (res.status === 400) {
      dispatch(sendEmailFailed());
      alert("Mail Không Tồn Tại!");
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      alert("Lỗi " + error.response.data.message);
    } else {
      alert("Lỗi " + error.message);
    }
    dispatch(sendEmailFailed());
  }
};

export {
  loginUser,
  registernewUser,
  confirmCode,
  changeYourPassword,
  sendEmail,
};
