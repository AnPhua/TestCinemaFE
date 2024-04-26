/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext, useRef } from "react";
import seatunselectnormal from "../../assets/images/seat/seat-unselect-normal.png";
import seatsetnormal from "../../assets/images/seat/seat-set-normal.png";
import seatselectnormal from "../../assets/images/seat/seat-select-normal.png";
import seatprocessnormal from "../../assets/images/seat/seat-process-normal.png";
import seatbuynormal from "../../assets/images/seat/seat-buy-normal.png";
import icscreen from "../../assets/images/seat/ic-screen.png";
import seatunselectvip from "../../assets/images/seat/seat-unselect-vip.png";
import seatselectvip from "../../assets/images/seat/seat-select-vip.png";
import seatbuyvip from "../../assets/images/seat/seat-buy-vip.png";
import seatunselectdouble from "../../assets/images/seat/seat-unselect-double.png";
import { useParams } from "react-router-dom";
import { PassingData } from "../../App";
import { useDispatch, useSelector } from "react-redux";
import seatLayoutdata from "../data/datainforforseats";
import {
  updateAmountNOR,
  updateAmountVIP,
  resetState,
} from "../redux/Slice/seatSlice";
import { GetMovieById } from "../../services/controller/StaffController";
const Room = () => {
  const dispatch = useDispatch();
  const [listnameseat, setListNameSeat] = useState("");
  const [allmovie, setallmovie] = useState([]);
  const amountVIP = useSelector((state) => state.seat.amountVIP);
  const amountNOR = useSelector((state) => state.seat.amountNOR);
  const selectcinema = useContext(PassingData);
  const { id, name, seat, day } = useParams();
  const decodedDay = decodeURIComponent(day);
  const [timeLeft, setTimeLeft] = useState("10:00");
  const timerRef = useRef(null);
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
  let ageLimitMessage = "";
  if (allmovie.rateName === "T18") {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 18 tuổi.";
  } else if (allmovie.rateName === "T16") {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 16 tuổi.";
  } else if (allmovie.rateName === "T13") {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 13 tuổi.";
  } else {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này dành cho khán giả ở mọi độ tuổi.";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    setListNameSeat("");
  }, []);
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const [backgroundColor, setBackgroundColor] = useState("rgb(254, 185, 192)");
  const [seatLayout, setSeatLayout] = useState(seatLayoutdata);
  const [limitedScrollPosition, setLimitedScrollPosition] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let timeoutId;

    function handleScroll() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
          setLimitedScrollPosition(currentScrollPosition);
        if (currentScrollPosition <= 200) {
          setLimitedScrollPosition(currentScrollPosition);
        } else {
          setLimitedScrollPosition(200);
        }
      }, 0.0009);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSeatClick = (rowIndex, seatIndex) => {
    const updatedLayout = [...seatLayout];
    const seat = updatedLayout[rowIndex][seatIndex];
    let maxseat = 0;
    updatedLayout.forEach((row) => {
      row.forEach((seat) => {
        if (seat.status.includes("seat-select")) {
          maxseat++;
        }
      });
    });

    if (
      seat.status.includes("seat-empty") &&
      !seat.status.includes("seat-sold")
    ) {
      if (seat.status.includes("seat-select")) {
        updatedLayout[rowIndex][seatIndex].status = "seat-empty seat-used";
        maxseat--;
        const selectedSeats = updatedLayout.flatMap((row) =>
          row
            .filter((seat) => seat.status.includes("seat-select"))
            .map((seat) => seat.name)
        );
        setListNameSeat(selectedSeats.join(", "));
      } else {
        if (maxseat < 8) {
          if (seat.status.includes("seat-normal")) {
            updatedLayout[rowIndex][seatIndex].status =
              "seat-used seat-select seat-normal";
            maxseat++;
            dispatch(updateAmountNOR(1));
            setTotalPrice((prevTotalPrice) => prevTotalPrice + 45000);
          } else if (seat.status.includes("seat-vip")) {
            updatedLayout[rowIndex][seatIndex].status =
              "seat-used seat-select seat-vip";
            maxseat++;
            dispatch(updateAmountVIP(1));
            setTotalPrice((prevTotalPrice) => prevTotalPrice + 50000);
          }
        } else {
          alert("Không được chọn quá 8 ghế");
        }
      }
    } else if (
      seat.status.includes("seat-select") &&
      !seat.status.includes("seat-sold")
    ) {
      if (seat.status.includes("seat-normal")) {
        updatedLayout[rowIndex][seatIndex].status =
          "seat-empty seat-used seat-normal";
        maxseat--;
        dispatch(updateAmountNOR(-1));
        setTotalPrice((prevTotalPrice) =>
        Math.max(prevTotalPrice - 45000, 0)); 
      } else if (seat.status.includes("seat-vip")) {
        updatedLayout[rowIndex][seatIndex].status =
          "seat-empty seat-used seat-vip";
        maxseat--;
        dispatch(updateAmountVIP(-1));
        setTotalPrice((prevTotalPrice) =>
        Math.max(prevTotalPrice - 50000, 0)); 
      }
    }
    setSeatLayout(updatedLayout);
    const selectedSeats = updatedLayout.flatMap((row) =>
      row
        .filter((seat) => seat.status.includes("seat-select"))
        .map((seat) => seat.name)
    );
    setListNameSeat(selectedSeats.join(", "));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundColor(
        backgroundColor === "rgb(254, 185, 82)"
          ? "rgb(243, 230, 192)"
          : "rgb(254, 185, 82)"
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [backgroundColor]);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        const [minutes, seconds] = prevTime
          .split(":")
          .map((num) => parseInt(num));
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          window.location.href = "/";
          return "0:00";
        } else {
          const totalSeconds = minutes * 60 + seconds - 1;
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return `${newMinutes}:${
            newSeconds < 10 ? "0" + newSeconds : newSeconds
          }`;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);
  const formatPrice = (price) => {
    return price.toLocaleString("vi-VN", { currency: "VND" });
  };
  return (
    <>
      <div className="mx-[auto] px-[15px] xl:w-[1150px] lg:w-[950px] md:w-[768px]">
        <div className="row">
          <div className="xl:w-[68.75%] xl:float-left lg:w-[68.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left !mb-[35px] relative min-h-[1px] px-[15px] panelShowSeat">
            <div className="!mb-[35px]">
              <h3>
                <Link to="/">
                  <a className="coloros cursor-pointer hover:underline !text-[#03599d]">
                    Trang chủ
                  </a>
                </Link>{" "}
                &gt;{" "}
                <a className="coloros cursor-pointer hover:underline !text-[#03599d]">
                  Đặt vé
                </a>{" "}
                &gt;{" "}
                <span className="coloros cursor-pointer hover:underline !text-[#03599d]">
                  <a>{name}</a>
                </span>
              </h3>
            </div>
            <div style={{ backgroundColor }}>
              <div className="text-center text-[red] mb-[10px] !p-[10px] coloros !text-[13px]">
                {ageLimitMessage}
              </div>
            </div>

            <div class="choose-seat-row">
              <div id="screen_form">
                <div class="w-[100%] float-left">
                  <div class="flex xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[18.75%] md:float-left sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                    <img width="35" height="35" src={seatunselectnormal} />
                    <span className="coloros text-[13px] pt-[5px] pl-[3px]">
                      Ghế trống
                    </span>
                  </div>
                  <div class="flex xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[18.75%] md:float-left sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                    <img width="35" height="35" src={seatsetnormal} />
                    <span className="coloros text-[13px] pt-[5px] pl-[3px]">
                      Ghế đang chọn
                    </span>
                  </div>
                  <div class="flex xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[25%] md:float-left sm:float-left relative min-h-[1px] px-[15px]">
                    <img width="35" height="35" src={seatselectnormal} />
                    <span className="coloros text-[13px] pt-[5px] pl-[3px]">
                      Ghế đang được giữ
                    </span>
                  </div>
                  <div class="flex xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[18.75%] md:float-left sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                    <img width="35" height="35" src={seatprocessnormal} />
                    <span className="coloros text-[13px] pt-[5px] pl-[3px]">
                      Ghế đã bán
                    </span>
                  </div>
                  <div class="flex xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[18.75%] md:float-left sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                    <img width="35" height="35" src={seatbuynormal} />
                    <span className="coloros text-[13px] pt-[5px] pl-[3px]">
                      Ghế đặt trước
                    </span>
                  </div>
                </div>
                <div class="xl:w-[100%] xl:float-left sm:w-[100%] sm:float-left !mt-[20px]">
                  <div class="testimonial-group">
                    <div class="row">
                      <div class="seat-diagram !float-left">
                        <img class="block max-w-[100%] h-auto" src={icscreen} />
                        <div className="check-show">
                          {seatLayout.map((row, rowIndex) => (
                            <div className="text-center" key={rowIndex}>
                              {row.map((seat, seatIndex) => (
                                <div
                                  className={`seat-cell ${seat.status}`}
                                  key={seatIndex}
                                  onClick={() =>
                                    handleSeatClick(rowIndex, seatIndex)
                                  }
                                >
                                  {seat.name}
                                </div>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="bg-[#FFF] py-[15px] px-[10px] mt-[40px] w-[100%] !float-left">
                <div class="seat-type seat-type-standard xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
                  <div class="mx-[-15px]">
                    <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[31.25%] sm:float-left">
                      <img
                        className="w-[100%] max-w-[50px] float-left align-middle"
                        src={seatunselectnormal}
                      />
                    </div>
                    <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[68.75%] sm:float-left">
                      <span class="seat-type-name">Ghế thường</span>
                    </div>
                    <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <span class="seat-empty-quantity seat-normal-quantity">
                      {Math.max(amountNOR, 0) !== 0 ? Math.max(amountNOR, 0) + "x45.000 vnđ" : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="seat-type seat-type-vip xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
                  <div class="row">
                    <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[31.25%] sm:float-left">
                      <img
                        className="w-[100%] max-w-[50px] float-left align-middle"
                        src={seatunselectvip}
                      />
                    </div>
                    <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[68.75%] sm:float-left">
                      <span class="seat-type-name">Ghế VIP</span>
                    </div>
                    <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <span class="seat-vip-quantity">
                      {Math.max(amountVIP, 0) !== 0 ? Math.max(amountVIP, 0) + "x50.000 vnđ" : null}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="seat-type seat-type-double xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
                  <div class="row">
                    <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[31.25%] sm:float-left">
                      <img
                        className="w-[100%] max-w-[50px] float-left align-middle"
                        src={seatunselectdouble}
                      />
                    </div>
                    <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[68.75%] sm:float-left">
                      <span class="seat-type-name">Ghế đôi</span>
                    </div>
                    <div class="xl:w-[100%] xl:float-left  md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <span class="seat-double-quantity"></span>
                    </div>
                  </div>
                </div>
                <div class="seat-type xl:border-l-2 xl:border-[#d8d8d8] xl:border-t-0 xl:h-[90px] md:border-t-1 md:border-[#d8d8d8] md:border-l-0  md:border-t-1 sm:border-[#d8d8d8] sm:border-l-0  sm:border-t-1 xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left md:pt-[15px] sm:pt-[15px] xl:pt-0 relative min-h-[1px] px-[15px]">
                  <div class="row">
                    <div class="total-money-label  coloros text-[18px] text-left text-[#494C62] xl:w-[100%] xl:float-left  md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                      Tổng tiền
                    </div>
                    <div class="total-money-value xl:w-[100%] xl:float-left  md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                      {totalPrice !== 0
                        ? formatPrice(totalPrice) + " vnđ"
                        : null}
                    </div>
                  </div>
                </div>
                <div class="seat-type xl:border-l-2  xl:border-[#d8d8d8] xl:border-t-0 xl:h-[90px] md:border-t-1 md:border-[#d8d8d8] md:border-l-0  md:border-t-1 sm:border-[#d8d8d8] sm:border-l-0  sm:border-t-1 xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left md:pt-[15px] sm:pt-[15px] xl:pt-0 relative min-h-[1px] px-[15px]">
                  <div class="row">
                    <div class="time-to-left-label coloros text-[18px] text-[#494C62] text-left xl:w-[100%] xl:float-left  md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                      Thời gian còn lại
                    </div>
                    <div class="time-to-left-value coloros text-[38px] text-[#1e1f28] text-right xl:w-[100%] xl:float-left  md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                      {timeLeft}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="xl:w-[31.25%] xl:float-left  lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px]  !mb-[35px] panelFilmInfo "
            style={{
              top: `${limitedScrollPosition}px`,
              bottom: `${-limitedScrollPosition}px`,
            }}
          >
            <div className="bg-white">
              <div className="row">
                <div className="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                  <div claclassNames="relative">
                    <img
                      className="w-[100%] block max-w-[100%] h-auto"
                      alt=""
                      src={allmovie.image}
                    />
                    {allmovie.rateName === "T18" && (
                      <span className="absolute top-[10px] left-[20px]">
                        <img
                          src={require(`../../assets/images/T18.png`)}
                          class="block max-w-[100%] h-auto"
                        />
                      </span>
                    )}
                    {allmovie.rateName === "T16" && (
                      <span className="absolute top-[10px] left-[20px]">
                        <img
                          src={require(`../../assets/images/T16.png`)}
                          class="block max-w-[100%] h-auto"
                        />
                      </span>
                    )}
                    {allmovie.rateName === "T13" && (
                      <span className="absolute top-[10px] left-[20px]">
                        <img
                          src={require(`../../assets/images/T13.png`)}
                          class="block max-w-[100%] h-auto"
                        />
                      </span>
                    )}
                    {allmovie.rateName === "P" && (
                      <span className="absolute top-[10px] left-[20px]">
                        <img
                          src={require(`../../assets/images/P.png`)}
                          class="block max-w-[100%] h-auto"
                        />
                      </span>
                    )}
                  </div>
                </div>
                <div className="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                  <h3 className="font-bold !text-[#03599d]">{name}</h3>
                  <h4>2D Phụ đề</h4>
                </div>
                <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left  relative min-h-[1px] px-[15px] sm:w-[100%] sm:float-left">
                  <ul className="list-none px-[30px]  !py-[20px] text-[14px] font-family-san mb-0">
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-tags"></i>&nbsp;Thể loại
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">{allmovie.movieTypeName}</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-clock-o"></i>&nbsp;Thời lượng
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">{allmovie.movieDuration} phút</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left  relative min-h-[1px] px-[15px] sm:w-[100%] sm:float-left">
                  <hr className="border-dashed border-t-2 my-[5px] text-[black]" />
                  <ul class="list-none px-[30px] !py-[20px] text-[14px] font-family-san">
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left   sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-institution"></i>&nbsp;Rạp chiếu
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">{selectcinema}</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-calendar"></i>&nbsp; Ngày chiếu
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">{decodedDay}</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-clock-o"></i>&nbsp;Giờ chiếu
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">{seat}</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-desktop"></i>&nbsp;Phòng chiếu
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">P1</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-cubes"></i>&nbsp;Ghế ngồi
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="seat-name-selected font-bold">
                            {listnameseat}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="text-center pb-[30px]">
                    {listnameseat === null ? (
                      <button
                        type="button"
                        className="btn btn-2 btn-mua-ve btn-thanh-toan font-normal coloros"
                        onclick="ContinueToPaymentInfo()"
                      >
                        <span>
                          <i className="fa fa-ticket mr3"></i>
                        </span>
                        TIẾP TỤC
                      </button>
                    ) : (
                      <Link
                        to={`/room/${id}/${name}/${seat}/${encodeURIComponent(
                          day
                        )}/${encodeURIComponent(listnameseat)}`}
                      >
                        <button
                          type="button"
                          className="btn btn-2 btn-mua-ve btn-thanh-toan font-normal coloros"
                          onclick="ContinueToPaymentInfo()"
                        >
                          <span>
                            <i className="fa fa-ticket mr3"></i>
                          </span>
                          TIẾP TỤC
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Source+Sans+3&display=swap");
          @import url("https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap");
          .coloros {
            font-family: Oswald !important;
            line-height: 1.5em;
          }
          .seat-empty-quantity,
          .seat-vip-quantity,
          .seat-double-quantity {
            font-family: Oswald;
            font-size: 16px;
            text-align: right;
            color: #1e1f28;
            margin-top: 30px;
            float: right;
          }
          .total-money-value {
            font-family: Oswald;
            font-size: 20px;
            text-align: right;
            color: #03599d;
            margin-top: 40px;
          }
          .font-family-san {
            font-family: "Source Sans 3", sans-serif !important;
          }
          .seat-type-name {
            width: 100%;
            float: left;
            padding-left: 5px;
            color: #494c62;
            font-family: Oswald;
            font-size: 18px;
            text-align: left;
          }
          h1,
          .h1,
          h2,
          .h2,
          h3,
          .h3 {
            margin-top: 20px;
            margin-bottom: 10px;
          }
          h3,
          .h3 {
            font-size: 23px;
          }
          h4,
          .h4 {
            font-size: 17px;
          }
          h4,
          .h4,
          h5,
          .h5,
          h6,
          .h6 {
            margin-top: 10px;
            margin-bottom: 10px;
          }
          .heightchange {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #fff;
            z-index: 1000;
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
          .testimonial-group > .row {
            overflow-x: auto;
            white-space: nowrap;
          }
          .row {
            margin-left: -15px;
            margin-right: -15px;
          }
          #screen_form .seat-cell {
            width: 40px;
            height: 40px;
            display: inline-block;
            text-align: center;
            line-height: 40px;
            font-size: 11px;
          }
          .seat-for-way {
            text-indent: -99999px;
          }
          .seat-empty.seat-used {
            color: #494c62 !important;
          }
          .seat-used {
            background-color: transparent !important;
            background-repeat: no-repeat;
            background-size: 35px 35px;
            background-position: center;
            color: #fff;
            font-family: SFProText;
            font-size: 14px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
          }
          .seat-used.seat-empty.seat-vip {
            background-image: url(${seatunselectvip});
          }
          .seat-used.seat-select.seat-vip {
            background-image: url(${seatselectvip});
          }
          .seat-used.seat-sold.seat-vip {
            background-image: url(${seatbuyvip});
          }
          .seat-used.seat-empty.seat-normal {
            background-image: url(${seatunselectnormal});
          }
          .seat-used.seat-select.seat-normal {
            background-image: url(${seatselectnormal});
          }
          .seat-used.seat-sold.seat-normal {
            background-image: url(${seatbuynormal});
          }
          img {
            vertical-align: middle;
            border: 0;
          }
          .btn-mua-ve {
            padding: 10px 40px;
            position: relative;
            border-radius: 4px !important;
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
          .btn {
            text-align: center;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            text-transform: uppercase;
            border-width: 0;
            font-size: 14px;
            outline: none !important;
            display: inline-block;
            margin-bottom: 0;
            vertical-align: middle;
            touch-action: manipulation;
            cursor: pointer;
            border: 1px solid transparent;
            white-space: nowrap;
            line-height: 1.42857143;
            width: 125.48px;
          }
          .btn:hover {
            background-position: right center;
            filter: none;
            text-shadow: none;
            box-shadow: none;
            text-decoration: none;
          }
          button {
            overflow: visible;
            margin: 0px;
          }
          .mr3 {
            font-size: 70px;
            position: absolute;
            left: -10px;
            opacity: 0.5;
            color: #fff;
            line-height: 14px;
          }
        `}
      </style>
    </>
  );
};
export default Room;
