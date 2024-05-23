/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */

import { useEffect, useState, useRef,useContext } from "react";
import YouTube from "react-youtube";
import {
  GetMovieById,
  GetSchedulesForAllDays,
  GetScheduleDayListHours,
  GetMovieUnreference,
} from "../../services/controller/StaffController";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { PassingData } from "../../App";

/* eslint-disable jsx-a11y/alt-text */
const ScheduleByCinema = () => {
  const selectcinema = useContext(PassingData);
  const [dayofWeek, setDayofWeek] = useState([]);
  const navigate = useNavigate();
  const [selectedListMovie, setSelectedListMovie] = useState("");
  const [allDays, setAllDays] = useState([]);
  const accessTokens = localStorage.getItem('accesstokens');
  const [openYoutube, setOpenYoutube] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMovie, setSelectedMovie] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [movieUnref, setMovieUnref] = useState([]);
  const [openConfirmTicket, setopenConfirmTicket] = useState(() => false);
  const youtubeRef = useRef(null);
  const [selectScheduleId,setSelectScheduleId] = useState('');
  const [trailerInfo, setTrailerInfo] = useState("");
  const [nameInfo, setNameInfo] = useState("");
  const [selectedMovieDuration, setMovieDuration] = useState("");
  const [movieName,setMovieName] = useState("");
  const [movieId,setMovieId] = useState("");
  const getMovieUnreference = async () => {
    let res = await GetMovieUnreference();
    if (res && res.data) {
      setMovieUnref(res.data);
    }
  };
  const closeModalConfirmTicket = () => {
    setopenConfirmTicket(() => false);
  };
  const viewConfirmTicket = (movieDuration,scheduleId,name,movieId) => {
    setSelectScheduleId(scheduleId);
    setMovieDuration(movieDuration);
    setMovieName(name);
    setMovieId(movieId);
    setopenConfirmTicket(true);
  };
  function ConverDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
  const convertTimeFormat = (timeString) => {
    const timeParts = timeString.split("T")[1].split(":");
    const hour = timeParts[0];
    const minute = timeParts[1];

    const newTimeFormat = `${hour}:${minute}`;

    return newTimeFormat;
  };
  const handleOnClick = async (i, e) => {
    e.preventDefault();
    setActiveIndex(i);
    const selectedDayDetails = allDays[i].dayDetails;
    setSelectedDay(selectedDayDetails);
    setSelectedMovie(null);
    setSelectedListMovie(null);
    await getScheduleDayListHours(selectedDayDetails);
  };
  const viewTrailer = (name, trailer) => {
    setTrailerInfo(trailer);
    setNameInfo(name);
    setOpenYoutube(true);
  };
  const handleX = () => {
    setOpenYoutube(false);
    setTrailerInfo("");
    setNameInfo("");
    if (youtubeRef.current) {
      youtubeRef.current.internalPlayer.pauseVideo();
    }
  };
  useEffect(() => {
    if (!accessTokens) {
      navigate('/loginandSignin');
    }
  }, [accessTokens, navigate]);
  const opts = {
    height: "377",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  const getAllDays = async () => {
    const res = await GetSchedulesForAllDays();
    if (res && res.data) {
      setAllDays(res.data);
      if (res.data.length > 0 && !selectedDay) {
        const firstDayDetails = res.data[0].dayDetails;
        setActiveIndex(0);
        setSelectedDay(firstDayDetails);
        getScheduleDayListHours(firstDayDetails);
      }
    }
  };
  const getMovieDetails = async (movieId, isListMovie) => {
    const res = await GetMovieById(movieId);
    if (res && res.data) {
      if (isListMovie) {
        setSelectedListMovie(res.data);
      } else {
        setSelectedMovie(res.data);
      }
    }
  };

  const getScheduleDayListHours = async (day) => {
    const res = await GetScheduleDayListHours(day);
    if (res && res.data && res.data.length > 0) {
      const firstMovieId = res.data[0]?.movieId;
      const movieIds = res.data.map((item) => item.movieId).slice(1);

      if (firstMovieId) {
        await getMovieDetails(firstMovieId, false);
      }

      if (movieIds.length > 0) {
        await Promise.all(
          movieIds.map((movieId) => getMovieDetails(movieId, true))
        );
      }
    }
  };
  const formatDate = (inputDate) => {
    const [datePart, timePart] = inputDate.split("T");
    const [year, month, day] = datePart.split("-");

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };
  useEffect(() => {
    getAllDays();
    getMovieUnreference();
  }, []);
  useEffect(() => {
    if (selectedDay) {
      getScheduleDayListHours(selectedDay);
    }
  }, [selectedDay]);

  return (
    <>
      <div class="xl:min-w-[1150px] lg:min-w-[950px] md:min-w-[730px] mx-auto px-[15px] md:px-[388.50px] fonta">
        <div class="mb-[35px] mt-3">
          <ul className="nav nav-tabs dayofweek mb-[10px] mx-[1%] flex">
            {allDays &&
              allDays.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => handleOnClick(index, e)}
                  className={activeIndex === index ? "active" : " "}
                >
                  <a
                    href="#"
                    className="dayofweek py-0 !px-[10px] text-center text-[18px] relative block"
                    id={index}
                  >
                    <span className="md:!text-[38px] sm:!text-[30px]">
                      {item.day}
                    </span>
                    /{item.month} - {item.date}
                  </a>
                </li>
              ))}
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade in active">
              <div class="content-page">
                {selectedMovie && selectedMovie.schedules.length > 0 && (
                  <div class="row !mx-0 !mb-[40px]">
                    <div class="xl:w-[31.25%] xl:float-left lg:w-[31.25%] lg:float-left md:w-[31.25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] px-[15px]">
                      <div class="p-item product-item padding-xs margin-xs padding-sm margin-sm">
                        <div class="pi-img-wr">
                          {selectedMovie.rateCode === "T18" && (
                            <span className="absolute top-[10px] left-[10px] ">
                              <img
                                src={require(`../../assets/images/T18.png`)}
                                className="block max-w-[100%] h-[auto]"
                                alt=""
                              />
                            </span>
                          )}
                          {selectedMovie.rateCode === "T16" && (
                            <span className="absolute top-[10px] left-[10px] ">
                              <img
                                src={require(`../../assets/images/T16.png`)}
                                className="block max-w-[100%] h-[auto]"
                                alt=""
                              />
                            </span>
                          )}
                          {selectedMovie.rateCode === "T13" && (
                            <span className="absolute top-[10px] left-[10px] ">
                              <img
                                src={require(`../../assets/images/T13.png`)}
                                className="block max-w-[100%] h-[auto]"
                                alt=""
                              />
                            </span>
                          )}
                          {selectedMovie.rateCode === "P" && (
                            <span className="absolute top-[10px] left-[10px] ">
                              <img
                                src={require(`../../assets/images/P.png`)}
                                className="block max-w-[100%] h-[auto]"
                                alt=""
                              />
                            </span>
                          )}
                          <img
                            class="img-responsive border-radius-20"
                            alt=""
                            src={selectedMovie.image}
                          />
                          <div className="rounded-[20px]">
                            <a
                              href="#"
                              onClick={() =>
                                viewTrailer(
                                  selectedMovie.name,
                                  selectedMovie.trailer
                                )
                              }
                              class="fancybox-fast-view"
                            >
                              <i
                                className="fpl fa fa-play-circle text-[#fff] !text-[55px] absolute top-[50%] !w-[47px] h-[47px] rounded-[47px] left-[41%] m-0 inline-block leading-[14px] text-center"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-[68.75%] xl:float-left lg:w-[68.75%] lg:float-left md:w-[68.75%] md:float-left sm:w-[62.5] sm:float-left relative min-h-[1px] px-[15px]">
                      <div class="row">
                        <h1 class="m-0 p-0">
                          <Link to={`/detailsFilm/${selectedMovie.id}`}>
                            <a className="text-[#03599D] !font-medium hover:text-red-500 hover:underline">
                              {selectedMovie.name}
                            </a>
                          </Link>
                        </h1>
                        <ul class="blog-info">
                          <li>
                            <i class="fa fa-tags"></i>
                            {selectedMovie.movieTypeName}
                          </li>
                          <li>
                            <i class="fa fa-clock-o"></i>
                            {selectedMovie.movieDuration} phút
                          </li>
                        </ul>
                      </div>
                      <div class="row">
                        <div
                          class="lg:w-[100%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px] my-[10px]"
                          style={{ paddingLeft: "unset" }}
                        >
                          <span className="!text-[18px] !font-[600] !uppercase">
                            2D Phụ đề
                          </span>
                        </div>
                        {selectedMovie.schedules.map((schedule, index) => {
                          const scheduleDate = new Date(schedule.startAt);
                          const selectedDate = new Date(selectedDay);

                          if (
                            scheduleDate.getDate() === selectedDate.getDate() &&
                            scheduleDate.getMonth() ===
                              selectedDate.getMonth() &&
                            scheduleDate.getFullYear() ===
                              selectedDate.getFullYear()
                          ) {
                            return (
                              <div
                                style={{ paddingLeft: "unset" }}
                                className="xl:w-[12.5%] xl:float-left lg:w-[12.5%] lg:float-left md:w-[12.5%] md:float-left sm:w-[43.75%] sm:float-left sm:mb-[10px]  text-center mt-3 !mr-[10px]"
                                key={index}
                              >
                                <div>
                                  <a
                                    onClick={() => viewConfirmTicket(convertTimeFormat(schedule.startAt),schedule.id,schedule.movieName,selectedMovie.id)}
                                    className="w-[100%] btn default show-in fancybox-fast-view hover:!bg-[#d3d3d3] hover:!text-red-500 cursor-pointer"
                                   
                                  >
                                    {convertTimeFormat(schedule.startAt)}
                                  </a>
                                  <div class="text-[13px] pt-[5px]">
                                    {schedule.emptySeat} ghế trống
                                  </div>
                                </div>
                              </div>
                            );
                          } else {
                            return null;
                          }
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {selectedListMovie &&
                  selectedListMovie.schedules.length > 0 && (
                    <div class="row !mx-0 padding-xs">
                      <div class="lg:w-[50%] lg:float-left md:w-[100%] md:float-left col-b col-b-xs col-b-sm padding-xs-left padding-xs-right padding-sm-left padding-sm-right  relative min-h-[1px] px-[15px]">
                        <div class="xl:w-[56.42%] xl:float-left lg:w-[68.75%] lg:float-left md:w-[31.25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] ">
                          <div class="p-item product-item p-0">
                            <div class="pi-img-wr">
                              {selectedListMovie.rateCode === "T18" && (
                                <span className="absolute top-[10px] left-[10px] ">
                                  <img
                                    src={require(`../../assets/images/T18.png`)}
                                    className="block max-w-[100%] h-[auto]"
                                    alt=""
                                  />
                                </span>
                              )}
                              {selectedListMovie.rateCode === "T16" && (
                                <span className="absolute top-[10px] left-[10px] ">
                                  <img
                                    src={require(`../../assets/images/T16.png`)}
                                    className="block max-w-[100%] h-[auto]"
                                    alt=""
                                  />
                                </span>
                              )}
                              {selectedListMovie.rateCode === "T13" && (
                                <span className="absolute top-[10px] left-[10px] ">
                                  <img
                                    src={require(`../../assets/images/T13.png`)}
                                    className="block max-w-[100%] h-[auto]"
                                    alt=""
                                  />
                                </span>
                              )}
                              {selectedListMovie.rateCode === "P" && (
                                <span className="absolute top-[10px] left-[10px] ">
                                  <img
                                    src={require(`../../assets/images/P.png`)}
                                    className="block max-w-[100%] h-[auto]"
                                    alt=""
                                  />
                                </span>
                              )}
                              <img
                                class="img-responsive border-radius-20"
                                alt=""
                                src={selectedListMovie.image}
                              />
                              <div class="rounded-[20px]">
                                <a
                                  href="#trailer-pop-up"
                                  onClick={() =>
                                    viewTrailer(
                                      selectedListMovie.name,
                                      selectedListMovie.trailer
                                    )
                                  }
                                  class="fancybox-fast-view"
                                >
                                  <i
                                    className="fpl fa fa-play-circle text-[#fff] !text-[55px] absolute top-[50%] !w-[47px] h-[47px] rounded-[47px] left-[41%] m-0 inline-block leading-[14px] text-center"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="xl:w-[43.58%] xl:float-left lg:w-[31.25%] lg:float-left md:w-[31.25%] md:float-left sm:w-[37.5%] sm:float-left relative min-h-[1px] ">
                          <div class="row">
                            <h2 className="m-0 p-0">
                              <Link to={`/detailsFilm/${selectedListMovie.id}`}>
                                <a className="!text-[#03599d] !font-medium  hover:underline">
                                  {selectedListMovie.name}
                                </a>
                              </Link>
                            </h2>
                            <ul className="blog-info">
                              <li>
                                <i class="fa fa-tags"></i>
                                {selectedListMovie.movieTypeName}
                              </li>
                              <li>
                                <i class="fa fa-clock-o"></i>
                                {selectedListMovie.movieDuration} phút
                              </li>
                            </ul>
                            <div
                              style={{ paddingLeft: "unset" }}
                              className="lg:w-[100%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px] my-[10px]"
                            >
                              <span className="!text-[18px] !font-bold !uppercase">
                                2D Phụ đề
                              </span>
                            </div>
                            {selectedListMovie.schedules.map(
                              (schedule, index) => {
                                const scheduleDate = new Date(schedule.startAt);
                                const selectedDate = new Date(selectedDay);

                                if (
                                  scheduleDate.getDate() ===
                                    selectedDate.getDate() &&
                                  scheduleDate.getMonth() ===
                                    selectedDate.getMonth() &&
                                  scheduleDate.getFullYear() ===
                                    selectedDate.getFullYear()
                                ) {
                                  return (
                                    <div
                                      key={index}
                                      style={{ paddingLeft: "unset" }}
                                      className="xl:w-[30.5%] xl:float-left lg:w-[12.5%] lg:float-left md:w-[12.5%] md:float-left sm:w-[43.75%] sm:float-left sm:mb-[10px]  text-center mt-3 !mr-[10px] "
                                    >
                                      <a
                                        className="w-[100%] btn default show-in fancybox-fast-view hover:!bg-[#d3d3d3] hover:!text-red-500 cursor-pointer"
                                        onClick={() => viewConfirmTicket(convertTimeFormat(schedule.startAt),schedule.id,schedule.movieName,selectedListMovie.id)}
                                      >
                                        {convertTimeFormat(schedule.startAt)}
                                      </a>
                                      <div class="text-[13px] pt-[5px]">
                                        {schedule.emptySeat} ghế trống
                                      </div>
                                    </div>
                                  );
                                } else {
                                  return null;
                                }
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative p-0 overflow-hidden bg-[#3c3e4d] md:px-[390px]">
        <div className="xl:min-w-[1150px] lg:min-w-[950px] md:min-w-[730px]  px-[15px]">
          <div className="text-center !mt-[20px]">
            <ul class="nav tab-films inline-block mb-[30px] pl-0">
              <li class="active">
                <a data-toggle="tab" className="p-0">
                  <h1 className="!font-[700] text-[#fff] text-[33px] fonta mt-[20px] mb-[10px] mx-0 bbtf">
                    PHIM SẮP CHIẾU
                  </h1>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[100%] relative p-0 overflow-hidden bg-[#3c3e4d] md:px-[390px]">
        <div className="mx-[-15px] mb-[20px] flex w-[100%] ml-[85px]">
          {movieUnref &&
            movieUnref.map((item, index) => (
              <div
                key={index}
                className="lg:w-[25%] lg:float-left  !mb-[35px] relative min-h-[1px]  border-white"
              >
                <div aria-live="polite" className="slick-list draggable py-0 ">
                  <div class="slick-track opacity-100 w-[200px]" role="listbox">
                    <div
                      class="carousel-item slick-slide slick-current slick-center w-[200px]"
                      data-slick-index="0"
                      aria-hidden="true"
                      tabindex="-1"
                      aria-describedby="slick-slide00"
                    >
                      <div class="carousel-thumb">
                        <a href="/">
                          <img src={item.image} class="img-responsive" alt="" />
                        </a>
                      </div>
                      <div class="bg-white">
                        <h3 class="carousel-title">
                          <Link to={`/detailsFilm/${item.id}`}>
                            <a className="text-black hover:underline text-[20px] font-[600] text-center">
                              {item.name}
                            </a>
                          </Link>
                        </h3>
                        <h4 class="font-family-san m-0 text-black text-[15px] text-center">
                          {item.movieTypeName}
                        </h4>
                        <span class="fonta text-[20px]  text-[#39599D] text-center pl-[50px]">
                          {formatDate(item.premiereDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Modal
        title={null}
        open={openYoutube}
        onCancel={handleX}
        footer={null}
        className="!w-[700px] max-w-[100%] text-left align-middle overflow-auto "
      >
        <div className="p-0 overflow-x-hidden bg-[inherit] relative">
          <div className="p-[15px] border-b border-[#e5e5e5] min-h-[16.42857143px]">
            <h3 className="fontos leading-[1.5em] text-[23px] font-[300] text-[inherit]">
              TRAILER - <span>{nameInfo}</span>
            </h3>
          </div>
          <div className="relative p-[15px] pb-[20px] text-center">
            <YouTube videoId={trailerInfo} opts={opts} ref={youtubeRef} />
          </div>
        </div>
      </Modal>
      <Modal
        title={null}
        open={openConfirmTicket}
        onCancel={closeModalConfirmTicket}
        footer={null}
        className="!w-[830px] max-w-[100%] text-left align-middle overflow-auto h-[700px] fontos"
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
                class="!text-[#03599d] text-center !text-[33px] font-[400] mt-[20px] mb-[10px] leading-[1.5em] border-b border-[#f4f4f4] pb-0"
                id="tenphim-datve"
              >
                {movieName}
              </h1>
              <table className="table w-[100%] max-w-[100%] mb-[20px] border-collapse table-striped table-hover">
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
                          <span class="font-[500]">{selectcinema || 'Beta Giải Phóng'}</span>
                        </span>
                      </h3>
                    </td>
                    <td class="text-center text-[23px] font-[600]">
                      <h3 className="leading-[1.5em] mt-[20px] mb-[10px]">
                        <span id="ngaychieu">
                          <span class="font-[500]">
                            {ConverDate(selectedDay) || (dayofWeek.length > 0 && dayofWeek[0].dayDetails)} 
                          </span>
                        </span>
                      </h3>
                    </td>
                    <td class="text-center text-[23px] font-[600]">
                      <h3 className="leading-[1.5em] mt-[20px] mb-[10px]">
                        <span id="giochieu">
                          <span class="font-[500]">{selectedMovieDuration}</span>
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
                    to={`/room/${movieId}/${movieName}/${selectScheduleId}/${selectedMovieDuration}/${encodeURIComponent(ConverDate(selectedDay) || (dayofWeek.length > 0 && dayofWeek[0].dayDetails))}`}
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
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Source+Sans+3&display=swap");

          .fonta,
          .fontos {
            font-family: "Oswald", sans-serif;
            font-weight: 400;
          }
          .fpl {
            transition: all 0.6s ease;
            text-rendering: auto;
            transform: translate(0, 0);
          }
          .pi-img-wr {
            position: relative;
            width: 100%;
            overflow: hidden;
          }

          .pi-img-wr img {
            width: 100%;
            height: auto;
            display: block;
          }
          .pi-img-wr div {
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            left: 0;
            top: 0;
            display: none;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .p-item:hover > .pi-img-wr > div {
            display: block;
          }
          .btn.default {
            color: #333333;
            background-color: #e5e5e5;
          }
          .tab-films > li.active {
            border-bottom: 4px solid transparent;
            border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
            border-image-slice: 1;
            border-width: 0px 0px 4px 0px;
          }
          <style > .nav > li {
            position: relative;
            display: block;
          }
          .content-page a,
          .sidebar2 a {
            font-weight: bold;
          }
          .show-in {
            font-family: Source Sans 3 !important;
            font-size: 16px;
          }
          .blog-info,
          .content-page p,
          .content-page .list-unstyled {
            font-family: Source Sans 3 !important;
          }
          .row:before {
            content: " ";
            display: table;
            clear: both;
          }
          .row:after {
            content: " ";
            display: table;
          }
          .btn {
            flex: 1 1 auto;
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            text-transform: uppercase;
            border-radius: 10px;
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
          .col-b {
            border-top: 1px solid #ccc;
            padding: 35px 10px;
            min-height: 505px;
          }
          @media (min-width: 768px) {
            .col-b-sm {
              min-height: auto !important;
              float: left;
            }
          }
          @media (min-width: 768px) {
            .padding-sm-right {
              padding-right: 0px !important;
            }
          }
          @media (min-width: 768px) {
            .padding-sm-left {
              padding-left: 0px !important;
            }
          }
          .col-b:after {
            border-bottom: unset !important;
          }
          h2 {
            font-size: 27px;
          }
          .col-b:after {
            content: " ";
            display: block;
            width: 100%;
            position: absolute;
            bottom: -1px;
            border-bottom: 1px solid #ccc;
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
            display: inline-block;
            width: 1.25em;
            text-align: center;
          }
          .blog-info li {
            padding: 0;
            color: #555;
            font-size: 18px;
            margin-right: 10px;
            display: inline-block;
          }
          .blog-info li i {
            color: #337ab7;
          }
          .blog-info {
            list-style: none;
            margin: 0px 0 12px 0;
            padding-left: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          .h1,
          .h2,
          .h3,
          .h4,
          .h5,
          .h6 {
            font-family: Oswald !important;
            line-height: 1.5em;
          }
          h1 {
            font-size: 33px;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 300;
          }
          .pi-img-wrapper {
            position: relative;
          }
          .tab-content {
            padding: 15px 0px;
          }
          .tab-content > .active {
            display: block;
          }
          .product-item {
            padding: 0px 30px;
            position: relative;
          }
          @media (min-width: 768px) {
            .margin-sm {
              margin: 0px !important;
            }
          }
          @media (min-width: 768px) {
            .padding-sm {
              padding: 0px !important;
            }
          }
          .fade.in {
            opacity: 1;
          }
          .content-page {
            padding: 0 0 20px;
          }
          .content-page {
            padding-left: 20px;
            margin-right: 10px;
          }
          .row {
            margin-left: -15px;
            margin-right: -15px;
          }
          .fade {
            opacity: 0;
            -webkit-transition: opacity 0.15s linear;
            -o-transition: opacity 0.15s linear;
            transition: opacity 0.15s linear;
          }
          .nav-tabs {
            border-color: #ccc;
            padding-bottom: 1px;
            font-size: 14px;
            border-bottom: 1px solid #ddd;
          }
          .nav-tabs > li.active > a.dayofweek:after {
            width: 100%;
            height: 0;
            content: " ";
            display: block !important;
            position: absolute;
            border: 3px solid #055ca0;
            border-top: 0px;
            bottom: 0px;
            left: 0px;
          }
          .nav-tabs > li.active > a:after {
            width: 0;
            height: 0;
            content: " ";
            display: block !important;
            position: absolute;
            border-top: 8px solid red;
            border-right: 8px solid transparent;
            border-left: 8px solid transparent;
            bottom: -8px;
            left: 45%;
          }
          ul {
            display: block;
            list-style-type: disc;
            margin-block-start: 1em;
            margin-block-end: 1em;
            margin-inline-start: 0px;
            margin-inline-end: 0px;
            padding-inline-start: 40px;
            unicode-bidi: isolate;
          }
          ul,
          ol {
            margin-top: 0;
          }
          .nav {
            padding-left: 0;
            list-style: none;
          }
          .dayofweek li {
            width: 14.285%;
          }
          .nav-tabs > li {
            display: flex;
            margin-bottom: -1px;
          }
          .nav > li {
            position: relative;
            display: block;
          }
          .nav-tabs > li.active > a.dayofweek,
          .nav-tabs > li.active > a.dayofweek:hover,
          .nav-tabs > li.active > a.dayofweek:focus {
            background: transparent;
            font-size: large;
            color: #03599d;
          }
          .nav-tabs > li > a.dayofweek,
          .nav-tabs > li > a.dayofweek:hover,
          .nav-tabs > li > a.dayofweek:focus {
            padding: 0px;
            margin: 0px 0px;
            text-align: center;
          }
          .img-responsive,
          .thumbnail > img,
          .thumbnail a > img,
          .carousel-inner > .item > img,
          .carousel-inner > .item > a > img {
            display: block;
            max-width: 100%;
            height: auto;
          }
          .border-radius-20 {
            border-radius: 20px !important;
          }
          img {
            vertical-align: middle;
            border: 0;
          }
          .pi-img-wrapper div {
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            left: 0;
            top: 0;
            display: none;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .fontoswa {
            font-family: Oswald;
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
        `}
      </style>
    </>
  );
};
export default ScheduleByCinema;
