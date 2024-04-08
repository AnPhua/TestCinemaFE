/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import detailday from "../data/dayseat";
import datafilms from "../data/datanoarrays";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsFilm = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();
  const data = datafilms.find((value) => value.id === parseInt(id));
  const handleOnClick = (i, e) => {
    e.preventDefault();
    setActiveIndex(i);
  };
  const daysofweek = [
    { days: "07", dtday: "/04 - CN" },
    { days: "08", dtday: "/04 - T2" },
    { days: "09", dtday: "/04 - T3" },
    { days: "10", dtday: "/04 - T4" },
    { days: "11", dtday: "/04 - T5" },
  ];
  const selectedObject = detailday[activeIndex];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="xl:min-w-[1150px] lg:min-w-[950px] md:min-w-[730px] mx-auto px-[15px] md:px-[388.50px] ">
        <h3 className="my-[20px] mx-0 text-[23px] leading-[1.5em] fonta">
          Trang chủ &gt;{" "}
          <span className="!text-[#03599d] text-[23px] leading-[1.5em] fonta">
            {data?.name}
          </span>
        </h3>
        <div className="mx-[-15px]">
          <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
            <div className="relative">
              <img
                className="block max-w-[100%] h-[auto] rounded-[20px] w-[100%] align-middle border-0"
                alt=""
                src={require(`../../assets/images/poster/${data.image}`)}
              />
              {data.ageLimit && (
                <span className="absolute top-[10px] left-[10px] ">
                  <img src={require(`../../assets/images/${data.ageLimit}`)} className="block max-w-[100%] h-[auto]" alt="" />
                </span>
              )}
            </div>
          </div>
          <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px] sm:pt-[15px]">
            <h1 className="m-0 mb-[15px] text-[33px] fonta !font-[500]">
              {data?.name}
            </h1>

            <p className="mb-[15px] text-base fontsan text-justify text-[#333333] tracking-tight text-opacity-70">
              {data?.describe}
            </p>

            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Đạo diễn: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {data?.director}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Diễn viên: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {data?.caster}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Thể loại: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {data?.category}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Thời lượng: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {data?.time} phút
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Ngôn ngữ: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {data?.language}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Ngày khởi chiếu: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {data?.launchDateofDetails}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[-15px]">
          <div className="lg:w-[100%] lg:float-left  relative min-h-[1px] px-[15px] tab-style-1 mb-[35px] fonta ">
            <ul className="tf navtab pb-[1px] text-[14px] border-b border-[#ddd] mb-[10px] mx-[1%] flex ">
              {daysofweek.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => handleOnClick(index, e)}
                  className={activeIndex === index ? "active" : " "}
                  style={{
                    borderBottom: "4px solid transparent",
                    width: "14.285%",
                    display: "block",
                    position: "relative",
                    textAlign: "center",
                    margin: "0",
                    padding: "0",
                    marginBottom: "-1px",
                  }}
                >
                  <a
                    href="#"
                    className=" py-0 !px-[10px] text-center text-[18px]   relative block"
                    id={index}
                  >
                    <span className="md:!text-[38px] sm:!text-[30px] ">
                      {item.days}
                    </span>
                    {item.dtday}
                  </a>
                </li>
              ))}
            </ul>
            <div className="py-[15px] px-0" id="tab-content">
              <div className="tab-pane fade in active" id="88">
                <div className="mx-[-15px]">
                  <div className="lg:w-[100%] col-sm-16 sm:w-[100%] relative min-h-[1px] px-[15px] my-[10px]">
                    <span className="text-lg font-bold uppercase">
                      2D Phụ đề
                    </span>
                  </div>

                  <div className="flex">
                    {selectedObject.map((seat) => (
                      <div
                        key={seat.id}
                        className="xl:w-[12.5%] lg:w-[12.5%]  md:w-[18.75%]  sm:w-[31.25%]  text-center relative min-h-[1px] px-[15px]"
                      >
                        <a className="btn default w-[100%]">{seat.time}</a>
                        <div className="text-[11px] !pt-[5px] opacity-75">
                          {seat.seat} ghế trống
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div
              className="fb-like hidden-xs fb_iframe_widget my-7"
              data-href="https://www.betacinemas.vn/chi-tiet-phim.htm?gf=defdaed2-3776-4ed1-888e-a8531dfc5d15"
              data-layout="standard"
              data-action="like"
              data-size="small"
              data-show-faces="true"
              data-share="true"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="action=like&amp;app_id=367174740769877&amp;container_width=1120&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fchi-tiet-phim.htm%3Fgf%3Ddefdaed2-3776-4ed1-888e-a8531dfc5d15&amp;layout=standard&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"
            >
              <span className="align-bottom w-[450px] h-[28px]">
                <iframe
                  name="f7cf30ae6bafb0f0d"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:like Facebook Social Plugin"
                  title="fb:like Facebook Social Plugin"
                  frameborder="0"
                  allowtransparency="true"
                  allowfullscreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://www.facebook.com/v17.0/plugins/like.php?action=like&amp;app_id=367174740769877&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df33af476fd6b76c5c%26domain%3Dbetacinemas.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbetacinemas.vn%252Ffad566ecf318ae57d%26relation%3Dparent.parent&amp;container_width=1120&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fchi-tiet-phim.htm%3Fgf%3Ddefdaed2-3776-4ed1-888e-a8531dfc5d15&amp;layout=standard&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"
                  className="border-none visible w-[450px] h-[28px]"
                ></iframe>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative p-0 overflow-hidden bg-[#3c3e4d] md:px-[390px]">
        <div className="xl:min-w-[1150px] lg:min-w-[950px] md:min-w-[730px] mx-auto px-[15px]">
          <div className="text-center !mt-[20px]">
            <ul class="nav tab-films inline-block mb-[30px] pl-0">
              <li class="active">
                <a data-toggle="tab" className="p-0">
                  <h1 className="!font-[700] text-[#fff] text-[33px] fonta mt-[20px] mb-[10px] mx-0 bbtf">
                    TRAILER
                  </h1>
                </a>
              </li>
            </ul>
          </div>
          <div className="mx-[-15px] mb-[20px]">
            <div className="lg:w-[75%] lg:float-left lg:ml-[12.5%] !mb-[35px] relative min-h-[1px] px-[15px] border-white">
              <iframe
                className="w-[100%] h-[60vh] text-center align-middle justify-center"
                src={`https://www.youtube.com/embed/${data?.youtube}&amp;showinfo=0&amp;autoplay=1`}
                allowfullscreen=""
              ></iframe> 
            </div>
            <div className="lg:w-[100%] lg:float-left relative min-h-[1px] px-[15px] margin-bottom-35">
              <div
                className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop w-[100%]"
                data-href="https://www.betacinemas.vn/chi-tiet-phim.htm?gf=defdaed2-3776-4ed1-888e-a8531dfc5d15"
                data-numposts="5"
                data-width="auto"
                data-colorscheme="dark"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="app_id=367174740769877&amp;color_scheme=dark&amp;container_width=1120&amp;height=100&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fchi-tiet-phim.htm%3Fgf%3Ddefdaed2-3776-4ed1-888e-a8531dfc5d15&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v17.0&amp;width="
              >
                <span className="align-bottom w-[100%] h-[216px]">
                  <iframe
                    name="f80688778823ac5a6"
                    width="1000px"
                    height="100px"
                    data-testid="fb:comments Facebook Social Plugin"
                    title="fb:comments Facebook Social Plugin"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v17.0/plugins/comments.php?app_id=367174740769877&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df8edc8aa5e0ea77d5%26domain%3Dbetacinemas.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbetacinemas.vn%252Ffad566ecf318ae57d%26relation%3Dparent.parent&amp;color_scheme=dark&amp;container_width=1120&amp;height=100&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fchi-tiet-phim.htm%3Fgf%3Ddefdaed2-3776-4ed1-888e-a8531dfc5d15&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v17.0&amp;width="
                    className="border-none visible w-[100%] h-[216px]"
                  ></iframe>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap");
          .fonta {
            font-family: "Oswald", sans-serif;
            font-weight: 400;
          }
          .fontsan {
            font-family: "Source Sans 3", sans-serif;
          }
          .tab-films > li.active {
            border-bottom: 4px solid transparent;
            border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
            border-image-slice: 1;
            border-width: 0px 0px 4px 0px;
          }
          .btn.default {
            color: #333333;
            background-color: #e5e5e5;
          }
          .btn {
            flex: 1 1 auto;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2); */
            /* box-shadow: 0 0 20px #eee; */
            border-radius: 10px;
          }
          .btn {
            text-transform: uppercase;
          }
          .btn {
            border-width: 0;
            padding: 5px 14px;
            font-size: 14px;
            outline: none !important;
            background-image: none !important;
            filter: none;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            text-shadow: none;
          }
          .btn {
            display: inline-block;
            margin-bottom: 0;
            font-weight: normal;
            text-align: center;
            vertical-align: middle;
            -ms-touch-action: manipulation;
            touch-action: manipulation;
            cursor: pointer;
            background-image: none;
            border: 1px solid transparent;
            white-space: nowrap;
            padding: 6px 12px;
            font-size: 14px;
            line-height: 1.42857143;
            border-radius: 4px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .btn.default:hover,
          .btn.default:focus,
          .btn.default:active,
          .btn.default.active {
            color: #333333;
            background-color: lightgray;
            cursor: pointer;
          }
          .btn:hover {
            background-position: right center;
          }
          .tf > li {
            margin-bottom: -1px;
          }
          .tf > li.active {
            border-bottom: 4px solid transparent;
            border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
            border-image-slice: 1;
            border-width: 0px 0px 4px 0px;
            color: #03599d !important;
          }
          .navtab {
            border-bottom: 1px solid #ddd;
          }
        `}
      </style>
    </>
  );
};
export default DetailsFilm;
