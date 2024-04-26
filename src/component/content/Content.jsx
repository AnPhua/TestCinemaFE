/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import ContentFilms from "./ContentFilms";
import {GetMovieUnreference, GetMovieShowing, GetSneakShow } from "../../services/controller/StaffController";
const Content = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [unreference,setunreference] = useState([]);
  const [showing,setshowing] = useState([]);
  const [sneakshow,setsneakshow] = useState([]);
  useEffect(() => {
    setActiveIndex(1);
    getMovieUnreference();
    getMovieShowing();
    getSneakShow();
  }, []);
  const handleOnClick = (i, e) => {
    e.preventDefault();
    setActiveIndex(i);
  };
 const getMovieUnreference = async () =>{
      let res = await GetMovieUnreference();
      if(res && res.data){setunreference(res.data)}
 }
 const getMovieShowing = async () =>{
  let res = await GetMovieShowing();
  if(res && res.data){setshowing(res.data)}
}
const getSneakShow = async () =>{
  let res = await GetSneakShow();
  if(res && res.data){setsneakshow(res.data)}
}
  const subHeaderTitle = [
    { text: "PHIM SẮP CHIẾU" },
    { text: "PHIM ĐANG CHIẾU" },
    { text: "SUẤT CHIẾU ĐẶC BIỆT" },
  ];
  
  let selectedObject = [];
  if (activeIndex === 0) {
    selectedObject = unreference;
  } else if (activeIndex === 1) {
    selectedObject = showing;
  } else if (activeIndex === 2) {
    selectedObject = sneakshow;
  }
  return (
    <>
      <div className="md:px-[380px] bg-white">
        <div className="!mt-[35px]">
          <div className="text-center mx-auto md:w-[692px]">
            <ul className="tf navtab items-center justify-center  flex mb-[30px] text-[14px] pb-[1px] pl-[0] list-none">
              {subHeaderTitle.map((item, index) => (
                <li
                  key={index}
                  onClick={(e) => handleOnClick(index, e)}
                  className={activeIndex === index ? "active" : " "}
                  style={{ borderBottom: "4px solid transparent" }}
                >
                  <a>
                    <h1 className=" md:text-[30px] sm:text-[15px] xs:text-[12px] mt-[20px] mx-0 mb-[10px] px-[10px]">
                      {item.text}
                    </h1>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="t-ct py-[15px] px-[0px]">
            <div className="t-p fade">
              <div className="md:mx-[-15px]">
                {selectedObject.map((film) => (
                  <ContentFilms key={film.id} {...film} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald&display=swap");
          h1 {
            font-family: "Oswald";
            color: "#000000";
            font-weight: 400;
          }
          .fade {
            opacity: 1;
            transition: opacity 0.15s linear;
          }
          .tf > li {
            margin-bottom: -1px;
          }
          .tf > li.active {
            border-bottom: 4px solid transparent;
            border-image: linear-gradient(to right, #39adf0 0%, #075fa3 100%);
            border-image-slice: 1;
            border-width: 0px 0px 4px 0px;
            color: #03599d;
          }
          .navtab {
            border-bottom: 1px solid #ddd;
          }
        `}
      </style>
    </>
  );
};
export default Content;
