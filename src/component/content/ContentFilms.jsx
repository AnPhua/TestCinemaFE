/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import hot from "../../assets/images/hot.png";
import { useRef, useState, useContext,useEffect } from "react";
import Modal from "antd/es/modal/Modal";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { PassingData } from "../../App";
import c18 from "../../assets/images/T18.png";
import c16 from "../../assets/images/T16.png";
import c13 from "../../assets/images/T13.png";
import cp from "../../assets/images/P.png";
import { useNavigate } from "react-router-dom";
import { GetSchedulesByMovie } from "../../services/controller/StaffController";
const ContentFilms = ({
  id,
  name,
  movieTypeName,
  movieDuration,
  premiereDate,
  isHot,
  isSellTicket,
  image,
  rateCode,
  trailer,
}) => {
  const selectcinema = useContext(PassingData);
  const [activeIndex, setActiveIndex] = useState(0);
  const accessTokens = localStorage.getItem('accesstokens');
  const [dayofWeek, setDayofWeek] = useState([]);
  const [openYoutube, setopenYoutube] = useState(false);
  const [openTicket, setopenTicket] = useState(false);
  const [openConfirmTicket, setopenConfirmTicket] = useState(() => false);
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMovieDuration, setMovieDuration] = useState("");
  const [selectScheduleId,setSelectScheduleId] = useState('');
  const navigate = useNavigate();
  const youtubeRef = useRef(null);
  const handleViewDetails = () => {
    navigate(`/detailsFilm/${id}`);
    window.location.reload(); 
  };
  const formatDate = (inputDate) => {
    const [datePart, timePart] = inputDate.split("T");
    const [year, month, day] = datePart.split("-");

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  };
  const handleOnClick = (i, e) => {
    e.preventDefault();
    setActiveIndex(i);
    const selectedDayDetails = dayofWeek[i].dayDetails;
    setSelectedDay(selectedDayDetails);
  };
  const viewTrailer = () => {
    setopenYoutube(true);
  };
  const viewTicket = async () => {
    setopenTicket(true);
    await handleGetSchedulebyId();
  };
  const closeModalTicket = () => {
    setopenTicket(false);
  };

  const viewConfirmTicket = (movieDuration,scheduleId) => {
    setSelectScheduleId(scheduleId);
    setMovieDuration(movieDuration);
    setopenConfirmTicket(true);
  };
  const closeModalConfirmTicket = () => {
    setopenConfirmTicket(() => false);
  };
  const handleX = () => {
    setopenYoutube(false);
    if (youtubeRef.current) {
      youtubeRef.current.internalPlayer.pauseVideo();
    }
  };
  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };
  const handleGetSchedulebyId = async()=>{
    try {
      const response = await GetSchedulesByMovie(id);
      const data = response.data;

      const convertedData = data.map(item => ({
        movieId: item.movieId,
        roomName: item.roomName,
        day: addLeadingZero(item.day),
        month: addLeadingZero(item.month),
        year: item.year,
        dayDetails: `${addLeadingZero(item.day)}/${addLeadingZero(item.month)}/${item.year}`,
        date: item.date,
        listTimeinSchedules: item.listTimeinSchedules.map(schedule => ({
          timeDt: schedule.timeDt,
          emptySeat: schedule.emptySeat,
          id: schedule.id
        }))
      }));

      setDayofWeek(convertedData);
    } catch (error) {
      console.error('Lỗi Trong Quá Trình Lấy Dữ liệu', error);
    }
  }
  useEffect(() => {
    if (!accessTokens) {
      navigate('/loginandSignin');
    }
  }, [accessTokens, navigate]);
  //const selectedObject = dayofWeek[activeIndex]  || []
  const opts = {
    height: "377",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div className="float-left xl:w-[25%] lg:w-[25%] md:w-[50%] sm:w-[100%]  px-[47.13px] pb-[30px]">
        <div className="md:mx-[-15px]">
          <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] ">
            <div className="p-item relative !p-0">
              <div className="pi-img-wr">
                <img
                  className="block max-w-[100%] h-[auto] rounded-[20px] align-middle"
                  alt=""
                  src={image}
                />
                {rateCode === "T18" && (
                  <span className="absolute top-[10px] left-[10px]">
                    <img
                      alt=""
                      src={c18}
                      className="block max-w-[100%] h-[auto] align-middle"
                    />
                  </span>
                )}

                {rateCode === "T16" && (
                  <span className="absolute top-[10px] left-[10px]">
                    <img
                      alt=""
                      src={c16}
                      className="block max-w-[100%] h-[auto] align-middle"
                    />
                  </span>
                )}

                {rateCode === "T13" && (
                  <span className="absolute top-[10px] left-[10px]">
                    <img
                      alt=""
                      src={c13}
                      className="block max-w-[100%] h-[auto] align-middle"
                    />
                  </span>
                )}

                {rateCode === "P" && (
                  <span className="absolute top-[10px] left-[10px]">
                    <img
                      alt=""
                      src={cp}
                      className="block max-w-[100%] h-[auto] align-middle"
                    />
                  </span>
                )}

                <div className="rounded-[20px]">
                  <a
                    href="#product-pop-up"
                    onClick={() => viewTrailer()}
                    className="fancybox-fast-view"
                  >
                    <i
                      className="fpl fa fa-play-circle text-[#fff] text-[55px] absolute top-[50%] w-[47px] h-[47px] rounded-[47px] left-[41%] m-0 inline-block leading-[14px] text-center"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              {isHot && <div className="st st-new"></div>}
            </div>
          </div>
          <div className="lg:w-[100%] md:w-[100%] sm:w-[100%]">
            <div className="h-[120px] min-h-[120px]">
              {/* <Link to={`/detailsFilm/${id}`}> */}
                <h3
                  className="text-center 
                        sm:text-left  
                        !font-bold 
                        mt-[5px] 
                        sm:font-[18px] 
                        max-h-[30px] 
                        min-h-[30px]
                        fontoswa
                        leading-[1.5em]
                        text-[18px] text-[#337AB7] 
                        hover:underline
                        whitespace-nowrap
                        overflow-hidden
                        text-ellipsis
                        "
                        onClick={handleViewDetails}
                >
                  <a className="cursor-pointer tracking-tighter">{name}</a>
                </h3>
              {/* </Link> */}
              <ul className="list-none pl-0 fontsan md:text-[15px] sm:text-[14px]">
                <li className="max-h-[50px]">
                  <span className="font-bold ">Thể loại:</span> {movieTypeName}
                </li>
                <li className="my-1">
                  <span className="font-bold ">Thời lượng:</span>{" "}
                  {movieDuration} phút
                </li>
                {premiereDate && (
                  <li>
                    <span className="font-bold">Ngày khởi chiếu:</span>
                    <span className="fontoswa !text-[#03599d]">
                      {" "}
                      {formatDate(premiereDate)}
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <div className="text-center pb-[30px] min-h-[85px]">
              {isSellTicket && (
                <a
                  href="#showtimes-pop-up"
                  className="fontoswa relative block btn btn-2 btn-mua-ve2 fancybox-fast-view !py-[5px] !px-[14px]"
                  onClick={() => viewTicket()}
                >
                  <span>
                    <i
                      className="fa fa-ticket text-[70px] absolute left-[-10px] opacity-[0.5] text-[#fff] leading-[14px]"
                      aria-hidden="true"
                    ></i>
                  </span>
                  MUA VÉ
                </a>
              )}
            </div>
          </div>
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
              TRAILER - <span>{name}</span>
            </h3>
          </div>
          <div className="relative p-[15px] pb-[20px] text-center">
            <YouTube videoId={trailer} opts={opts} ref={youtubeRef} />
          </div>
        </div>
      </Modal>
      <Modal
        title={null}
        open={openTicket}
        onCancel={closeModalTicket}
        footer={null}
        className="!w-[1000px] text-left align-middle overflow-auto "
      >
        <div className="p-0 overflow-x-hidden bg-[inherit] relative">
          <div className="p-[15px] border-b border-[#e5e5e5] min-h-[16.42857143px]">
            <h3 className="fontos leading-[1.5em] text-[23px] font-[300] text-[inherit]">
              LỊCH CHIẾU - <span>{name}</span>
            </h3>
          </div>
          <div class="modal-body h-[430px] overflow-y-auto">
            <input
              type="hidden"
              id="hdFilmId"
              value="6a5af641-9ebd-45c8-ac42-0ef6b2e0b285"
            />

            <h1 class="text-center inline-block w-[100%] mt-0 !text-[33px]">
              Rạp <span id="tenrap-showtimes">{selectcinema || 'Beta Giải Phóng'}</span>
            </h1>

            <div class="tab-style-1 !mb-[35px] fontos" id="content-showtimes">
              <div className="">
                <ul className="tf navtab  text-[14px] border-b border-[#ddd] mb-[10px] mx-[1%] flex ">
                  {dayofWeek && dayofWeek.map((item, index) => (
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
                        float: "left",
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
              </div>

              <div className="py-[15px] px-0 " id="tab-content">
                <div className="tab-pane fade in active" id="88">
                  <div className="mx-[-15px]">
                    <div className="lg:w-[100%] col-sm-16 sm:w-[100%] relative min-h-[1px] px-[15px] my-[10px]">
                      <span className="text-lg font-bold uppercase tracking-[-0.05em]">
                        2D Phụ đề
                      </span>
                    </div>

                    <div className="flex">
                    {dayofWeek.length > 0 &&
                      dayofWeek[activeIndex]?.listTimeinSchedules &&
                      dayofWeek[activeIndex].listTimeinSchedules.map((seat) => (
                        <div
                          key={seat.id}
                          className="xl:w-[12.5%] lg:w-[12.5%]  md:w-[18.75%]  sm:w-[31.25%]  text-center relative min-h-[1px] px-[15px]"
                        >
                          <a
                            className="btnticket default w-[100%]"
                            onClick={() => viewConfirmTicket(seat.timeDt,seat.id)}
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
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        title={null}
        open={openConfirmTicket}
        onCancel={closeModalConfirmTicket}
        footer={null}
        className="!w-[800px] max-w-[100%] text-left align-middle overflow-auto h-[650px] fontos"
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
                {name}
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
                            {selectedDay || (dayofWeek.length > 0 && dayofWeek[0].dayDetails)} 
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
              <div className="text-center pb-[30px] ml-[275px]">
                {accessTokens ? (
                  <Link
                    to={`/room/${id}/${name}/${selectScheduleId}/${selectedMovieDuration}/${encodeURIComponent(selectedDay || (dayofWeek.length > 0 && dayofWeek[0].dayDetails))}`}
                  >
                    <a
                      href=""
                      className="fontoswa relative block btn btn-2 btn-mua-ve2 fancybox-fast-view !py-[10px] px-[40px] min-h-[40px] max-w-[119.78px]"
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
                      className="fontoswa relative block btn btn-2 btn-mua-ve2 fancybox-fast-view !py-[10px] px-[40px] min-h-[40px] max-w-[119.78px]"
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
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap");

        .fontsan {
          font-family: "Source Sans 3", sans-serif;
        }
        .fontos {
          font-family: Oswald !important;
        }
        .table-striped > tbody > tr:nth-of-type(odd) {
          background-color: #f9f9f9;
        }
        .modal-footer {
          padding: 15px;
          border-top: 1px solid #e5e5e5;
        }
        tr {
          display: table-row;
          vertical-align: inherit;
          unicode-bidi: isolate;
          border-color: inherit;
        }
        .fancybox-content {
          background: #fff;
          display: inline-block;
          margin: 0 0 6px 0;
          max-width: 100%;
          overflow: auto;
          padding: 0;
          padding: 24px;
          position: relative;
          text-align: left;
          vertical-align: middle;
        }
        .table > thead > tr > th,
        .table > tbody > tr > th,
        .table > tfoot > tr > th,
        .table > thead > tr > td,
        .table > tbody > tr > td,
        .table > tfoot > tr > td {
          padding: 8px;
          line-height: 1.42857143;
          vertical-align: top;
          border-top: 1px solid #ddd;
        }
        .table > thead:first-child > tr:first-child > th {
          border-top: 0;
        }
        .table thead tr th {
          font-size: 14px;
          font-weight: 600;
        }
        .table > thead > tr > th {
          vertical-align: bottom;
          border-bottom: 2px solid #ddd;
        }
        .table > thead > tr > th {
          padding: 8px;
          line-height: 1.42857143;
        }
        .btnticket.default {
          color: #333333;
          background-color: #e5e5e5;
        }
        .btnticket {
          flex: 1 1 auto;
          text-align: center;
          transition: 0.5s;
          background-size: 200% auto;
          color: white;
          /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2); */
          /* box-shadow: 0 0 20px #eee; */
          border-radius: 10px;
        }
        .btnticket {
          text-transform: uppercase;
        }
        .btnticket {
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
        .btnticket {
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
        .btnticket.default:hover,
        .btnticket.default:focus,
        .btnticket.default:active,
        .btnticket.default.active {
          color: #333333;
          background-color: lightgray;
          cursor: pointer;
        }
        .btnticket:hover {
          background-position: right center;
        }
        .st {
          position: absolute;
          top: 0;
          left: 0;
          width: 63px !important;
          height: 63px !important;
        }
        .st-new {
          background: url(${hot}) no-repeat;
          left: auto;
          right: 0;
        }
        .fpl {
          transition: all 0.6s ease;
          text-rendering: auto;
          transform: translate(0, 0);
        }
        .pi-img-wr {
          position: relative;
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

        .fontoswa {
          font-family: Oswald;
        }
        .btn {
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
        .btn-mua-ve2 {
          font-size: large;
          border-radius: 4px !important;
        }
        .btn-2 {
          background-image: linear-gradient(
            to right,
            #0a64a7 0%,
            #258dcf 51%,
            #3db1f3 100%
          ) !important;
          color: #fff;
        }
        .btn:hover {
          background-position: right center;
          filter: none;
          text-shadow: none;
          box-shadow: none;
          text-decoration: none;
        }
        .btn-2,
        .btn-2:hover {
          background-image: linear-gradient(
            to right,
            #0a64a7 0%,
            #258dcf 51%,
            #3db1f3 100%
          ) !important;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default ContentFilms;
