import logo from "../../assets/images/logo.png";
import dathongbao from "../../assets/images/dathongbao.png";
import fb from "../../assets/images/facebook.png";
import yt from "../../assets/images/youtube.png";
import ig from "../../assets/images/instagram.png";
import { Link } from "react-router-dom";

const row1 = [
  { text: "Tuyển dụng" },
  { text: "Giới thiệu" },
  { text: "Liên hệ" },
  { text: "F.A.Q" },
  { text: "Hoạt động xã hội" },
  { text: "Điều khoản sử dụng" },
  { text: "Chính sách thanh toán, đổi trả - hoàn vé" },
  { text: "Liên hệ quảng cáo" },
  { text: "Điều khoản bảo mật" },
  { text: "Hướng dẫn đặt vé online" },
];
const row2 = [
  { text: "Beta Cinemas Lào Cai - Hotline 0358 968 970 " },
  {
    text: "Beta Cinemas Trần Quang Khải, TP Hồ Chí Minh - Hotline 1900 638 362 ",
  },
  { text: "Beta Cinemas TRMall Phú Quốc, Kiên Giang - Hotline 0983 474 440 " },
  { text: "Beta Cinemas Empire Bình Dương - Hotline 0934 573 748 " },
  { text: "Beta Cinemas Quang Trung, TP Hồ Chí Minh - Hotline 0706 075 509 " },
  { text: "Beta Cinemas Giải Phóng, Hà Nội - Hotline 0585 680 360 " },
  { text: "Beta Cinemas Thanh Xuân, Hà Nội - Hotline 082 4812878 " },
  { text: "Beta Cinemas Mỹ Đình, Hà Nội - Hotline 0866 154 610" },
  { text: "Beta Cinemas Đan Phượng, Hà Nội - Hotline 0983 901 714 " },
  { text: "Beta Cinemas Thái Nguyên - Hotline 0867 460 053" },
  { text: "Beta Cinemas Thanh Hóa - Hotline 0325 360 249" },
  { text: "Beta Cinemas Bắc Giang - Hotline 0866 493 413" },
  { text: "Beta Cinemas Nha Trang, Khánh Hòa - Hotline 0399 475 165" },
  { text: "Beta Cinemas Biên Hòa, Đồng Nai - Hotline 0979 460 002" },
  { text: "Beta Cinemas Long Khánh, Đồng Nai - Hotline 0925 165 684" },
  { text: "Beta Cinemas Phú Mỹ, Bà Rịa Vũng Tàu - Hotline 0886 006 310 " },
  { text: "Beta Cinemas Hồ Tràm, Bà Rịa Vũng Tàu - Hotline 0254 3788601 " },
  { text: "Beta Cinemas Tân Uyên, Bình Dương - Hotline 0937 905 925 " },
  { text: "Tải Ứng Dụng Beta Cinemas" },
];
const Footer = () => {
  return (
    <>
      <div className="border-t-[2px] border-[#ccc] preft float-left w-[100%]">
        <div className="pt-[25px] xl:w-[1150px] lg:w-[950px] md:w-[730px] mx-[auto] px-[15px]">
          <div className="mx-[-15px] before:content-[' '] before:table  after:clear-both ">
            <div className="lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left relative min-h-[1px] px-[15px] pb-[22px]">
              <div>
                <ul className="list-none pl-0">
                  <Link to="/">
                  <li className="xl:w-[100%] xl:float-left lg:w-[100%] lg:float-left md:w-[100%] md:float-left md:mb-[6px] relative min-h-[1px] px-[15px]">
                    <a
                      className="float-none font-[400] my-0 mx-0  py-0 px-[15px]"
                      href="y"
                    >
                      <img
                        className="align-middle border-0 w-[120px]"
                        src={logo}
                      />
                    </a>
                  </li>
                  </Link>
                  {row1.map((item) => (
                    <li className="xl:w-[100%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left sm:w-[50%] sm:float-left  relative min-h-[1px] px-[15px] mb-[6px]">
                      <i className="fa fa-angle-right inline-block w-[1.25em] text-center mt-[1px] text-[14px] leading-[14px]"></i>
                      <a
                        href="y"
                        className="hover:text-[#337ab7] hover:underline"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-[81.25%] lg:float-left md:w-[100%] md:float-left relative min-h-[1px] px-[15px] pb-[22px]">
              <div>
                <div className="preft lg:w-[50%] lg:float-left md:w-[100%] md:float-left pb-[22px] px-[15px]">
                  <h2 className="font-bold">CỤM RẠP BETA</h2>
                  <ul className="list-none pl-0 float-left ml-[-15px]">
                    {row2.map((item) => (
                      <li className="xl:w-[100%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left sm:w-[50%] sm:float-left  relative min-h-[1px] px-[15px] mb-[6px] ">
                        <i className="fa fa-angle-right inline-block w-[1.25em] text-center mt-[1px] text-[14px] leading-[14px]"></i>
                        <a
                          href="y"
                          className="hover:text-[#337ab7] hover:underline"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="preft !w-[226.09px] flex flex-col items-start lg:w-[50%] lg:float-left md:w-[100%] md:float-left pb-[22px] relative min-h-[1px] px-[15px] ">
                  <h2 className="font-bold">KẾT NỐI VỚI CHÚNG TÔI</h2>
                  <ul className="social-icons list-none pl-0 float-left flex items-stretch ">
                    <li>
                      <a className="fb" href="a"></a>
                    </li>
                    <li>
                      <a className="yt" href="a"></a>
                    </li>
                    <li>
                      <a className="tt" href="b"></a>
                    </li>
                    <li>
                      <a className="ig" href="c"></a>
                    </li>
                  </ul>
                  <img className="w-[180px] h-[auto]" src={dathongbao} alt="" />
                </div>
                <div className="preft lg:w-[25%] lg:float-left md:w-[100%] md:float-left pb-[22px] px-[15px]">
                  <h2 className="font-bold">LIÊN HỆ</h2>
                  <div className="float-left">
                    <h4 className="m-0 fonta  text-[17px]">CÔNG TY CỔ PHẦN BETA MEDIA</h4>
                    <h6 className="my-[10px] fonta  text-[12px]">
                      Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày
                      08/09/2014 tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
                    </h6>
                    <h6 className="my-[10px] fonta  text-[12px]">
                      Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường
                      Giáp Bát, quận Hoàng Mai, thành phố Hà Nội
                    </h6>
                    <p></p>
                    <h6 className="my-[10px] fonta  text-[12px]">Hotline: 1900 636807 / 0934 632682</h6>
                    <h6 className="my-[10px] fonta  text-[12px]">Email: mkt@betacinemas.vn</h6>
                    <p></p>
                    <p></p>
                    <h4 className="m-0 fonta  text-[17px]">
                      <strong>Liên hệ hợp tác kinh doanh:</strong>
                    </h4>
                    <h4 className="my-[10px] fonta  text-[17px]">Email: bachtx@betagroup.vn</h4>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap");
          .preft li {
            display: list-item;
          }
          h1, h2, h3, h4, h5, h6{
            color: inherit;
        }
          .fonta{
            font-family: "Oswald", sans-serif;
            font-weight: 400 !important;
          }
          .preft a {
            font-size: 14px;
            color: #000;
            font-family: "Oswald", sans-serif;
            font-optical-sizing: auto;
            font-weight: 400;
            font-style: normal;
            font-stretch: normal;
          }
          .preft h2 {
            font-size: 20px;
            padding-bottom: 7px;
            margin: 0 0 15px;
            text-transform: uppercase;
            border-bottom: 4px solid transparent;
            border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
            border-image-slice: 1;
            float: left;
            font-family: Oswald !important;
            line-height: 1.5em;
            font-weight: 500;
            font-stretch: normal;
          }
          .preft .social-icons {
            padding-top: 5px;
            float: left;
          }
          .social-icons {
            width: 28px;
            height: 28px;
            background-position: 0 0;
            background-repeat: no-repeat;
            border-radius: 2px;
            transition: all 0.3s ease-in-out;
          }
          .social-icons:after {
            clear: both;
          }
          .social-icons:before,
          .social-icons:after {
            content: " ";
            display: table;
          }
          .social-icons > li {
            float: left;
            display: block;
            list-style: none;
            margin-right: 5px;
            margin-bottom: 5px;
            text-indent: -9999px;
          }
          .social-icons > li > a {
            -webkit-border-radius: 2px;
            -moz-border-radius: 2px;
            -ms-border-radius: 2px;
            -o-border-radius: 2px;
            border-radius: 2px;
            width: 28px;
            height: 28px;
            display: block;
            background-position: 0 0;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            -ms-transition: all 0.3s ease-in-out;
            -moz-transition: all 0.3s ease-in-out;
            -webkit-transition: all 0.3s ease-in-out;
          }
          .social-icons li:hover > a {
            background-position: 0 -38px;
          }
          .social-icons li .fb {
            background: url(${fb}) no-repeat;
          }
          .social-icons li .yt {
            background: url(${yt}) no-repeat;
          }
          .social-icons li .tt {
            background: url("https://betacinemas.vn/assets/global/img/social/tiktok.png")
              no-repeat;
          }
          .social-icons li .ig {
            background: url(${ig})
              no-repeat;
          }
        `}
      </style>
    </>
  );
};
export default Footer;
