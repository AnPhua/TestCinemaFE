/* eslint-disable jsx-a11y/anchor-is-valid */
import hot from "../../assets/images/hot.png";
import { useRef, useState } from "react";
import Modal from "antd/es/modal/Modal";
import YouTube from 'react-youtube';
import { Link } from "react-router-dom";
const ContentFilms = ({
  id,
  name,
  category,
  time,
  launchDate,
  isHot,
  isSellTicket,
  image,
  ageLimit,
  youtube,
}) => {
  const [open, setOpen] = useState(false);
  const youtubeRef = useRef(null);
  const viewTrailer = () => {
    setOpen(true);
  };

  const handleX = () => {
    setOpen(false);
    if (youtubeRef.current) {
      youtubeRef.current.internalPlayer.pauseVideo();
    }
  };
  const opts = {
    height: '377',
    width: '100%',
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
                  src={require(`../../assets/images/poster/${image}`)}
                />
                {ageLimit && (
                  <span className="absolute  top-[10px]  left-[10px]">
                    <img
                      alt=""
                      src={require(`../../assets/images/${ageLimit}`)}
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
            <Link to={`detailsFilm/${id}`}>
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
              >
                <a className="cursor-pointer">{name}</a>
              </h3>
              </Link>
              <ul className="list-none pl-0 fontsan md:text-[15px] sm:text-[14px]">
                <li className="max-h-[50px]">
                  <span className="font-bold">Thể loại:</span> {category}
                </li>
                <li>
                  <span className="font-bold">Thời lượng:</span> {time} phút
                </li>
                {launchDate && (
                  <li>
                    <span className="font-bold">Ngày khởi chiếu:</span>
                    <span className="fontoswa !text-[#03599d]">
                      {" "}
                      {launchDate}  
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
        open={open}
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
            <YouTube videoId={youtube} opts={opts} ref={youtubeRef}/>
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
