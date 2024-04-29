import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { useState } from "react";
import { confirmCode } from "../../services/controller/AuthController";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const ConfirmEmail = () => {
  const [confirmCodefrommail ,setconfirmCodefrommail] = useState("");
  const isLogged = useSelector((state) => state.auth.login.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlecode = () => {
    const code = {confirmCode : confirmCodefrommail};
    confirmCode(code, dispatch, navigate);
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
              Xác Thực Tài Khoản
            </h1>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={handlecode}
              style={{
                maxWidth: 600,
              }}
            >
              <Form.Item
                name="confirmCode"
                label="Mã Xác Thực"
                rules={[{ required: true, message: "Vui Lòng Nhập Mã Xác Thực !!!" }]}
              >
                <Input onChange={(e)=>setconfirmCodefrommail(e.target.value)}/>
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button danger type="primary"  htmlType="submit">Xác Thực Email</Button>
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

export default ConfirmEmail;
