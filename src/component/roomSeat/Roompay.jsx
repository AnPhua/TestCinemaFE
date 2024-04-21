/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext, useRef } from "react";
import seatunselectnormal from "../../assets/images/seat/seat-unselect-normal.png";
import seatselectnormal from "../../assets/images/seat/seat-select-normal.png";
import seatbuynormal from "../../assets/images/seat/seat-buy-normal.png";
import seatunselectvip from "../../assets/images/seat/seat-unselect-vip.png";
import seatselectvip from "../../assets/images/seat/seat-select-vip.png";
import seatbuyvip from "../../assets/images/seat/seat-buy-vip.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import { useParams } from "react-router-dom";
import { PassingData } from "../../App";
import datafilms from "../data/datanoarrays";
import { useDispatch,useSelector } from "react-redux";
import { resetState } from "../redux/Slice/seatSlice";
import seats from "../data/datainforforseats";
import icinforpayment from "../../assets/images/ic-inforpayment.png";
import iccombo from "../../assets/images/ic-combo.png";
import icpayment from "../../assets/images/ic-payment.png";
import vnpay from "../../assets/images/vnpay.png";
import { decrease, increase } from "../redux/Slice/seatSlice";
const RoomPay = () => {
  const dispatch = useDispatch();
  const comboItems = useSelector((state) => state.seat.items);
  const selectcinema = useContext(PassingData);
  const { id, name, seat, day, listseat } = useParams();
  const decodedDay = decodeURIComponent(day);
  const listnameseat = decodeURIComponent(listseat);
  const [timeLeft, setTimeLeft] = useState("10:00");
  const timerRef = useRef(null);
  const data = datafilms.find((value) => value.id === parseInt(id));
  let countVIP = 0;
  let countNormal = 0;
  let totalPriceVIP = 0;
  let totalPriceNormal = 0;
  let totalforallseats = 0;
  let discountmoney = 0;
  let ageLimitMessage = "";
  if (data.ageLimit === "c-18.png") {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 18 tuổi.";
  } else if (data.ageLimit === "c-16.png") {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 16 tuổi.";
  } else if (data.ageLimit === "c-13.png") {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 13 tuổi.";
  } else {
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này dành cho khán giả ở mọi độ tuổi.";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  const [backgroundColor, setBackgroundColor] = useState("rgb(254, 185, 192)");
  const [limitedScrollPosition, setLimitedScrollPosition] = useState(0);
  useEffect(() => {
    let timeoutId;

    function handleScroll() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        setLimitedScrollPosition(currentScrollPosition);
        if (currentScrollPosition <= 1350) {
          setLimitedScrollPosition(currentScrollPosition);
        } else {
          setLimitedScrollPosition(1350);
        }
      }, 0.0009);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

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
  const selectedSeats = listnameseat.split(",").map((seat) => seat.trim());
  selectedSeats.forEach((selectedSeat) => {
    seats.forEach((row) => {
      row.forEach((seat) => {
        if (seat.name === selectedSeat) {
          if (seat.status.includes("seat-vip")) {
            countVIP++;
            totalPriceVIP += 50000;
          } else if (seat.status.includes("seat-normal")) {
            countNormal++;
            totalPriceNormal += 45000;
          }
        }
      });
    });
  });
  totalforallseats = totalPriceVIP + totalPriceNormal;
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

            <div class="payment-seat-row">
              <div id="payment-form">
                <div className="payment-page-title h-[35px] leading-[35px]">
                  <img className="h-[100%] float-left" src={icinforpayment} />
                  <div class="page-title" id="scroll-top">
                    THÔNG TIN THANH TOÁN
                  </div>
                </div>

                <div className="payment-user-info mt-[25px] w-[100%] mb-0 font-family-san text-[18px]">
                  <div className="row">
                    <div className="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px] user-info-item text-[16px]">
                      <span className="font-bold user-info-item-label">
                        Họ Tên:{" "}
                      </span>
                      <br />
                      <span className="user-info-item-value">
                        Nguyen An Phu{" "}
                      </span>
                    </div>
                    <div className="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px] user-info-item text-[16px]">
                      <span className="font-bold user-info-item-label">
                        Số điện thoại:{" "}
                      </span>
                      <br />
                      <span className="user-info-item-value">0968085482 </span>
                    </div>
                    <div className="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px] user-info-item text-[16px]">
                      <span className="font-bold user-info-item-label">
                        Email:{" "}
                      </span>
                      <br />
                      <span className="user-info-item-value">
                        anphu0220@gmail.com{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <br />
                <br />

                <div className="ticket-selected ticket-selected-quantity-detail">
                  {countVIP !== 0 && (
                    <div>
                      <div className="row flex mt-[25px]">
                        <div className="lg:w-[50%] lg:float-left relative min-h-[1px] px-[15px] item-seat-type">
                          GHẾ VIP
                        </div>
                        <div className="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px] item-seat-quantity">
                          {countVIP} x 50.000
                        </div>
                        <div className="lg:w-[18.75%] lg:float-left relative min-h-[1px] px-[15px] item-seat-money">
                          = {formatPrice(totalPriceVIP)} vnđ
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <hr className="my-[25px]" />
                    </div>
                  )}
                  {countNormal !== 0 && (
                    <div>
                      <div className="row flex mt-[25px]">
                        <div className="lg:w-[50%] lg:float-left relative min-h-[1px] px-[15px] item-seat-type">
                          GHẾ THƯỜNG
                        </div>
                        <div className="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px] item-seat-quantity">
                          {countNormal} x 45.000
                        </div>
                        <div className="lg:w-[18.75%] lg:float-left relative min-h-[1px] px-[15px] item-seat-money">
                          = {formatPrice(totalPriceNormal)} vnđ
                        </div>
                      </div>
                      <div className="clearfix"></div>
                      <hr className="my-[25px]" />
                    </div>
                  )}
                </div>

                <div className="clearfix"></div>
                <br />

                <div className="payment-page-title !mb-[20px] h-[35px] leading-[35px]">
                  <img className="h-[100%] float-left" src={iccombo} />
                  <div class="page-title">COMBO ƯU ĐÃI</div>
                </div>
                <table class="table table-striped table-hover table-combo-list w-[100%] max-w-[100%] !mb-[20px]">
                  <thead>
                    <tr>
                      <th className="text-center !p-0 w-[20%]"></th>
                      <th className="text-center !p-0 w-[15%]">
                        <h4>Tên Combo</h4>
                      </th>
                      <th className="text-center td-bg-1 !p-0 tdDescCombo">
                        <h4>Mô tả</h4>
                      </th>

                      <th className="text-center td-bg-1 !p-0 w-[40%]">
                        <h4>Số lượng</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comboItems.map((combo) => (
                      <tr
                        key={combo.id}
                        className="item-outer-pannel"
                        data-combo-id={combo.id}
                      >
                        <td>
                          <img
                            className="!w-[130px] !h-[130px]"
                            src={require(`../../assets/images/food/${combo.image}`)}
                            alt={require(`../../assets/images/food/${combo.image}`)}
                            altsrc={require(`../../assets/images/food/${combo.image}`)}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "default-image-url";
                            }} 
                          />
                        </td>
                        <td className="combo-title">{combo.title}</td>
                        <td className="combo-item-des td-bg-1">
                          <ul>
                            {combo.description.map((desc, index) => (
                              <li key={index}>{desc}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="combo-action td-bg-1">
                          <span
                            className="btn-minus w-[22px] h-[22px] mr-[5px] hover:cursor-pointer"
                            onClick={() => dispatch(decrease(combo.id))}
                          ></span>
                          <span
                            className="btn-plus w-[22px] h-[22px]  mr-[5px] hover:cursor-pointer"
                            onClick={() => dispatch(increase(combo.id))}
                          ></span>
                          <span className="combo-quantity float-right mr-[15px] coloros">
                            {combo.quantity}
                          </span>
                        </td>
                      </tr>
                    ))}
                    {comboItems.forEach((combo) => {
                      totalforallseats += combo.price * combo.quantity;
                    })}
                  </tbody>
                </table>
                <div className="payment-page-title h-[35px] leading-[35px]">
                  <img className="h-[100%] float-left" src={icpayment} />
                  <div className="page-title">GIẢM GIÁ</div>
                </div>

                <div className="mt-[25px] float-left w-[100%]">
                  <div class="option-title" onclick="showDiscount('voucher')">
                    <i
                      id="voucher_icon"
                      class="fa fa-arrow-circle-right text-[16px]"
                    ></i>{" "}
                    Beta Voucher{" "}
                    <span className="italic text-[#1473B6] text-[12px]">
                      (Nhấn vào đây để xem danh sách voucher của bạn)
                    </span>
                  </div>
                  <div id="voucher" className="hidden">
                    <div class="col-lg-6 col-md-6 md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label class="item-title voucher-code-title">
                        Mã Voucher{" "}
                      </label>
                      <input
                        type="text"
                        class="voucher-code-input"
                        id="voucher-code"
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label class="item-title voucher-pin-title">
                        Mã PIN{" "}
                      </label>
                      <input
                        type="text"
                        class="voucher-pin-input"
                        id="voucher-pin"
                      />
                    </div>
                    <div class="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label class="item-title voucher-pin-title">&nbsp;</label>
                      <button
                        className="width: 100%"
                        type="button"
                        onclick="registerVoucher();"
                        class="btn btn-3 btn-mua-ve uppercase"
                      >
                        ĐĂNG KÝ
                      </button>
                    </div>
                    <div class="xl:w-[100%] xl:float-left">
                      <div class="item-outer bold">VOUCHER CỦA BẠN</div>
                      <div id="voucher-items">
                        <div class="image-loading">
                          <img
                            class="loading"
                            src="../../../Assets/global/img/booking/loading.gif"
                          />
                        </div>
                      </div>
                      <table
                        class="table table-striped table-hover table-voucher-list"
                        id="table-voucher-list"
                      >
                        <thead>
                          <tr>
                            <th
                              class="text-center td-bg-1 !p-0"
                              className="width: 5%"
                            ></th>
                            <th class="text-center !p-0" className="width: 25%">
                              <h4>Mã voucher</h4>
                            </th>
                            <th
                              class="text-center td-bg-1 !p-0"
                              className="width: 55%"
                            >
                              <h4>Nội dung voucher</h4>
                            </th>
                            <th class="text-center !p-0" className="width: 15%">
                              <h4>Ngày hết hạn</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="mt-[25px] float-left w-[100%] hidden">
                  <div
                    className="option-title"
                    onclick="showDiscount('coupon')"
                  >
                    <i
                      id="coupon_icon"
                      className="fa fa-arrow-circle-right text-[16px]"
                    ></i>
                    Beta Coupon{" "}
                    <span className="font-className: italic;" class="font-12">
                      (Nhấn vào đây để xem danh sách coupon của bạn)
                    </span>
                  </div>
                  <div id="coupon" className="hidden">
                    <div class="col-lg-6 col-md-6 md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label class="item-title voucher-code-title">
                        Mã Coupon{" "}
                      </label>
                      <input
                        type="text"
                        class="voucher-code-input"
                        id="coupon-code"
                      />
                    </div>
                    <div class="col-lg-6 col-md-6 md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label class="item-title voucher-pin-title">
                        Mã PIN{" "}
                      </label>
                      <input
                        type="text"
                        class="voucher-pin-input"
                        id="coupon-pin"
                      />
                    </div>
                    <div class="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label class="item-title voucher-pin-title">&nbsp;</label>
                      <button
                        className="width: 100%"
                        type="button"
                        onclick="registerCoupon();"
                        class="btn btn-3 btn-mua-ve uppercase"
                      >
                        ĐĂNG KÝ
                      </button>
                    </div>
                    <div class="xl:w-[100%] xl:float-left">
                      <div class="item-outer bold">COUPON CỦA BẠN</div>
                      <div id="coupon-items">
                        <div class="image-loading">
                          <img
                            class="loading"
                            src="../../../Assets/global/img/booking/loading.gif"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left  sm:w-[100%] sm:float-left margin-top-10 text-center">
                      <button
                        className="float: none;"
                        type="button"
                        onclick="confirmCouponVoucher('Coupon');"
                        class="btn btn-2 btn-mua-ve xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left"
                      >
                        XÁC NHẬN
                      </button>
                    </div>
                  </div>
                </div>
                <div className="clearfix hidden"></div>
                <div class="mt-[25px] float-left w-[100%]">
                  <div
                    class="option-title"
                    onclick="showDiscount('beta-point')"
                  >
                    <i
                      id="beta-point_icon"
                      class="fa fa-arrow-circle-right text-[16px]"
                    ></i>{" "}
                    Điểm Beta{" "}
                    <span className="italic text-[#1473B6] text-[12px]">
                      (Nhấn vào đây để xem điểm tích lũy của bạn)
                    </span>
                  </div>
                  <div id="beta-point" class="hidden">
                    <div class="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left font-family-san">
                      <label>Điểm hiện có</label>
                      <br />
                      <div class="point-value">0</div>
                    </div>
                    <div class="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left font-family-san">
                      <label>Nhập điểm</label>
                      <br />
                      <input
                        type="number"
                        class="voucher-code-input"
                        onkeyup="changeBetaPoint(this)"
                      />
                      <div class="point-note"></div>
                    </div>
                    <div class="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left font-family-san">
                      <label>Số tiền được giảm</label>
                      <br />
                      <div class="point-money">= 0 vnđ</div>
                    </div>
                    <div class="xl:w-[25%] xl:float-left lg:w-[25%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                      <label>&nbsp;</label>
                      <br />
                      <button
                        className="width: 100%;"
                        type="button"
                        onclick="confirmDoiDiem();"
                        class="btn btn-3 btn-mua-ve"
                      >
                        ĐỔI ĐIỂM
                      </button>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <br />
                <div class="ticket-selected">
                  <div class="row flex">
                    <div class="lg:w-[50%] lg:float-left item-seat-type"></div>
                    <div class="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px] item-seat-quantity ">
                      Tổng tiền:{" "}
                    </div>
                    <div
                      class="lg:w-[18.75%] lg:float-left item-seat-money item-seat-total-money total-money-name text-center 
                    font-family-san !text-[red] !text-[18px] "
                    >
                      {formatPrice(totalforallseats)} vnđ
                    </div>
                  </div>
                </div>
                <div class="row flex">
                  <div class="lg:w-[81.25%] lg:float-left relative min-h-[1px] px-[15px]  item-seat-quantity">
                    Số tiền được giảm:
                  </div>
                  <div class="xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                    <div class="coupon-discount text-right font-family-san text-[red] !text-[18px] mt-[3px]">
                      {formatPrice(discountmoney)} vnđ
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="row flex">
                  <div class="lg:w-[81.25%] lg:float-left relative min-h-[1px] px-[15px]  item-seat-quantity">
                    Số tiền cần thanh toán:
                  </div>
                  <div class="xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                    <div class="payment-amount text-right font-family-san text-[red] !text-[18px] mt-[3px]">
                      {formatPrice(totalforallseats + discountmoney)} vnđ
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <br />
                <div className="payment-page-title h-[35px] leading-[35px]">
                  <img className="h-[100%] float-left" src={icpayment} />
                  <div class="page-title">PHƯƠNG THỨC THANH TOÁN</div>
                  <a
                    className="float-right coloros text-[#1473B6] hover:underline !leading-1"
                    target="_blank"
                    href="http://202.9.84.88/documents/payment/guideVN.jsp?logos=v,m,a,j,u,at"
                    rel="noreferrer"
                  >
                    Hướng dẫn thanh toán
                  </a>
                </div>

                <div class="mt-[25px] float-left w-[100%]">
                  <div class="option-title">Chọn thẻ thanh toán</div>
                  <div class="lg:w-[25%] lg:float-left relative min-h-[1px] px-[15px]">
                    <input
                      type="radio"
                      id="card1"
                      name="radio-group-card"
                      value="vietnam"
                      checked
                      onclick="return false;"
                      className="absolute cursor-pointer inline-block text-[#666] mt-[12px] leading-[normal] p-4 "
                      style={{ transform: "scale(1.5)" }}
                    />
                    <label for="card1" class="relative inline-block ml-5">
                      <img
                        className="w-[45px] inline-block align-middle ml-[5px] mr-[10px]"
                        src={vnpay}
                      />
                      <span className="leading-[35px] inline-block align-middle coloros !text-[14px] !text-[#666666]">
                        Ví VNPAY
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="seat-type-panel">
                <div class="seat-type seat-type-standard lg:w-[81.25%] lg:float-left relative min-h-[1px] px-[15px]  font-family-san">
                  <div class="note-before-next font-family-san italic font-bold">
                    Vui lòng kiểm tra thông tin đầy đủ trước khi qua bước tiếp
                    theo.
                  </div>
                  <div class="note-refund font-family-san italic font-bold">
                    <span>*</span>Vé mua rồi không hoàn trả lại dưới mọi hình
                    thức.
                  </div>
                </div>

                <div class="seat-type time-left lg:w-[18.75%] lg:float-left md:pt-[15px]  sm:pt-[15px] xl:pt-0 relative min-h-[1px] px-[15px]">
                  <div class="time-to-left-label">Thời gian còn lại</div>
                  <div class="time-to-left-value mt-2">{timeLeft}</div>
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
                      src={require(`../../assets/images/poster/${data.image}`)}
                    />
                    {data.ageLimit && (
                      <span className="absolute top-[10px] left-[20px]">
                        <img
                          src={require(`../../assets/images/${data.ageLimit}`)}
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
                          <span class="font-bold">{data.category}</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-clock-o"></i>&nbsp;Thời lượng
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left  sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="font-bold">{data.time} phút</span>
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
                    <Link
                      to={`/room/${id}/${name}/${seat}/${encodeURIComponent(
                        day
                      )}`}
                    >
                      <button
                        type="button"
                        className="btn btn-2 btn-mua-ve btn-back font-normal coloros mr-3"
                        onclick="backButtonClick()"
                      >
                        <span>
                          <i class="fa fa-ticket mr3"></i>
                        </span>
                        QUAY LẠI
                      </button>
                    </Link>
                    <button
                      type="button"
                      onclick="ContinuePayment()"
                      class="btn btn-2 btn-mua-ve dieu-khoan-pop-up font-normal coloros"
                    >
                      <span>
                        <i class="fa fa-ticket mr3"></i>
                      </span>
                      TIẾP TỤC
                    </button>
                    <a
                      href="#dieukhoan-pop-up"
                      class="fancybox-fast-view dieu-khoan-pop-up-hidden"
                      className="font-weight: normal;"
                    >
                      <span>
                        <i class="fa fa-ticket mr3"></i>
                      </span>
                    </a>
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
          .btn-plus {
            width: 22px;
            height: 22px;
            background-image: url(${plus}) !important;
            background-size: 22px 22px;
            float: right;
          }
          .btn-minus {
            width: 22px;
            height: 22px;
            background-image: url(${minus}) !important;
            background-size: 22px 22px;
            float: right;
          }
          th.tdDescCombo {
            width: 50%;
          }
          .td-bg-1 {
            position: relative;
          }
          .coloros {
            font-family: Oswald !important;
            line-height: 1.5em;
          }

          .item-seat-type {
            font-family: "Source Sans 3";
            font-size: 18px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: left;
            color: #1e1f28;
            text-transform: uppercase;
          }
          .payment-page-title .page-title {
            font-family: Oswald;
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            height: 35px;
            float: left;
            margin-left: 12px;
            color: #494c62;
          }
          .total-money,
          .time-left {
            border-left: solid 2px #d8d8d8;
            border-top: 0px;
            height: 90px;
          }
          .time-to-left-label,
          .total-money-label {
            font-family: Oswald;
            font-size: 18px;
            text-align: left;
            color: #494c62;
          }
          .time-to-left-value {
            font-family: Oswald;
            font-size: 38px;
            text-align: right;
            color: #1e1f28;
          }
          .item-seat-quantity {
            font-family: "Source Sans 3";
            font-size: 18px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: #494c62;
          }
          .item-seat-money {
            font-family: "Source Sans 3";
            font-size: 18px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: #494c62;
          }
          .option-title {
            font-family: "Source Sans 3";
            cursor: pointer;
            font-size: 18px;
            margin-bottom: 25px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            font-weight: bold;
          }
          .table > caption + thead > tr:first-child > th,
          .table > colgroup + thead > tr:first-child > th,
          .table > thead:first-child > tr:first-child > th,
          .table > caption + thead > tr:first-child > td,
          .table > colgroup + thead > tr:first-child > td,
          .table > thead:first-child > tr:first-child > td {
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
          .table > thead > tr > th,
          .table > tbody > tr > th,
          .table > tfoot > tr > th,
          .table > thead > tr > td,
          .table > tbody > tr > td,
          .table > tfoot > tr > td {
            line-height: 1.42857143;
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
          label {
            font-weight: 400;
            font-size: 14px;
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
          .user-info-item-label {
            font-family: "Source Sans 3" !important;
            font-size: 16px;
            color: #494c62;
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
          .payment-page-title .page-title {
            font-family: Oswald!;
            font-size: 20px;
            font-weight: 500;
            line-height: 35px;
            height: 35px;
            float: left;
            margin-left: 12px;
            color: #494c62;
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
          .table-striped > tbody > tr:nth-of-type(odd) {
            background-color: #f9f9f9;
          }
          tr.item-outer-pannel {
            background-color: #f5f5f5;
          }
          .item-outer-pannel {
            height: 50px;
            background-color: #fff;
            width: 100%;
          }
          .item-outer-pannel img {
            float: right;
            margin-right: 15px;
          }
          .item-outer-pannel td {
            padding: 20px 10px !important;
            vertical-align: middle !important;
            font-size: 16px;
          }
          .combo-title {
            font-family: "Source Sans 3";
            font-size: 18px;
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: left;
            color: #1e1f28;
          }
          .combo-item-des {
            font-family: "Source Sans 3";
            font-size: 18px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #494c62;
          }
        `}
      </style>
    </>
  );
};
export default RoomPay;
