/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { useState } from "react";
import {registernewUser} from "../../services/controller/AuthController";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} Không Được Để Trống!",
  types: {
    email: "${label} Không Đúng Định Dạng Email!",
  },
};


const Registercpn = () => {
  const isLogged = useSelector((state) => state.auth.login.isLogged);
  const [username, setUserName] = useState("");
  const [email ,setEmail] = useState("");
  const [nameuser, setNameuser] = useState("");
  const [phoneNumber,setPhonenumber] = useState("");
  const [password, setPassWord] = useState("");
  const [cfpassword, setCFPassWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleregister = () => {
    if(password === cfpassword){
        const register = {
        username: username,
        email:email,
        name:nameuser,
        phoneNumber: phoneNumber,
        password: password,
      };
      registernewUser(register, dispatch, navigate);
    }
    else{alert("Mật Khẩu Không Trùng Khớp,Xin Thực Hiện Lại!"); window.location.reload();}
  };
  return (
    <>
      <div className="px-[15px] py-[30px] mx-[375px]">
        {isLogged ? (
          <>
            <h1 className="text-xl font-[500] leading-tight tracking-tight my-text !text-[#FF4D4F] md:text-2xl  ml-[200px] mb-[30px]">
              Bạn không đủ điều kiện thực hiện chức năng này, nhấn vào đây để quay về trang chủ
              <Link to="/"><Button type="primary" danger>Trang Chủ</Button></Link>
            </h1>
          </>
        ) : (
          <>
            <h1 className="text-xl font-[500] leading-tight tracking-tight my-text !text-[#FF4D4F] md:text-2xl  ml-[200px] mb-[30px]">
              Đăng Ký Tài Khoản
            </h1>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={handleregister}
              style={{
                maxWidth: 600,
              }}
              validateMessages={validateMessages}
            >
              <Form.Item
                name="username"
                label="Tên Đăng Nhập"
                rules={[{ required: true }]}
              >
                <Input onChange={(e)=>setUserName(e.target.value)}/>
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: "email" }]}
              >
                <Input onChange={(e)=>setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Mật Khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input.Password onChange={(e)=>setPassWord(e.target.value)}/>
              </Form.Item>
              <Form.Item
                label="Xác Nhận Mật Khẩu"
                name="confirmpassword"
                dependencies={['password']}
                rules={[
                  {
                    required: true,
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Mật Khẩu Xác Nhận Không Khớp!'));
                    },
                  }),
                ]}
              >
                <Input.Password onChange={(e)=>setCFPassWord(e.target.value)}/>
              </Form.Item>
              <Form.Item
                name="name"
                label="Tên Người dùng"
                rules={[{ required: true }]}
              >
                <Input onChange={(e)=>setNameuser(e.target.value)}/>
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Số Điện Thoại"
                rules={[{ required: true },{ pattern: /^[0-9]*$/, message: 'Số điện thoại chỉ được nhập số!' }]}
              >
                <Input onChange={(e)=>setPhonenumber(e.target.value)} />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button danger type="primary" htmlType="submit">Đăng Ký</Button>
              </Form.Item>
            </Form>
          </>
        )}
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap");
          .my-text {
            --tw-text-opacity: 1;
            color: rgb(17 24 39 / var(--tw-text-opacity));
            font-family: Oswald !important;
          }
        `}
      </style>
    </>
  );
};

export default Registercpn;
