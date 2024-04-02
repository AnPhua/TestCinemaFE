/* eslint-disable jsx-a11y/anchor-is-valid */
import apple from "../../assets/svg/apple.svg";
import google from "../../assets/svg/google.svg";
import fb from "../../assets/svg/facebook.svg";
const Mainlgrft = () => {
  return (
    <>
      <div className="px-[15px] mx-[375px]">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center   mx-auto md:h-auto lg:py-10 ">
            <div className="flex justify-between">
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

            <p className="double-line w-[45%] text-gray-500 text-[12px]">Hoặc</p>

            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight my-text text-gray-900 md:text-2xl dark:text-white">
                  Đăng Nhập
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium my-text text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
                      placeholder="youremail@gmail.com"
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
                      href="#"
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
                  {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="#"
                      className="hover:underline !font-[600] text-[#2563EB] "
                    >
                      Sign up
                    </a>
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
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
            left:6%;
          }
          
          .double-line::after {
            right:6%;
          }
          
          .double-line p {
            position: relative;
            z-index: 1;
            text-align: center;
            line-height: 0;
          }
          .lineor{
            --tw-bg-opacity: 1;
            background-color: rgb(229 231 235 / var(--tw-bg-opacity));
          }
          .btn-3, .btn-3:hover {
            background-image: radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(2,83,185,1) 0%, rgba(4,189,228,1) 100.2% ) !important;
          }
          .btn:hover{
            background-position: right center;
          }
          .btn {
            flex: 1 1 auto;
            text-align: center;
            transition: 0.7s;
            background-size: 200% auto;
            color: white;
            border-radius: 10px;
        `}
      </style>
    </>
  );
};
export default Mainlgrft;
