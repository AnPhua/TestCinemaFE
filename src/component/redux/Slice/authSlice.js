import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  //isLogged: false,
  login: {
    isLogged: false,
    currentUser: null,
    isFetching: false,
    error: false,
  },
  register: {
    isFetching: false,
    error: false,
    success: false,
  },
  confirmCode: {
    isFetching: false,
    error: false,
    success: false,
  },
  changePassword: {
    isFetching: false,
    error: false,
    success: false,
  },
  sendEmail: {
    isFetching: false,
    error: false,
    success: false,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.login.isLogged = false;
      state.login.currentUser = null;
      state.login.error = true;
    },
    loginStart: (state) => {
      state.login.isFetching = true;
      state.login.isLogged = false;
    },
    loginSuccess: (state, action) => {
      state.login.isLogged = true;
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    loginFailed: (state) => {
      state.login.isLogged = false;
      state.login.isFetching = false;
      state.login.error = true;
    },
    registerStart: (state) => {
      state.register.isFetching = true;
    },
    registerSuccess: (state) => {
      state.register.isFetching = false;
      state.register.error = false;
      state.register.success = true;
    },
    registeFailed: (state) => {
      state.register.isFetching = false;
      state.register.error = true;
      state.register.success = false;
    },
    confirmStart: (state) => {
      state.confirmCode.isFetching = true;
    },
    confirmSuccess: (state) => {
      state.confirmCode.isFetching = false;
      state.confirmCode.error = false;
      state.confirmCode.success = true;
    },
    confirmFailed: (state) => {
      state.confirmCode.isFetching = false;
      state.confirmCode.error = true;
      state.confirmCode.success = false;
    },
    changepassStart: (state) => {
      state.confirmCode.isFetching = true;
    },
    changepassSuccess: (state) => {
      state.confirmCode.isFetching = false;
      state.confirmCode.error = false;
      state.confirmCode.success = true;
    },
    changepassFailed: (state) => {
      state.confirmCode.isFetching = false;
      state.confirmCode.error = true;
      state.confirmCode.success = false;
    },
    sendEmailStart: (state) => {
      state.sendEmail.isFetching = true;
    },
    sendEmailSuccess: (state) => {
      state.sendEmail.isFetching = false;
      state.sendEmail.error = false;
      state.sendEmail.success = true;
    },
    sendEmailFailed: (state) => {
      state.sendEmail.isFetching = false;
      state.sendEmail.error = true;
      state.sendEmail.success = false;
    },
  },
});
export const {
  signout,
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
} = authSlice.actions;
export default authSlice.reducer;
