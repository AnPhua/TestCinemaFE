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
import datafilms from "../data/datanoarrays";
import { useDispatch ,useSelector} from 'react-redux';
import { updateAmountNOR,updateAmountVIP,resetState } from "../redux/Slice/seatSlice";
const Room = () => {
  const dispatch = useDispatch();
  const [listnameseat, setListNameSeat] = useState('');
  const amountVIP = useSelector(state => state.seat.amountVIP);
  const amountNOR = useSelector(state => state.seat.amountNOR);
  const selectcinema = useContext(PassingData);
  const { id, name, seat, day } = useParams();
  const decodedDay = decodeURIComponent(day);
  const [timeLeft, setTimeLeft] = useState('10:00');
  const timerRef = useRef(null);
  const data = datafilms.find((value) => value.id === parseInt(id));
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
  }
  else{
    ageLimitMessage =
      "Theo quy định của cục điện ảnh, phim này dành cho khán giả ở mọi độ tuổi.";
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);
  
  const seatLayoutdata = [
    [
      { id:"1", name: "K", status: "seat-for-way seat-normal" },
      { id:"2", name: "K1", status: "seat-for-way seat-normal" },
      { id:"3", name: "K2", status: "seat-for-way seat-normal" },
      { id:"4", name: "K3", status: "seat-for-way seat-normal" },
      { id:"5", name: "K4", status: "seat-for-way seat-normal" },
      { id:"6", name: "K5", status: "seat-for-way seat-normal" },
      { id:"7", name: "K6", status: "seat-for-way seat-normal" },
      { id:"8", name: "K7", status: "seat-for-way seat-normal" },
      { id:"9", name: "K8", status: "seat-for-way seat-normal" },
      { id:"10",name: "K9", status: "seat-for-way seat-normal" },
      { id:"11",name: "K10", status: "seat-for-way seat-normal" },
      { id:"12",name: "K11", status: "seat-for-way seat-normal" },
      { id:"13",name: "K12", status: "seat-for-way seat-normal" },
      { id:"14",name: "K13", status: "seat-for-way seat-normal" },
      { id:"15",name: "K14", status: "seat-for-way seat-normal" },
      { id:"16",name: "K15", status: "seat-for-way seat-normal" },
      { id:"17",name: "K16", status: "seat-for-way seat-normal" },
      { id:"18",name: "K17", status: "seat-for-way seat-normal" },
      { id:"19",name: "K18", status: "seat-for-way seat-normal" },
      { id:"20",name: "K19", status: "seat-for-way seat-normal" },
    ],
    [
      { id:"21", name: "J", status: "seat-for-way seat-normal" },
      { id:"22", name: "J1", status: "seat-empty seat-used seat-normal" },
      { id:"23", name: "J2", status: "seat-empty seat-used seat-normal" },
      { id:"24", name: "J3", status: "seat-empty seat-used seat-normal" },
      { id:"25", name: "J4", status: "seat-empty seat-used seat-normal" },
      { id:"26", name: "J5", status: "seat-empty seat-used seat-normal" },
      { id:"27", name: "J6", status: "seat-empty seat-used seat-normal" },
      { id:"28", name: "J7", status: "seat-empty seat-used seat-normal" },
      { id:"29", name: "J8", status: "seat-empty seat-used seat-normal" },
      { id:"30",name: "J9", status: "seat-empty seat-used seat-normal" },
      { id:"31",name: "J10", status: "seat-empty seat-used seat-normal" },
      { id:"32",name: "J11", status: "seat-empty seat-used seat-normal" },
      { id:"33",name: "J12", status: "seat-empty seat-used seat-normal" },
      { id:"34",name: "J13", status: "seat-empty seat-used seat-normal" },
      { id:"35",name: "J14", status: "seat-empty seat-used seat-normal" },
      { id:"36",name: "J15", status: "seat-empty seat-used seat-normal" },
      { id:"37",name: "J16", status: "seat-empty seat-used seat-normal" },
      { id:"38",name: "J17", status: "seat-empty seat-used seat-normal" },
      { id:"39",name: "J18", status: "seat-empty seat-used seat-normal" },
      { id:"40",name: "J", status: "seat-for-way seat-normal" },
    ],
    [
      { id:"41", name: "I", status: "seat-for-way seat-normal" },
      { id:"42", name: "I1", status: "seat-empty seat-used seat-normal" },
      { id:"43", name: "I2", status: "seat-empty seat-used seat-normal" },
      { id:"44", name: "I3", status: "seat-empty seat-used seat-normal" },
      { id:"45", name: "I4", status: "seat-empty seat-used seat-normal" },
      { id:"46", name: "I5", status: "seat-empty seat-used seat-normal" },
      { id:"47", name: "I6", status: "seat-empty seat-used seat-normal" },
      { id:"48", name: "I7", status: "seat-empty seat-used seat-normal" },
      { id:"49", name: "I8", status: "seat-empty seat-used seat-normal" },
      { id:"50",name: "I9", status: "seat-empty seat-used seat-normal" },
      { id:"51",name: "I10", status: "seat-empty seat-used seat-normal" },
      { id:"52",name: "I11", status: "seat-empty seat-used seat-normal" },
      { id:"53",name: "I12", status: "seat-empty seat-used seat-normal" },
      { id:"54",name: "I13", status: "seat-empty seat-used seat-normal" },
      { id:"55",name: "I14", status: "seat-empty seat-used seat-normal" },
      { id:"56",name: "I15", status: "seat-empty seat-used seat-normal" },
      { id:"57",name: "I16", status: "seat-empty seat-used seat-normal" },
      { id:"58",name: "I17", status: "seat-empty seat-used seat-normal" },
      { id:"59",name: "I18", status: "seat-empty seat-used seat-normal" },
      { id:"60",name: "I", status: "seat-for-way seat-normal" },
    ],
    [
      { id:"61", name: "H", status: "seat-for-way seat-normal" },
      { id:"62", name: "H1", status: "seat-empty seat-used seat-normal" },
      { id:"63", name: "H2", status: "seat-empty seat-used seat-normal" },
      { id:"64", name: "H3", status: "seat-empty seat-used seat-normal" },
      { id:"65", name: "H4", status: "seat-empty seat-used seat-normal" },
      { id:"66", name: "H5", status: "seat-empty seat-used seat-normal" },
      { id:"67", name: "H6", status: "seat-empty seat-used seat-normal" },
      { id:"68", name: "H7", status: "seat-empty seat-used seat-normal" },
      { id:"69", name: "H8", status: "seat-empty seat-used seat-normal" },
      { id:"70",name: "H9", status: "seat-empty seat-used seat-normal" },
      { id:"71",name: "H10", status: "seat-empty seat-used seat-normal" },
      { id:"72",name: "H11", status: "seat-empty seat-used seat-normal" },
      { id:"73",name: "H12", status: "seat-empty seat-used seat-normal" },
      { id:"74",name: "H13", status: "seat-empty seat-used seat-normal" },
      { id:"75",name: "H14", status: "seat-empty seat-used seat-normal" },
      { id:"76",name: "H15", status: "seat-empty seat-used seat-normal" },
      { id:"77",name: "H16", status: "seat-empty seat-used seat-normal" },
      { id:"78",name: "H17", status: "seat-empty seat-used seat-normal" },
      { id:"79",name: "H18", status: "seat-empty seat-used seat-normal" },
      { id:"80",name: "H", status: "seat-for-way seat-normal" },
    ],
    [
      { id:"81", name: "G", status: "seat-for-way seat-normal" },
      { id:"82", name: "G1", status: "seat-empty seat-used seat-normal" },
      { id:"83", name: "G2", status: "seat-empty seat-used seat-normal" },
      { id:"84", name: "G3", status: "seat-empty seat-used seat-normal" },
      { id:"85", name: "G4", status: "seat-empty seat-used seat-normal" },
      { id:"86", name: "G5", status: "seat-empty seat-used seat-normal" },
      { id:"87", name: "G6", status: "seat-empty seat-used seat-normal" },
      { id:"88", name: "G7", status: "seat-empty seat-used seat-normal" },
      { id:"89", name: "G8", status: "seat-empty seat-used seat-normal" },
      { id:"90",name: "G9", status: "seat-empty seat-used seat-normal" },
      { id:"91",name: "G10", status: "seat-empty seat-used seat-normal" },
      { id:"92",name: "G11", status: "seat-empty seat-used seat-normal" },
      { id:"93",name: "G12", status: "seat-empty seat-used seat-normal" },
      { id:"94",name: "G13", status: "seat-empty seat-used seat-normal" },
      { id:"95",name: "G14", status: "seat-empty seat-used seat-normal" },
      { id:"96",name: "G15", status: "seat-empty seat-used seat-normal" },
      { id:"97",name: "G16", status: "seat-empty seat-used seat-normal" },
      { id:"98",name: "G17", status: "seat-empty seat-used seat-normal" },
      { id:"99",name: "G18", status: "seat-empty seat-used seat-normal" },
      { id:"100",name: "G", status: "seat-for-way seat-normal" },
    ],
    [
      { id:"101",name: "E", status: "seat-for-way seat-vip" },
      { id:"102",name: "F1", status: "seat-empty seat-used seat-vip" },
      { id:"103",name: "F2", status: "seat-empty seat-used seat-vip" },
      { id:"104",name: "F3", status: "seat-empty seat-used seat-vip" },
      { id:"105",name: "F4", status: "seat-empty seat-used seat-vip" },
      { id:"106",name: "F5", status: "seat-empty seat-used seat-vip" },
      { id:"107",name: "F6", status: "seat-empty seat-used seat-vip" },
      { id:"108",name: "F7", status: "seat-empty seat-used seat-vip" },
      { id:"109",name: "F8", status: "seat-empty seat-used seat-vip" },
      { id:"110",name: "F9", status: "seat-empty seat-used seat-vip" },
      { id:"111",name: "F10", status: "seat-empty seat-used seat-vip" },
      { id:"112",name: "F11", status: "seat-empty seat-used seat-vip" },
      { id:"113",name: "F12", status: "seat-empty seat-used seat-vip" },
      { id:"114",name: "F13", status: "seat-empty seat-used seat-vip" },
      { id:"115",name: "F14", status: "seat-empty seat-used seat-vip" },
      { id:"116",name: "F15", status: "seat-empty seat-used seat-vip" },
      { id:"117",name: "F16", status: "seat-empty seat-used seat-vip" },
      { id:"118",name: "F17", status: "seat-empty seat-used seat-vip" },
      { id:"119",name: "F18", status: "seat-empty seat-used seat-vip" },
      { id:"120",name: "F", status: "seat-for-way seat-vip" },
    ],
    [
      { id:"121",name: "E", status: "seat-for-way seat-vip" },
      { id:"122",name: "E", status: "seat-for-way seat-vip" },
      { id:"123",name: "E1", status: "seat-empty seat-used seat-vip" },
      { id:"124",name: "E2", status: "seat-empty seat-used seat-vip" },
      { id:"125",name: "E3", status: "seat-empty seat-used seat-vip" },
      { id:"126",name: "E4", status: "seat-empty seat-used seat-vip" },
      { id:"127",name: "E5", status: "seat-empty seat-used seat-vip" },
      { id:"128",name: "E6", status: "seat-empty seat-used seat-vip" },
      { id:"129",name: "E7", status: "seat-empty seat-used seat-vip" },
      { id:"130",name: "E8", status: "seat-used seat-sold seat-vip" },
      { id:"131",name: "E9", status: "seat-used seat-sold seat-vip" },
      { id:"132",name: "E10", status: "seat-used seat-sold seat-vip" },
      { id:"133",name: "E11", status: "seat-empty seat-used seat-vip" },
      { id:"134",name: "E12", status: "seat-empty seat-used seat-vip" },
      { id:"135",name: "E13", status: "seat-empty seat-used seat-vip" },
      { id:"136",name: "E14", status: "seat-empty seat-used seat-vip" },
      { id:"137",name: "E15", status: "seat-empty seat-used seat-vip" },
      { id:"138",name: "E16", status: "seat-empty seat-used seat-vip" },
      { id:"139",name: "E17", status: "seat-empty seat-used seat-vip" },
      { id:"140",name: "E", status: "seat-for-way seat-vip" },
    ],
    [
      { id:"141",name: "D", status: "seat-for-way seat-vip" },
      { id:"142",name: "D", status: "seat-for-way seat-vip" },
      { id:"143",name: "D", status: "seat-for-way seat-vip" },
      { id:"144",name: "D1", status: "seat-empty seat-used seat-vip" },
      { id:"145",name: "D2", status: "seat-empty seat-used seat-vip" },
      { id:"146",name: "D3", status: "seat-empty seat-used seat-vip" },
      { id:"147",name: "D4", status: "seat-empty seat-used seat-vip" },
      { id:"148",name: "D5", status: "seat-empty seat-used seat-vip" },
      { id:"149",name: "D6", status: "seat-empty seat-used seat-vip" },
      { id:"150",name: "D7", status: "seat-empty seat-used seat-vip" },
      { id:"151",name: "D8", status: "seat-empty seat-used seat-vip" },
      { id:"152",name: "D9", status: "seat-empty seat-used seat-vip" },
      { id:"153",name: "D10", status: "seat-empty seat-used seat-vip" },
      { id:"154",name: "D11", status: "seat-empty seat-used seat-vip" },
      { id:"155",name: "D12", status: "seat-empty seat-used seat-vip" },
      { id:"156",name: "D13", status: "seat-empty seat-used seat-vip" },
      { id:"157",name: "D14", status: "seat-empty seat-used seat-vip" },
      { id:"158",name: "D15", status: "seat-empty seat-used seat-vip" },
      { id:"159",name: "D16", status: "seat-empty seat-used seat-vip" },
      { id:"160",name: "D", status: "seat-for-way seat-vip" },
    ],
    [
      { id:"161",name: "C", status: "seat-for-way seat-vip" },
      { id:"162",name: "C", status: "seat-for-way seat-vip" },
      { id:"163",name: "C", status: "seat-for-way seat-vip" },
      { id:"164",name: "C1", status: "seat-empty seat-used seat-vip" },
      { id:"165",name: "C2", status: "seat-empty seat-used seat-vip" },
      { id:"166",name: "C3", status: "seat-empty seat-used seat-vip" },
      { id:"167",name: "C4", status: "seat-empty seat-used seat-vip" },
      { id:"168",name: "C5", status: "seat-empty seat-used seat-vip" },
      { id:"169",name: "C6", status: "seat-used seat-sold seat-vip" },
      { id:"170",name: "C7", status: "seat-used seat-sold seat-vip" },
      { id:"171",name: "C8", status: "seat-empty seat-used seat-vip" },
      { id:"172",name: "C9", status: "seat-empty seat-used seat-vip" },
      { id:"173",name: "C10", status: "seat-empty seat-used seat-vip" },
      { id:"174",name: "C11", status: "seat-empty seat-used seat-vip" },
      { id:"175",name: "C12", status: "seat-empty seat-used seat-vip" },
      { id:"176",name: "C13", status: "seat-empty seat-used seat-vip" },
      { id:"177",name: "C14", status: "seat-empty seat-used seat-vip" },
      { id:"178",name: "C15", status: "seat-empty seat-used seat-vip" },
      { id:"179",name: "C", status: "seat-for-way seat-vip" },
      { id:"180",name: "C", status: "seat-for-way seat-vip" },
    ],
    [
      { id:"181",name: "B", status: "seat-for-way seat-vip" },
      { id:"182",name: "B", status: "seat-for-way seat-vip" },
      { id:"183",name: "B", status: "seat-for-way seat-vip" },
      { id:"184",name: "B1", status: "seat-empty seat-used seat-vip" },
      { id:"185",name: "B2", status: "seat-empty seat-used seat-vip" },
      { id:"186",name: "B3", status: "seat-empty seat-used seat-vip" },
      { id:"187",name: "B4", status: "seat-empty seat-used seat-vip" },
      { id:"188",name: "B5", status: "seat-empty seat-used seat-vip" },
      { id:"189",name: "B6", status: "seat-empty seat-used seat-vip" },
      { id:"190",name: "B7", status: "seat-empty seat-used seat-vip" },
      { id:"191",name: "B8", status: "seat-empty seat-used seat-vip" },
      { id:"192",name: "B9", status: "seat-empty seat-used seat-vip" },
      { id:"193",name: "B10", status: "seat-empty seat-used seat-vip" },
      { id:"194",name: "B11", status: "seat-empty seat-used seat-vip" },
      { id:"195",name: "B12", status: "seat-empty seat-used seat-vip" },
      { id:"196",name: "B13", status: "seat-empty seat-used seat-vip" },
      { id:"197",name: "B14", status: "seat-empty seat-used seat-vip" },
      { id:"198",name: "B15", status: "seat-empty seat-used seat-vip" },
      { id:"199",name: "B", status: "seat-for-way seat-vip" },
      { id:"200",name: "B", status: "seat-for-way seat-vip" },
    ],
    [
      { id:"201",name: "A", status: "seat-for-way seat-double" },
      { id:"202",name: "A1", status: "seat-empty  seat-used seat-vip" },
      { id:"203",name: "A2", status: "seat-empty  seat-used seat-vip" },
      { id:"204",name: "A", status: "seat-for-way seat-vip" },
      { id:"205",name: "A3", status: "seat-empty  seat-used seat-vip" },
      { id:"206",name: "A4", status: "seat-empty  seat-used seat-vip" },
      { id:"207",name: "A5", status: "seat-empty seat-used seat-vip" },
      { id:"208",name: "A6", status: "seat-empty seat-used seat-vip" },
      { id:"209",name: "A7", status: "seat-used  seat-sold seat-vip" },
      { id:"210",name: "A8", status: "seat-empty seat-used seat-vip" },
      { id:"211",name: "A9", status: "seat-empty seat-used seat-vip" },
      { id:"212",name: "A10", status: "seat-empty seat-used seat-vip" },
      { id:"213",name: "A11", status: "seat-empty seat-used seat-vip" },
      { id:"214",name: "A12", status: "seat-empty seat-used seat-vip" },
      { id:"215",name: "A13", status: "seat-empty seat-used seat-vip" },
      { id:"216",name: "A14", status: "seat-empty seat-used seat-vip" },
      { id:"217",name: "A15", status: "seat-empty seat-used seat-vip" },
      { id:"218",name: "A16", status: "seat-empty seat-used seat-vip" },
      { id:"219",name: "A17", status: "seat-empty seat-used seat-vip" },
      { id:"220",name: "A", status: "seat-for-way seat-vip" },
    ],
  ];
  const [backgroundColor, setBackgroundColor] = useState("rgb(254, 185, 192)");
  const [seatLayout, setSeatLayout] = useState(seatLayoutdata);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [limitedScrollPosition, setLimitedScrollPosition] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let timeoutId;

    function handleScroll() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        setScrollPosition(currentScrollPosition);
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
  updatedLayout.forEach(row => {
    row.forEach(seat => {
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
      const selectedSeats = updatedLayout
        .flatMap(row =>
          row.filter(seat => seat.status.includes("seat-select")).map(seat => seat.name)
        );
      setListNameSeat(selectedSeats.join(', '));
    } else {
      if (maxseat < 8) {
        if (seat.status.includes("seat-normal")) {
          updatedLayout[rowIndex][seatIndex].status =
            "seat-used seat-select seat-normal";
          maxseat++;
          dispatch(updateAmountNOR(1));
          setTotalPrice(prevTotalPrice => prevTotalPrice + 45000);
        } else if (seat.status.includes("seat-vip")) {
          updatedLayout[rowIndex][seatIndex].status =
            "seat-used seat-select seat-vip";
          maxseat++;
          dispatch(updateAmountVIP(1));
          setTotalPrice(prevTotalPrice => prevTotalPrice + 50000);
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
      setTotalPrice(prevTotalPrice => prevTotalPrice - 45000);
    } else if (seat.status.includes("seat-vip")) {
      updatedLayout[rowIndex][seatIndex].status =
        "seat-empty seat-used seat-vip";
      maxseat--;
      dispatch(updateAmountVIP(-1));
      setTotalPrice(prevTotalPrice => prevTotalPrice - 50000);
    }
  }
  setSeatLayout(updatedLayout);
  const selectedSeats = updatedLayout.flatMap(row => row.filter(seat => seat.status.includes("seat-select")).map(seat => seat.name));
  setListNameSeat(selectedSeats.join(', '));
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
      setTimeLeft(prevTime => {
        const [minutes, seconds] = prevTime.split(':').map(num => parseInt(num));
        if (minutes === 0 && seconds === 0) {
          clearInterval(timerRef.current);
          window.location.href = '/'; 
          return '0:00';
        } else {
          const totalSeconds = minutes * 60 + seconds - 1;
          const newMinutes = Math.floor(totalSeconds / 60);
          const newSeconds = totalSeconds % 60;
          return `${newMinutes}:${newSeconds < 10 ? '0' + newSeconds : newSeconds}`;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);
  const formatPrice=(price) =>{
    return price.toLocaleString('vi-VN', { currency: 'VND' });
  }
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
                      <span class="seat-empty-quantity seat-normal-quantity">{amountNOR !== 0 ? amountNOR + 'x45.000 vnđ' : null}</span>
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
                      <span class="seat-vip-quantity">{amountVIP !== 0 ? amountVIP + 'x50.000 vnđ' : null}</span>
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
                    {totalPrice !== 0 ? formatPrice(totalPrice)+' vnđ' : null }
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
            {/* <div class="payment-seat-row" className="hidden">
              <div id="payment-form">
                <div
                  class="payment-page-title"
                  className="height: 35px; line-height: 35px;"
                >
                  <img
                    className="height: 100%; float: left;"
                    src="/Assets/global/img/booking/ic-inforpayment.png"
                  />
                  <div class="page-title" id="scroll-top">
                    THÔNG TIN THANH TOÁN
                  </div>
                </div>

                <div
                  class="payment-user-info font-family-san font-lg"
                  className="margin-top: 25px; width: 100%; margin-bottom: 0px;"
                >
                  <div class="row">
                    <div class="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px]user-info-item font-16">
                      <span class="bold user-info-item-label">Họ Tên: </span>
                      <br />
                      <span class="user-info-item-value">Nguyen An Phu </span>
                    </div>
                    <div class="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px]user-info-item font-16">
                      <span class="bold user-info-item-label">
                        Số điện thoại:{" "}
                      </span>
                      <br />
                      <span class="user-info-item-value">0968085482 </span>
                    </div>
                    <div class="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px]user-info-item font-16">
                      <span class="bold user-info-item-label">Email: </span>
                      <br />
                      <span class="user-info-item-value">
                        anphu0220@gmail.com{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <br />
                <br />

                <div
                  class="ticket-selected ticket-selected-quantity-detail"
                  className=""
                ></div>

                <div class="clearfix"></div>
                <br />
                <div
                  class="payment-page-title margin-bottom-20"
                  className="height: 35px; line-height: 35px;"
                >
                  <img
                    className="height: 100%; float: left;"
                    src="../../../Assets/global/img/booking/ic-combo.png"
                  />
                  <div class="page-title">COMBO ƯU ĐÃI</div>
                </div>
                <table class="table table-striped table-hover table-combo-list">
                  <thead>
                    <tr>
                      <th
                        class="text-center no-padding"
                        className="width: 5%;"
                      ></th>
                      <th class="text-center no-padding" className="width: 25%">
                        <h4>Tên Combo</h4>
                      </th>
                      <th class="text-center td-bg-1 no-padding tdDescCombo">
                        <h4>Mô tả</h4>
                      </th>

                      <th
                        class="text-center td-bg-1 no-padding"
                        className="width: 20%"
                      >
                        <h4>Số lượng</h4>
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
                <div
                  class="payment-page-title"
                  className="height: 35px; line-height: 35px;"
                >
                  <img
                    className="height: 100%; float: left;"
                    src="../../../Assets/global/img/booking/ic-payment.png"
                  />
                  <div class="page-title">GIẢM GIÁ</div>
                </div>

                <div class="tab-35">
                  <div class="option-title" onclick="showDiscount('voucher')">
                    <i
                      id="voucher_icon"
                      class="fa fa-arrow-circle-right font-16"
                    ></i>
                    Beta Voucher{" "}
                    <span
                      className="font-className: italic; color: #1473B6;"
                      class="font-12"
                    >
                      (Nhấn vào đây để xem danh sách voucher của bạn)
                    </span>
                  </div>
                  <div id="voucher" class="hiden">
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
                              class="text-center td-bg-1 no-padding"
                              className="width: 5%"
                            ></th>
                            <th
                              class="text-center no-padding"
                              className="width: 25%"
                            >
                              <h4>Mã voucher</h4>
                            </th>
                            <th
                              class="text-center td-bg-1 no-padding"
                              className="width: 55%"
                            >
                              <h4>Nội dung voucher</h4>
                            </th>
                            <th
                              class="text-center no-padding"
                              className="width: 15%"
                            >
                              <h4>Ngày hết hạn</h4>
                            </th>
                          </tr>
                        </thead>
                        <tbody></tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="tab-35" className="display: none;">
                  <div class="option-title" onclick="showDiscount('coupon')">
                    <i
                      id="coupon_icon"
                      class="fa fa-arrow-circle-right font-16"
                    ></i>
                    Beta Coupon{" "}
                    <span className="font-className: italic;" class="font-12">
                      (Nhấn vào đây để xem danh sách coupon của bạn)
                    </span>
                  </div>
                  <div id="coupon" class="hiden">
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
                <div class="clearfix" className="display: none;"></div>
                <div class="tab-35">
                  <div
                    class="option-title"
                    onclick="showDiscount('beta-point')"
                  >
                    <i
                      id="beta-point_icon"
                      class="fa fa-arrow-circle-right font-16"
                    ></i>{" "}
                    Điểm Beta{" "}
                    <span
                      className="font-className: italic; color: #1473B6;"
                      class="font-12"
                    >
                      (Nhấn vào đây để xem điểm tích lũy của bạn)
                    </span>
                  </div>
                  <div id="beta-point" class="hiden">
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
                <hr />
                <div class="ticket-selected">
                  <div class="row">
                    <div class="lg:w-[50%] lg:float-left item-seat-type"></div>
                    <div class="lg:w-[31.25%] lg:float-left relative min-h-[1px] px-[15px]item-seat-quantity">Tổng tiền: </div>
                    <div class="lg:w-[18.75%] lg:float-left item-seat-money item-seat-total-money total-money-name"></div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-13 item-seat-quantity">
                    Số tiền được giảm:
                  </div>
                  <div class="xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                    <div
                      class="coupon-discount text-right font-family-san"
                      className="color: red"
                    >
                      0 vnđ
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div class="row">
                  <div class="col-md-13 item-seat-quantity">
                    Số tiền cần thanh toán:
                  </div>
                  <div class="xl:w-[18.75%] xl:float-left lg:w-[18.75%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left">
                    <div
                      class="payment-amount text-right font-family-san"
                      className="color: red"
                    >
                      0 vnđ
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <br />
                <div
                  class="payment-page-title"
                  className="height: 35px; line-height: 35px;"
                >
                  <img
                    className="height: 100%; float: left;"
                    src="../../../Assets/global/img/booking/ic-payment.png"
                  />
                  <div class="page-title">PHƯƠNG THỨC THANH TOÁN</div>
                  <a
                    class="pull-right"
                    target="_blank"
                    href="http://202.9.84.88/documents/payment/guideVN.jsp?logos=v,m,a,j,u,at"
                    rel="noreferrer"
                  >
                    Hướng dẫn thanh toán
                  </a>
                </div>

                <div class="tab-35">
                  <div class="option-title">Chọn thẻ thanh toán</div>
                  <div class="lg:w-[25%] lg:float-left">
                    <input
                      type="radio"
                      id="card1"
                      name="radio-group-card"
                      value="vietnam"
                      checked=""
                    />
                    <label for="card1">
                      <img
                        className="width: 45px; float: left; margin-left: 5px; margin-right: 10px;"
                        src="../../../Assets/global/img/booking/ic-card-vn.png"
                      />
                      <span className="line-height: 35px;">Thẻ nội địa</span>
                    </label>
                  </div>
                  <div class="lg:w-[25%] lg:float-left">
                    <input
                      type="radio"
                      id="card2"
                      name="radio-group-card"
                      value="global"
                    />
                    <label for="card2">
                      <img
                        className="width: 45px; float: left; margin-left: 5px; margin-right: 10px;"
                        src="../../../Assets/global/img/booking/ic-card-gb.png"
                      />
                      <span className="line-height: 35px;">Thẻ quốc tế</span>
                    </label>
                  </div>
                  <div class="lg:w-[25%] lg:float-left">
                    <input
                      type="radio"
                      id="card3"
                      name="radio-group-card"
                      value="shopeepay"
                    />
                    <label for="card3">
                      <img
                        className="width: 45px; float: left; margin-left: 5px; margin-right: 10px;"
                        src="../../../Assets/global/img/booking/shopeepay.png"
                      />
                      <span className="line-height: 35px;">Ví ShopeePay</span>
                    </label>
                  </div>
                  <div class="lg:w-[25%] lg:float-left">
                    <input
                      type="radio"
                      id="card4"
                      name="radio-group-card"
                      value="momo"
                    />
                    <label for="card4">
                      <img
                        className="width: 45px; float: left; margin-left: 5px; margin-right: 10px;"
                        src="../../../Assets/global/img/booking/momo.ico"
                      />
                      <span className="line-height: 35px;">Ví MoMo</span>
                    </label>
                  </div>
                  <div class="lg:w-[25%] lg:float-left">
                    <input
                      type="radio"
                      id="card5"
                      name="radio-group-card"
                      value="zalopay"
                    />
                    <label for="card5">
                      <img
                        className="width: 45px; float: left; margin-left: 5px; margin-right: 10px;"
                        src="../../../Assets/global/img/booking/zalopay.png"
                      />
                      <span className="line-height: 35px;">Ví ZaloPay</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="seat-type-panel">
                <div class="seat-type seat-type-standard col-md-13 font-family-san">
                  <div class="note-before-next">
                    Vui lòng kiểm tra thông tin đầy đủ trước khi qua bước tiếp
                    theo.
                  </div>
                  <div class="note-refund">
                    <span className="color: red;">*</span>Vé mua rồi không hoàn
                    trả lại dưới mọi hình thức.
                  </div>
                </div>

                <div class="seat-type time-left lg:w-[18.75%] lg:float-left padding-sm-top-15 padding-xs-top-15 padding-lg-top-0">
                  <div class="time-to-left-label">Thời gian còn lại</div>
                  <div class="time-to-left-value">{timeLeft}</div>
                </div>
              </div>
            </div> */}
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
                          <span class="seat-name-selected font-bold">{listnameseat}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="text-center pb-[30px]">
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
                    {/* <button
                      type="button"
                      class="btn btn-2 btn-mua-ve btn-back"
                      onclick="backButtonClick()"
                      className="font-weight: normal; display: none;"
                    >
                      <span>
                        <i class="fa fa-ticket mr3"></i>
                      </span>
                      QUAY LẠI
                    </button>
                    <button
                      type="button"
                      onclick="ContinuePayment()"
                      class="btn btn-2 btn-mua-ve dieu-khoan-pop-up"
                      className="font-weight: normal; display: none;"
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
                    </a>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="hidden-md hidden-lg md:w-[100%] md:float-left sm:w-[100%] sm:float-left margin-bottom-35">
            <div class="bg-white">
              <div class="row">
                <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                  <div class="pi-img-wrapper">
                    <img
                      class="block max-w-[100%] h-auto"
                      className="width: 100%"
                      alt=""
                      src="https://files.betacorp.vn/media/images/2024/04/05/quy-cai-135324-050424-10.jpg"
                    />
                    <span className="position: absolute; top: 10px; left: 10px;">
                      <img
                        src="/Assets/Common/icons/films/c-18.png"
                        class="block max-w-[100%] h-auto"
                      />
                    </span>
                  </div>
                </div>
                <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                  <h3 class="bold !text-[#03599d]">{name}</h3>
                  <h4>2D Phụ đề</h4>
                </div>
                <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[100%] sm:float-left">
                  <ul
                    class="list-none px-[30px] !py-[20px] text-[14px] font-family-san"
                    className="margin-bottom: 0px;"
                  >
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-tags"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="bold">Kinh dị</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-clock-o"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="bold">90 phút</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="xl:w-[100%] xl:float-left md:w-[100%] md:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[100%] sm:float-left">
                  <hr
                    class="border-dashed border-top-2"
                    className="margin-top: 5px; margin-bottom: 5px;"
                  />
                  <ul class="list-none px-[30px] !py-[20px] text-[14px] font-family-san">
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-institution"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="bold">Beta Thái Nguyên</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-calendar"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="bold">17/04/2024</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-clock-o"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="bold">22:15</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-desktop"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="bold">P1</span>
                        </div>
                      </div>
                    </li>
                    <li class="!py-[20px]">
                      <div class="row">
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <i class="fa fa-cubes"></i>&nbsp;
                        </div>
                        <div class="xl:w-[50%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left relative min-h-[1px] px-[15px] sm:w-[50%] sm:float-left relative min-h-[1px] px-[15px]">
                          <span class="seat-name-selected bold"></span>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="text-center padding-bottom-30">
                    <button
                      type="button"
                      class="btn btn-2 btn-mua-ve btn-thanh-toan"
                      onclick="ContinueToPaymentInfo()"
                      className="font-weight: normal;"
                    >
                      <span>
                        <i class="fa fa-ticket mr3"></i>
                      </span>
                      TIẾP TỤC
                    </button>
                    <button
                      type="button"
                      class="btn btn-2 btn-mua-ve btn-back"
                      onclick="backButtonClick()"
                      className="font-weight: normal; display: none;"
                    >
                      <span>
                        <i class="fa fa-ticket mr3"></i>
                      </span>
                      QUAY LẠI
                    </button>
                    <button
                      type="button"
                      onclick="ContinuePayment()"
                      class="btn btn-2 btn-mua-ve dieu-khoan-pop-up"
                      className="font-weight: normal; display: none;"
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
          </div> */}
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
          .seat-empty-quantity, .seat-vip-quantity, .seat-double-quantity {
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
