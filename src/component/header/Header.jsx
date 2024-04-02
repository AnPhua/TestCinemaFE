/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import uk from "../../assets/images/united-kingdom.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import citystage from "../data/dataCinemaStage";
import { Modal } from "antd";
import dataCinemaStage from "../data/dataCinemaStage";

const Header = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectCinema, setSelectCinema] = useState("");
  const [cinemaBranches, setCinemaBranches] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(true);

  const handleSelectCinema = (cinemaName) => {
    localStorage.setItem('selectCinema', cinemaName);
    window.location.reload();
  };
  useEffect(() => {
    const selectedCinema = localStorage.getItem('selectCinema');
    if (selectedCinema) {
      setSelectCinema(selectedCinema);
    }
    if(selectedCinema !== "Beta Giải Phóng"){
      setOpen(false);
  }
  }, []);
  const handleCityChange = (event) => {
    const selectedCity = event.target.value;
    setSelectedCity(selectedCity);
    setSelectCinema("");

    const selectedCityData = dataCinemaStage.find(
      (cityData) => cityData.maincity === selectedCity
    );
    if (selectedCityData) {
      setCinemaBranches(selectedCityData.branches);
    } else {
      setCinemaBranches([]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (selectedCity?.branch != null) {
      setOpen(false);
    }
  }, [selectedCity, cinemaBranches]);

  

  const handleX = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={null}
        open={open}
        onCancel={handleX}
        footer={null}
        className="mt-[150px] !w-[700px]"
      >
        <div className="flex !text-[14px] fontslt !font-[400] p-5">
          <div class="max-w-[100%] mx-auto ">
            <label
              for="countries"
              class="block mb-2 text-sm !font-[400] text-gray-900 dark:text-white text-center"
            >
              Tỉnh / Thành phố
            </label>
            <select
              id="countries"
              class="
              min-w-[300px] 
              bg-gray-50 border 
              border-gray-300 
              text-gray-900 
              text-sm 
              rounded-lg 
              focus:ring-blue-500 
              focus:border-blue-500 
              block w-full p-2.5 
              dark:bg-gray-700 
              dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
              "
              onChange={handleCityChange}
              value={selectedCity}
            >
              <option selected>Chọn Tỉnh/ Thành phố</option>
              {dataCinemaStage.map((item, index) => (
                <option key={index} value={item.maincity}>
                  {item.maincity}
                </option>
              ))}
            </select>
          </div>
          <div class="max-w-[100%] mx-auto ">
            <label
              for="countries"
              class="block mb-2 text-sm !font-[400] text-gray-900 dark:text-white text-center"
            >
              Tên rạp
            </label>
            <select
              id="cinemas"
              class="
              min-w-[300px]
              bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                if (e.target.value) {
                  setSelectCinema(e.target.value);
                  setOpen(false);
                }
              }}
            >
              {selectedCity ? <option value="">Chọn rạp phim</option> : null}
              {cinemaBranches.map((branch, index) => (
                <option key={index} value={branch.city}>
                  {branch.city}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Modal>
      <div style={{ lineHeight: "15px", fontSize: "13px" }} className=" bg-black text-white  md:px-[380px]">
        <div className="sub-header-content flex items-center justify-end md:mx-1 lg:mx-2 xl:mx-5">
          <Link to="/loginandSignin">
            <span className="download mx-1 cursor-pointer hover:underline">
              Đăng nhập
            </span>
            <span className="customer-care mx-1 cursor-pointer  border-l border-white pl-2 hover:underline">
              Đăng ký
            </span>
          </Link>
          <span className="cursor-pointer">
            <img className="w-[24px] h-[24px] p-0 ml-1" src={uk} alt="" />
          </span>
        </div>
      </div>
      <div
        className={
          isScrolled
            ? "fixed top-0 w-full z-50 bg-[#FFFFFF] h-[75px] border-b border-[#ECECEC]"
            : "relative top-0 w-full z-50 bg-[#FFFFFF] h-[75px] border-b border-[#ECECEC]"
        }
      >
        <div style={{ lineHeight: "75px", boxShadow: "0 1px 3px #fff", zIndex: "999", position: "relative" }} className=" bg-white md:px-[375px] md:pt-[0]">
          <Link to="/">
            <div className="float-left text-[23px] font-[400] mr-[67px] pt-[11px] pb-[9px] cursor-pointer">
              <img src={logo} className="h-[55px]" alt="" />
            </div>
          </Link>
        </div>
        <div className="dropdown inline-block relative mt-[20px]">
          <button className="bg-[#F9F9F9] border border-[#ccc] relative group font-bold py-2 px-4 rounded-[16px] inline-flex items-center !text-[14px] h-[31px]  hover:text-[#337AB7] cursor-pointer">
            <span className="beta pt-[5px] pl-[-13px] text-[#333333] hover:text-[#337AB7] ">
              {selectCinema ? selectCinema : "Beta Giải Phóng"}
            </span>
            <svg
              className="w-[7px] h-[12px] ms-3 pt-[3px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
            <span className="h-[8px] w-[14px] bg-[#337AB7] rotate-45 transform origin-bottom-left ms-3 pt-[3px] absolute hidden bottom-[0%] left-[3%] group-hover:block"></span>
          </button>
          <ul class="dropdown-content absolute hidden text-gray-700  text-[13px] w-[175px] ml-[15px] custom-shadow z-10">
            {citystage.map((item, index) => (
              <li key={index} class="dropdown border-b border-[#eee]">
                <a
                  className={`${index === 0
                    ? 'bg-[#fff] hover:bg-[#337AB7] hover:text-[#fff] flex items-center justify-between pt-[-3px] py-[10px] px-[15px]  whitespace-no-wrap w-[175px] h-[38px] text-[#9EA4AB] border-t-[3px] border-[#337AB7]'
                    : 'bg-[#fff] hover:bg-[#337AB7] hover:text-[#fff] flex items-center justify-between pt-[-3px] py-[10px] px-[15px]  whitespace-no-wrap w-[175px] h-[38px] text-[#9EA4AB]'}`}
                  href="#"
                >
                  {item.maincity}
                  <svg
                    class="w-[5px] h-[12px] ms-3 rtl:rotate-180 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
                <ul class="dropdown-content absolute hidden text-gray-700 p-0 ml-[175px] mt-[-35px] w-[180px] custom-shadow border-t-[2px] border-[#337AB7]">
                  {item.branches.map((branch, idx) => (
                    <li key={idx}>
                      <a
                        class="bg-[#fff] hover:bg-[#337AB7] hover:text-[#fff] py-3 px-4 block whitespace-no-wrap text-[#9EA4AB] border-b border-[#eee]"
                        href="#"
                        onClick={() => handleSelectCinema(branch.city)}
                      >
                        {branch.city}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="block absolute items-center justify-center ml-[770px] mt-[-25px]">
          <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
            LỊCH CHIẾU THEO RẠP
          </span>
          <Link to="/allmovie">
            <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
              PHIM
            </span>
          </Link>
          <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
            RẠP
          </span>
          <Link to="/fee">
            <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
              GIÁ VÉ
            </span>
          </Link>
          <Link to="/newoffers">
            <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
              TIN MỚI VÀ ƯU ĐÃI
            </span>
          </Link>
          <Link to="/franchise">
            <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
              NHƯỢNG QUYỀN
            </span>
          </Link>
          <Link to="/loginandSignin">
            <span className="mx-1 cursor-pointer menubig py-[12px] px-[5px] text-[#333333] hover:text-[#337AB7]">
              THÀNH VIÊN
            </span>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Source+Sans+3&display=swap");
          .beta {
            font-family: "Source Sans 3", sans-serif;
          }
          .menubig {
            font-family: "Oswald", sans-serif;
            font-size: 18px;
            font-weight: 600;
          }
          .custom-shadow {
            box-shadow: 5px 5px rgba(91, 91, 91, 0.2);
          }
          .dropdown:hover > .dropdown-content {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default Header;

