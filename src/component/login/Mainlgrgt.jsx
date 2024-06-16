/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
//import google from "../../assets/svg/google.svg";
//import fb from "../../assets/svg/facebook.svg";
import Modal from "antd/es/modal/Modal";
import { Form ,Input,Button} from "antd";
import { useEffect, useState } from "react";
import { loginUser,changeYourPassword ,sendEmail} from "../../services/controller/AuthController";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { jwtDecode} from "jwt-decode";

const Mainlgrft = () => {
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [nameuser, setNameuser] = useState("");
  const [email ,setEmail] = useState("");
  const [phoneNumber,setPhonenumber] = useState("");
  const [role,setRole]=useState("");
  const [openchangepass,setOpenChangePass] = useState(false);
  const [oldPassword,setOldPassword] = useState("");
  const [newPassword,setNewPassword] = useState("");
  const [newcfPassword,setNewCFPassword] = useState("");
  const [opengetemailback,setopengetemailback] = useState(false);
  const [getEmailBack,setgetEmailBack] = useState("");
  //const [rank,setRank] =useState("");
  //const [point,setPoint] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const accessTokens = currentUser ? currentUser.accessToken : null;

  if (accessTokens) {
    localStorage.setItem('accesstokens', accessTokens);
  } else {
    localStorage.removeItem('accesstokens');
  }
  const changpass = () =>{
    changeYourPassword(oldPassword,newPassword,newcfPassword, dispatch, navigate,currentUser.accessToken);
  }
  const sendemail = ()=>{
    const mails = {
      email:getEmailBack,
    }
    sendEmail(mails,dispatch,navigate);
  }
  useEffect(() => {
    if (!accessTokens) {
      navigate('/loginandSignin');
    }
  }, [accessTokens, navigate]);
  const validateMessages = {
    required: "Trường này không được bỏ trống !",
    types: {
      email: "${label} Không Đúng Định Dạng",
    },
  };
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  useEffect(() => {
    if (accessTokens) {
      const decodedToken = jwtDecode(accessTokens);
      setNameuser(decodedToken.Name);
      setEmail(decodedToken.Email);
      setPhonenumber(decodedToken.PhoneNumber);
      setRole(decodedToken.Roles);
      //setRank(decodedToken.Rank);
      //setPoint(decodedToken.Point);
    }
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const login = {
      username: username,
      password: password,
    };
    loginUser(login, dispatch, navigate);
  };
  const handleX = () => {
    setOpenChangePass(false);
  }
  const Openthemodal = () =>{
    setOpenChangePass(true);
  }
  const OpenGetEmail = () =>{
    setopengetemailback(true);
  }
  const CloseGetEmail = () =>{
    setopengetemailback(false);
  }

  return (
    <>
      <div>
        {accessTokens ? (
          <div className="xl:w-[1150px] lg:w-[950px] md:w-[730px] mx-auto px-[15px]">
            <div className="mx-[-15px]">
              <div
                id=""
                className="xl:w-[100%] xl:float-left relative min-h-[1px] px-[15px]  !mb-[35px] !mt-[40px]"
              >
                <ul className="nav nav-tabs uppercase tab-information">
                  <li className="text-center">
                    <a
                      className=" md:text-[15px] sm:text-[12px] fontos !text-[14px] bg-[#03599D] text-[#fff]  p-[10px] !w-[25%] rounded-[2px] float-left ml-3"
                      href="#thongtintaikhoan"
                      data-toggle="tab"
                    >
                      Thông tin tài khoản
                    </a>
                  </li>
                </ul>
                <div className="tab-content font-family-san text-[16px] bg-[#fff]">
                  <div
                    className="tab-pane fade in active"
                    id="thongtintaikhoan"
                  >
                    <div class="form-group">
                      <div class="xl:w-[100%] xl:float-left lg:w-[100%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px] !mb-[10px]"></div>
                    </div>
                    <div class="form-group">
                      <div class="lg:w-[50%] lg:float-left !mb-[10px] relative min-h-[1px] px-[15px] ">
                        <label class="control-label !text-[14px]">
                          <span className="text-[red]">*</span>&nbsp;Họ tên
                        </label>
                        <input
                          type="text"
                          id="txtName"
                          value={nameuser || ''}
                          class="form-control"
                          placeholder="Họ tên"
                        />
                      </div>
                      <div class="lg:w-[50%] lg:float-left !mb-[10px] relative min-h-[1px] px-[15px]">
                        <label class="control-label ">
                          <span className="text-[red]">*</span>&nbsp;Email
                        </label>
                        <div class="input-icon">
                          <i class="fa fa-envelope"></i>
                          <input
                            type="text"
                            id="txtEmail"
                            disabled="disabled"
                            value={email || ''}
                            class="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div class="lg:w-[50%] lg:float-left !mb-[10px] relative min-h-[1px] px-[15px] ">
                        <label class="control-label !text-[14px]">
                          <span className="text-[red]">*</span>&nbsp;Số Điện Thoại
                        </label>
                        <input
                          type="text"
                          id="txtName"
                          value={phoneNumber || ''}
                          class="form-control"
                          placeholder="Số Điện Thoại"
                        />
                      </div>
                      <div class="lg:w-[50%] lg:float-left !mb-[10px] relative min-h-[1px] px-[15px]">
                        <label class="control-label font-16">
                          <span className="text-[red]">*</span>&nbsp;Chức Vụ
                        </label>
                        <div class="input-icon">
                          <i class="fa fa-envelope"></i>
                          <input
                            type="text"
                            id="txtEmail"
                            value={role || ''}
                            class="form-control"
                            placeholder="Chức Vụ"
                          />
                        </div>
                      </div>
                      
                    </div>
                    <div class="clearfix"></div>
                    <div class="form-group">
                      <div class="lg:w-[100%] lg:float-left relative min-h-[1px] px-[15px]">
                        <div class="form-group font-family-san text-[16px] text-[#337AB7] hover:underline">
                          <a
                            onClick={Openthemodal}
                            className="cursor-pointer"
                          >
                            Đổi mật khẩu?
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="form-group  text-center ">
                      <div class="lg:w-[100%] lg:float-left relative min-h-[1px] px-[15px] text-center">
                        <div class="form-group">
                          <button
                            type="submit"
                            className="w-[25%] fontos !text-white btn btn-3 my-text  focus:ring-4 focus:outline-none focus:ring-emerald-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800  "
                          >
                            CẬP NHẬT
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-[15px] mx-[375px]">
            <section className="bg-gray-50 dark:bg-gray-900">
              <div className="flex flex-col items-center justify-center mx-auto md:h-auto lg:py-10 ">
                {/* <div className="flex justify-between">
                  <a
                    href="#"
                    className="flex !ml-[25px] transition duration-700 ease-in-out items-start  my-text bg-white shadow  border border-gray-200 hover:bg-[#f3f4f6] rounded-lg px-[1.25rem] py-[0.625rem] text-[14px] leading-[1.25rem] font-[600] my-text dark:text-white mb-[30px] mx-[5px]"
                  >
                    <img className="w-5 h-5 mr-2" src={google} alt="logo" />
                    Đăng Nhập Với Google
                  </a>
                  <a
                    href="#"
                    className="flex transition duration-700 ease-in-out items-end my-text bg-white shadow border border-gray-200 hover:bg-[#f3f4f6] rounded-lg px-[1.25rem] py-[0.625rem] text-[14px] leading-[1.25rem] font-[600] my-text dark:text-white mb-[30px] mx-[5px]"
                  >
                    <img className="w-5 h-5 mr-2" src={fb} alt="logo" />
                    Đăng Nhập Với Facebook
                  </a>
                </div>

                <p className="double-line w-[45%] text-gray-500 text-[12px]">
                  Hoặc
                </p> */}

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight my-text text-gray-900 md:text-2xl dark:text-white">
                      Đăng Nhập
                    </h1>
                    <form
                      className="space-y-4 md:space-y-6"
                      action="#"
                      onSubmit={handleLogin}
                    >
                      <div>
                        <label
                          for="username"
                          className="block mb-2 text-sm font-medium my-text text-gray-900 dark:text-white"
                        >
                          Tên Đăng Nhập
                        </label>
                        <input
                          type="username"
                          name="username"
                          id="username"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                          placeholder="Nhập Tên Đăng Nhập"
                          onChange={(e) => setUserName(e.target.value)}
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          className="block mb-2 text-sm font-medium text-gray-900 my-text dark:text-white"
                        >
                          Mật Khẩu
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus-visible:!ring-sky-600 focus-visible:!border-sky-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                          onChange={(e) => setPassWord(e.target.value)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="remember"
                              aria-describedby="remember"
                              type="checkbox"
                              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-sky-600 dark:ring-offset-gray-800"
                              required=""
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              for="remember"
                              className="text-gray-500 dark:text-gray-300 my-text"
                            >
                              Ghi nhớ đăng nhập
                            </label>
                          </div>
                        </div>
                        <a
                          onClick={OpenGetEmail}
                          className="text-sm my-text hover:underline  !text-[#2563EB] !font-[600]"
                        >
                          Quên mật khẩu?
                        </a>
                      </div>
                      <button
                        type="submit"
                        className="w-full !text-white btn btn-3 my-text  focus:ring-4 focus:outline-none focus:ring-sky-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800 !font-[500] "
                      >
                        ĐĂNG NHẬP
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
      <Modal
        destroyOnClose={true}
        title={null}
        open={opengetemailback}
        onCancel={CloseGetEmail}
        footer={null}
        className="!w-[400px] max-w-[100%] align-middle overflow-auto mt-[150px]"
      >
        <h3  className=" md:text-[15px] sm:text-[12px] fontos !text-[23px]  text-[#FF4D4F]  p-[10px] !w-[70%] rounded-[2px] text-center">QUÊN MẬT KHẨU</h3>
            <Form
              {...layout}
              name="Send-Email"
              onFinish={sendemail}
              style={{
                maxWidth: 300,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input onChange={(e)=>setgetEmailBack(e.target.value)} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button danger type="primary" htmlType="submit">Gửi đi</Button>
              </Form.Item>
            </Form>
      </Modal>
      <Modal
        destroyOnClose={true}
        title={null}
        open={openchangepass}
        onCancel={handleX}
        footer={null}
        className="!w-[700px] max-w-[100%] text-left align-middle overflow-auto mt-[50px]"
      >
        <h3  className=" md:text-[15px] sm:text-[12px] fontos !text-[23px]  text-[#FF4D4F]  p-[10px] !w-[25%] rounded-[2px] text-left">ĐỔI MẬT KHẨU</h3>
        <Form
              {...layout}
              name="Change-Password"
              onFinish={changpass}
              style={{
                maxWidth: 600,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                label="Mật Khẩu Cũ"
                name="OldPassword"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password onChange={(event) => setOldPassword(event.target.value)} />
              </Form.Item>
              <Form.Item
                label="Mật Khẩu Mới"
                name="NewPassword"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password onChange={(event) => setNewPassword(event.target.value)} />
              </Form.Item>
              <Form.Item
                label="Xác Nhận Lại Mật Khẩu Mới"
                name="NewCFPassword"
                dependencies={['NewPassword']}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('NewPassword') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Xác Nhận Mật Khẩu Không Đúng!'));
                    },
                  }),
                ]}
              >
                <Input.Password onChange={(event) => setNewCFPassword(event.target.value)} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button danger type="primary" htmlType="submit">Xác Nhận Đổi Mật Khẩu</Button>
              </Form.Item>
            </Form>
      </Modal>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap");
          .fontos {
            font-family: Oswald !important;
          }
          .font-family-san {
            font-family: "Source Sans 3", sans-serif;
          }

          .my-text {
            --tw-text-opacity: 1;
            color: rgb(17 24 39 / var(--tw-text-opacity));
            font-family: "Inter", sans-serif;
          }
          .double-line {
            position: relative;
            overflow: hidden;
            text-align: center;
          }
          input.form-control,
          textarea.form-control {
            border-color: #dbdbdb;
            color: #777;
            font: 14px Arial, sans-serif;
            border-radius: 0;
            box-shadow: none;
          }
          .form-control {
            font-size: 14px;
            font-weight: normal;
            color: #333;
            background-color: #fff;
            border: 1px solid #e5e5e5;
            box-shadow: none;
            transition: border-color ease-in-out 0.15s,
            box-shadow ease-in-out 0.15s;
            display: block;
            width: 100%;
            height: 34px;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            color: #555;
            background-color: #fff;
            background-image: none;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          .form-control[disabled],
          .form-control[readonly],
          fieldset[disabled] .form-control {
            cursor: not-allowed;
            background-color: #eeeeee;
          }
          .form-control[disabled],
          fieldset[disabled] .form-control {
            cursor: not-allowed;
          }
          .form-control[disabled],
          .form-control[readonly],
          fieldset[disabled] .form-control {
            background-color: #eee;
            opacity: 1;
          }
          .input-icon > i {
            color: #ccc;
            display: block;
            position: absolute;
            margin: 8px 2px 4px 10px;
            z-index: 3;
            width: 16px;
            font-size: 16px;
            text-align: center;
          }
          [class^="fa-"],
          [class^="glyphicon-"],
          [class^="icon-"],
          [class*=" fa-"],
          [class*=" glyphicon-"],
          [class*=" icon-"] {
            display: inline-block;
            margin-top: 1px;
            font-size: 14px;
            line-height: 14px;
            -webkit-font-smoothing: antialiased;
          }
          .fa {
            display: inline-block;
            font: normal normal normal 14px / 1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transform: translate(0, 0);
          }
          .input-icon > .form-control {
            padding-left: 33px;
          }
          .double-line::before,
          .double-line::after {
            content: "";
            position: absolute;
            bottom: 50%;
            width: 40%;
            height: 0.25px;
            background-color: #e4e4e7;
          }

          .double-line::before {
            left: 6%;
          }

          .double-line::after {
            right: 6%;
          }
          .control-label {
            margin-top: 1px;
          }
          label {
            display: inline-block;
            max-width: 100%;
            margin-bottom: 5px;
            font-weight: bold;
          }
          label {
            font-weight: 400;
            font-size: 14px;
          }
          .double-line p {
            position: relative;
            z-index: 1;
            text-align: center;
            line-height: 0;
          }
          .lineor {
            --tw-bg-opacity: 1;
            background-color: rgb(229 231 235 / var(--tw-bg-opacity));
          }
          .btn-3,
          .btn-3:hover {
            background-image: radial-gradient(
              circle farthest-corner at 22.4% 21.7%,
              rgba(2, 83, 185, 1) 0%,
              rgba(4, 189, 228, 1) 100.2%
            ) !important;
          }
          .btn:hover {
            background-position: right center;
          }
          .btn {
            flex: 1 1 auto;
            text-align: center;
            transition: 0.7s;
            background-size: 200% auto;
            color: white;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Mainlgrft;
