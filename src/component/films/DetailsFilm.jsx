/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  GetMovieById,
  GetSchedulesByMovie,GetMovieByTypeId
} from "../../services/controller/StaffController";
import { Modal } from "antd";
import { PassingData } from "../../App";
import ContentFilms from "../content/ContentFilms";
const DetailsFilm = () => {
  const selectcinema = useContext(PassingData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [allmovie, setallmovie] = useState([]);
  const [selectedDay, setSelectedDay] = useState("");
  const { id } = useParams();
  const accessTokens = localStorage.getItem("accesstokens");
  const [dayofWeek, setDayofWeek] = useState([]);
  const [selectedMovieDuration, setMovieDuration] = useState("");
  const [openConfirmTicket, setopenConfirmTicket] = useState(() => false);
  const [selectScheduleId, setSelectScheduleId] = useState("");
  const [movieTypeId,setMovieTypeId] = useState([]);
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await GetMovieById(id);
        if (response && response.data) {
          setallmovie(response.data);
          
        }
      } catch (error) {
        console.error("Lỗi trong quá trình lấy dữ liệu:", error);
      }
    };
    
    fetchMovieById();
  }, [id]);
  const handleOnClick = (i, e) => {
    e.preventDefault();
    setActiveIndex(i);
    const selectedDayDetails = dayofWeek[i].dayDetails;
    setSelectedDay(selectedDayDetails);
  };
  const viewConfirmTicket = (movieDuration, scheduleId) => {
    setSelectScheduleId(scheduleId);
    setMovieDuration(movieDuration);
    setopenConfirmTicket(true);
  };
  const closeModalConfirmTicket = () => {
    setopenConfirmTicket(() => false);
  };
  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  const getCurrentTime = () => {
    const current = new Date();
    return `${addLeadingZero(current.getHours())}:${addLeadingZero(current.getMinutes())}`;
  };
 
  
  const handleGetSchedulebyId = async () => {
    try {
      const response = await GetSchedulesByMovie(id);
      const data = response.data;

      const convertedData = data.map((item) => ({
        movieId: item.movieId,
        roomName: item.roomName,
        day: addLeadingZero(item.day),
        month: addLeadingZero(item.month),
        year: item.year,
        dayDetails: `${addLeadingZero(item.day)}/${addLeadingZero(
          item.month
        )}/${item.year}`,
        date: item.date,
        listTimeinSchedules: item.listTimeinSchedules.map((schedule) => ({
          timeDt: schedule.timeDt,
          emptySeat: schedule.emptySeat,
          id: schedule.id,
        })),
      }));

      setDayofWeek(convertedData);
    } catch (error) {
      console.error("Lỗi Trong Quá Trình Lấy Dữ liệu", error);
    }
  };
  const premiereDate = new Date(allmovie.premiereDate);

  const day = premiereDate.getDate().toString().padStart(2, "0");
  const month = (premiereDate.getMonth() + 1).toString().padStart(2, "0");
  const year = premiereDate.getFullYear();

  const formattedPremiereDate = `${day}/${month}/${year}`;
  useEffect(() => {
    if (allmovie.movieTypeId) {
      const getMovieByTypeId = async () => {
        try {
          const res = await GetMovieByTypeId(allmovie.movieTypeId);
          if (res && res.data) {
            const filteredMovies = res.data.filter(movie => movie.id !== allmovie.id);
            setMovieTypeId(filteredMovies);
          }
        } catch (error) {
          console.error("Lỗi trong quá trình lấy dữ liệu thể loại phim:", error);
        }
      };

      getMovieByTypeId();
    }
  }, [allmovie.movieTypeId]);
  useEffect(() => {
    window.scrollTo(0, 0);
    handleGetSchedulebyId();
  }, []);
  return (
    <>
      <div className="xl:min-w-[1150px] lg:min-w-[950px] md:min-w-[730px] mx-auto px-[15px] md:px-[388.50px] ">
        <h3 className="my-[20px] mx-0 text-[23px] leading-[1.5em] fonta">
          Trang chủ &gt;{" "}
          <span className="!text-[#03599d] text-[23px] leading-[1.5em] fonta">
            {allmovie.name}
          </span>
        </h3>
        <div className="mx-[-15px]">
          <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
            <div className="relative">
              <img
                className="block max-w-[100%] h-[auto] rounded-[20px] w-[100%] align-middle border-0"
                alt=""
                src={allmovie.image}
              />
              {allmovie.rateCode === "T18" && (
                <span className="absolute top-[10px] left-[10px] ">
                  <img
                    src={require(`../../assets/images/T18.png`)}
                    className="block max-w-[100%] h-[auto]"
                    alt=""
                  />
                </span>
              )}
              {allmovie.rateCode === "T16" && (
                <span className="absolute top-[10px] left-[10px] ">
                  <img
                    src={require(`../../assets/images/T16.png`)}
                    className="block max-w-[100%] h-[auto]"
                    alt=""
                  />
                </span>
              )}
              {allmovie.rateCode === "T13" && (
                <span className="absolute top-[10px] left-[10px] ">
                  <img
                    src={require(`../../assets/images/T13.png`)}
                    className="block max-w-[100%] h-[auto]"
                    alt=""
                  />
                </span>
              )}
              {allmovie.rateCode === "P" && (
                <span className="absolute top-[10px] left-[10px] ">
                  <img
                    src={require(`../../assets/images/P.png`)}
                    className="block max-w-[100%] h-[auto]"
                    alt=""
                  />
                </span>
              )}
            </div>
          </div>
          <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px] sm:pt-[15px]">
            <h1 className="m-0 mb-[15px] text-[33px] fonta !font-[500]">
              {allmovie.name}
            </h1>

            <p className="mb-[15px] text-base fontsan text-justify text-[#333333] tracking-tight text-opacity-70">
              {allmovie.description}
            </p>

            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Đạo diễn: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {allmovie.director}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Diễn viên: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {allmovie.caster}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Thể loại: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {allmovie.movieTypeName}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Thời lượng: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {allmovie.movieDuration} phút
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Ngôn ngữ: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {allmovie.language}
              </div>
            </div>
            <div className="mx-[-15px] text-lg fontsan sm:text-[14px]">
              <div className="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                <span className="font-bold uppercase">Ngày khởi chiếu: </span>
              </div>
              <div className="xl:w-[75%] xl:float-left lg:w-[75%] lg:float-left md:w-[75%] md:float-left sm:w-[62.5%] sm:float-left relative min-h-[1px] px-[15px]">
                {formattedPremiereDate}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[-15px]">
          <div className="lg:w-[100%] lg:float-left  relative min-h-[1px] px-[15px] tab-style-1 mb-[35px] fonta ">
            <ul className="tf navtab pb-[1px] text-[14px] border-b border-[#ddd] mb-[10px] mx-[1%] flex ">
              {dayofWeek &&
                dayofWeek.map((item, index) => (
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
                      className=" py-0 !px-[10px] text-center text-[18px] relative block"
                      id={index}
                    >
                      <span
                        className="md:!text-[38px] sm:!text-[30px]"
                        value={selectedDay}
                      >
                        {item.day}
                      </span>
                      /{item.month} - {item.date}
                    </a>
                  </li>
                ))}
            </ul>
            <div className="py-[15px] px-0" id="tab-content">
              <div className="tab-pane fade in active">
                <div className="mx-[-15px]">
                  <div className="lg:w-[100%] col-sm-16 sm:w-[100%] relative min-h-[1px] px-[15px] my-[10px]">
                    <span className="text-lg font-bold uppercase">
                      2D Phụ đề
                    </span>
                  </div>

                  <div className="flex">
                    {dayofWeek.length > 0 &&
                      dayofWeek[activeIndex]?.listTimeinSchedules &&
                      dayofWeek[activeIndex].listTimeinSchedules
                      .map((seat) => (
                        <div
                          key={seat.id}
                          className="xl:w-[12.5%] lg:w-[12.5%]  md:w-[18.75%]  sm:w-[31.25%]  text-center relative min-h-[1px] px-[15px]"
                        >
                          <a
                            className="btn default w-[100%]"
                            onClick={() =>
                              viewConfirmTicket(seat.timeDt, seat.id)
                            }
                            value={selectedMovieDuration}
                          >
                            {seat.timeDt}
                          </a>
                          <div className="text-[11px] !pt-[5px] opacity-75">
                            {seat.emptySeat} ghế trống
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
      <div className="xl:min-w-[1150px] lg:min-w-[950px] md:min-w-[730px] mx-auto px-[15px] md:px-[388.50px] ">
        <h3 className="my-[20px] mx-0 text-[23px] leading-[1.5em] fonta">
          
        </h3>
        <div className="mx-[-15px]">
          <div className="lg:w-[100%] lg:float-left  relative min-h-[1px] px-[15px] tab-style-1 mb-[35px] fonta ">
            <h3 className="my-[20px] mx-0 text-[23px] leading-[1.5em] fonta">
              Phim Có Cùng Thể Loại {" "}
              <span className="text-[23px] leading-[1.5em] fonta">
              </span>
            </h3>
            <div className="t-ct py-[15px] px-[0px]">
            <div className="t-p fade">
              <div className="md:mx-[-15px]">
                {movieTypeId.map((film) => (
                  <ContentFilms key={film.id} {...film} />
                ))}
              </div>
            </div>
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
                src={`https://www.youtube.com/embed/${allmovie.trailer}&amp;showinfo=0&amp;autoplay=1`}
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
      <Modal
        title={null}
        open={openConfirmTicket}
        onCancel={closeModalConfirmTicket}
        footer={null}
        className="!w-[850px] max-w-[100%] text-left align-middle overflow-auto h-[600px] fontos"
      >
        <div
          id="datve-pop-up"
          className="fancybox-content inline-block !w-[800px] max-h-[100%]"
        >
          <button
            data-fancybox-close=""
            class="fancybox-close-small"
            title="Close"
          >
            <svg viewBox="0 0 32 32">
              <path d="M10,10 L22,22 M22,10 L10,22"></path>
            </svg>
          </button>
          <div className="p-0 overflow-x-hidden bg-[inherit] relative">
            <div className="p-[15px] border-b border-[#e5e5e5] min-h-[16.42857143px]">
              <h3 className="fontos leading-[1.5em] !text-[23px] font-[400] text-[inherit]">
                BẠN ĐANG ĐẶT VÉ XEM PHIM
              </h3>
            </div>
            <div class="relative p-[15px]">
              <h1
                class="!text-[#03599d] text-center !text-[33px] font-[400] mr-[15px] mt-[20px] mb-[10px] leading-[1.5em] border-b border-[#f4f4f4] pb-0"
                id="tenphim-datve"
              >
                {allmovie.name}
              </h1>
              <table className="table w-[100%] max-w-[100%] mr-[20px] mb-[20px] border-collapse table-striped table-hover">
                <thead>
                  <tr>
                    <th className="text-center w-[30%]">
                      <h4 className="my-[10px] font-[300] leading-[1.5em] !text-[17px]">
                        Rạp chiếu
                      </h4>
                    </th>
                    <th className="text-center w-[30%]">
                      <h4 className="my-[10px] font-[300] leading-[1.5em] !text-[17px]">
                        Ngày chiếu
                      </h4>
                    </th>
                    <th className="text-center w-[30%]">
                      <h4 className="my-[10px] font-[300] leading-[1.5em] !text-[17px]">
                        Giờ chiếu
                      </h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-center text-[23px] font-[600] ">
                      <h3 className="leading-[1.5em] mt-[20px] mb-[10px]">
                        <span id="rap">
                          <span class="font-[500]">
                            {selectcinema || "Beta Giải Phóng"}
                          </span>
                        </span>
                      </h3>
                    </td>
                    <td class="text-center text-[23px] font-[600]">
                      <h3 className="leading-[1.5em] mt-[20px] mb-[10px]">
                        <span id="ngaychieu">
                          <span class="font-[500]">
                            {selectedDay ||
                              (dayofWeek.length > 0 && dayofWeek[0].dayDetails)}
                          </span>
                        </span>
                      </h3>
                    </td>
                    <td class="text-center text-[23px] font-[600]">
                      <h3 className="leading-[1.5em] mt-[20px] mb-[10px]">
                        <span id="giochieu">
                          <span class="font-[500]">
                            {selectedMovieDuration}
                          </span>
                        </span>
                      </h3>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <div className="text-center pb-[30px] ml-[340px]">
                {accessTokens ? (
                  <Link
                    to={`/room/${id}/${
                      allmovie.name
                    }/${selectScheduleId}/${selectedMovieDuration}/${encodeURIComponent(
                      selectedDay ||
                        (dayofWeek.length > 0 && dayofWeek[0].dayDetails)
                    )}`}
                  >
                    <a
                      href=""
                      className="fontoswa relative block btn1 btn1-2 btn1-mua-ve2 fancybox-fast-view !py-[10px] px-[40px] min-h-[40px] max-w-[119.78px]"
                    >
                      <span>
                        <i
                          className="fa fa-ticket !text-[70px] absolute left-[-10px] opacity-[0.5] text-[#fff] leading-[14px]"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="text-[14px]">ĐỒNG Ý</span>
                    </a>
                  </Link>
                ) : (
                  <Link to="/loginandSignin">
                    <a
                      href=""
                      className="fontoswa relative block btn1 btn1-2 btn1-mua-ve2 fancybox-fast-view !py-[10px] px-[40px] min-h-[40px] max-w-[119.78px]"
                    >
                      <span>
                        <i
                          className="fa fa-ticket !text-[70px] absolute left-[-10px] opacity-[0.5] text-[#fff] leading-[14px]"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span className="text-[14px]">ĐỒNG Ý</span>
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@400&display=swap");
          .fonta {
            font-family: "Oswald", sans-serif;
            font-weight: 400;
          }
          .fontos {
            font-family: Oswald !important;
          }
          .fontoswa {
            font-family: Oswald;
          }
          .fontsan {
            font-family: "Source Sans 3", sans-serif;
          }
          .btn1 {
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            text-transform: uppercase;
            border-width: 0;
            outline: none !important;
            margin-bottom: 0;
            font-weight: normal;
            vertical-align: middle;
            touch-action: manipulation;
            border: 1px solid transparent;
            white-space: nowrap;
            line-height: 1.42857143;
            user-select: none;
          }
          .btn1-mua-ve2 {
            font-size: large;
            border-radius: 4px !important;
          }
          .btn1-2 {
            background-image: linear-gradient(
              to right,
              #0a64a7 0%,
              #258dcf 51%,
              #3db1f3 100%
            ) !important;
            color: #fff;
          }
          .btn1:hover {
            background-position: right center;
            filter: none;
            text-shadow: none;
            box-shadow: none;
            text-decoration: none;
          }
          .btn1-2,
          .btn1-2:hover {
            background-image: linear-gradient(
              to right,
              #0a64a7 0%,
              #258dcf 51%,
              #3db1f3 100%
            ) !important;
            color: #fff;
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
