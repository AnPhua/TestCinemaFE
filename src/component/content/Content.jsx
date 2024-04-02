/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import ContentFilms from "./ContentFilms";
import detail from "../data/data";
const Content = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    setActiveIndex(1);
  }, []);
  const handleOnClick = (i, e) => {
    e.preventDefault();
    setActiveIndex(i);
  };

  const subHeaderTitle = [
    { text: "PHIM SẮP CHIẾU" },
    { text: "PHIM ĐANG CHIẾU" },
    { text: "SUẤT CHIẾU ĐẶC BIỆT" },
  ];
  //   [
  //     {
  //       id: 3,
  //       name: "Godzilla x Kong: Đế Chế Mới",
  //       category: "Hành động,Phiêu lưu",
  //       time: 121,
  //       launchDate: "29/03/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "godzillaKong.jpg",
  //       ageLimit: "c-13.png",
  //       youtube:"RXc2bs_aBuA?si=4znTVkKE4F4mc7Dq",
  //     },
  //     {
  //       id: 4,
  //       name: "Quỷ Thuật",
  //       category: "Kinh dị",
  //       time: 106,
  //       launchDate: "29/03/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "QuyThuat.jpg",
  //       ageLimit: "c-16.png",
  //       youtube:"j0bi3gK5Dxo?si=vADpAMBLDeSlIrmV",
  //     },
  //     {
  //       id: 5,
  //       name: 'B4S - Trước Giờ "Yêu" ',
  //       category: "Hài hước,Tình cảm",
  //       time: 123,
  //       launchDate: "12/04/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "Truocgioyeu.jpg",
  //       ageLimit: "c-18.png",
  //       youtube:"GHmq0amBZPg?si=IZqdtEC0hYjvm46_",
  //     },
  //     {
  //       id: 6,
  //       name: "Cái Giá Của Hạnh Phúc",
  //       category: "Tâm lý",
  //       time: 117,
  //       launchDate: "26/04/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "Caigiacuahanhphuc.jpg",
  //       ageLimit: "c-16.png",
  //       youtube:"QoDrd25FeNA?si=yAB-GDbk0bG-0xbe",
  //     },
  //     {
  //       id: 7,
  //       name: "Lật Mặt 7",
  //       category: "Tâm lý,Gia đình",
  //       time: 132,
  //       launchDate: "26/04/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "Latmat71dieuuoc.jpg",
  //       ageLimit: null,
  //       youtube:"QdtPQ0wV53M?si=rDcFNyTXkRaAJNfe",
  //     },
  //     {
  //       id: 18,
  //       name: "Điểm Báo Của Quỷ",
  //       category: "Kinh Dị",
  //       time: 120,
  //       launchDate: "05/04/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "DiemBaoCuaQuy.jpg",
  //       ageLimit: "c-18.png",
  //       youtube:"AVAnQaJ49l8?si=1T2iJHMx41N654rU",
  //     },
  //     {
  //       id: 19,
  //       name: "Biệt Đội Săn Ma: Kỷ Nguyên Băng Giá",
  //       category: "Hài hước, Phiêu lưu",
  //       time: 115,
  //       launchDate: "12/04/2024",
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "BietDoiSanMaKyNguyenBangGia.jpg",
  //       ageLimit: "c-13.png",
  //       youtube:"Y4Fbcvq-9RU?si=sVWgpVnQ9JxERfNs",
  //     },
  //   ],
  //   [
  //     {
  //       id: 1,
  //       name: "Muôn Vị Nhân Gian",
  //       category: "Tình cảm,Lãng mạn",
  //       time: 135,
  //       launchDate: "22/03/2024",
  //       isHot: false,
  //       isSellTicket: true,
  //       image: "muonvinhangian.jpg",
  //       ageLimit: "c-13.png",
  //       youtube:"kU4yf_9yr8Y?si=2vn4xBWDv_s9aWo5",
  //     },
      
  //     {
  //       id: 2,
  //       name: "Người Chết Trở Về",
  //       category: "Bí ẩn,Hồi Hộp",
  //       time: 109,
  //       launchDate: "22/03/2024",
  //       isHot: false,
  //       isSellTicket: true,
  //       image: "DeadMan.jpg",
  //       ageLimit: "c-18.png",
  //       youtube:"OcWPUd11mr0?si=amhehG23QTQ9KcQg"
  //     },
  //     {
  //       id: 8,
  //       name: "Exhuma: Quật Mộ Trùng Ma",
  //       category: "Kinh dị",
  //       time: 133,
  //       launchDate: null,
  //       isHot: true,
  //       isSellTicket: true,
  //       image: "QuatMoTrungMa.jpg",
  //       ageLimit: "c-16.png",
  //       youtube:"7LH-TIcPqks?si=pc7e8DMZHKmk6Z-B",
  //     },
  //     {
  //       id: 9,
  //       name: "Đào,Phở và Piano",
  //       category: "Lịch sử,Tình cảm",
  //       time: 100,
  //       launchDate: null,
  //       isHot: true,
  //       isSellTicket: true,
  //       image: "daophopiano.png",
  //       ageLimit: "c-13.png",
  //       youtube:"qn1t_biQigc?si=myxdPGw9XbB9XxGH",
  //     },
  //     {
  //       id: 10,
  //       name: "Kung Fu Panda 4",
  //       category: "Hoạt hình,Hài hước",
  //       time: 94,
  //       launchDate: null,
  //       isHot: true,
  //       isSellTicket: true,
  //       image: "kfpd4.png",
  //       ageLimit: "p.png",
  //       youtube:"_inKs4eeHiI?si=Ig7ZoPUToBxhdbd8",
  //     },
  //     {
  //       id: 11,
  //       name: "Quý Cô Thừa Kế 2",
  //       category: "Tình cảm,Tâm lý",
  //       time: 110,
  //       launchDate: null,
  //       isHot: true,
  //       isSellTicket: false,
  //       image: "QuyCoThuaKe.jpg",
  //       ageLimit: "c-16.png",
  //       youtube:"HOJU8LBdlgE?si=kTtNqdSr4ugoG7pO",
  //     },
  //     {
  //       id: 12,
  //       name: "Dune: Hành tinh cát - Phần hai ",
  //       category: "Hành động, Phiêu lưu",
  //       time: 166,
  //       launchDate: null,
  //       isHot: true,
  //       isSellTicket: false,
  //       image: "HanhTrinhCat.jpg",
  //       ageLimit: "c-16.png",
  //       youtube:"kCO-RO3q7U4?si=5NuIXMifVQOgTd8E",
  //     },
  //     {
  //       id: 13,
  //       name: "Mai",
  //       category: "Tâm lý,Tình cảm",
  //       time: 131,
  //       launchDate: null,
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "mai.jpg",
  //       ageLimit:"c-18.png",
  //       youtube:"HXWRTGbhb4U?si=XzTuOqn0wVZqrr5A",
  //     },
  //     {
  //       id: 14,
  //       name: "Quỷ Thay Đầu",
  //       category: "Kinh dị",
  //       time: 95,
  //       launchDate: null,
  //       isHot: false,
  //       isSellTicket: false,
  //       image: "QuyThayDau.jpg",
  //       ageLimit: "c-18.png",
  //       youtube:"MUY7MIKOY-Q?si=rz2hLRQ6f_trg3K1",
  //     },
  //     {
  //       id: 15,
  //       name: "Biệt Đội Săn Rồng",
  //       category: "Hành động,Lãng mạn",
  //       time: 99,
  //       launchDate: null,
  //       isHot: false,
  //       isSellTicket: true,
  //       image: "BietDoiSanRong.jpg",
  //       ageLimit: "c-16.png",
  //       youtube:"EuYDJ2Csq7I?si=P7X0IZXnl7PxCGfM",
  //     },
  //     {
  //       id: 16,
  //       name: "Sáng Đèn",
  //       category: "Hài hước ,Tình cảm",
  //       time: 128,
  //       launchDate: null,
  //       isHot: false,
  //       isSellTicket: true,
  //       image: "SangDen.jpg",
  //       ageLimit: null,
  //       youtube:"jBC0GDOScSk?si=payZxajA7oWZxKSv",
  //     },
  //   ],
  //   [
  //     {
  //       id: 17,
  //       name: "Sáng Đèn",
  //       category: "Hài hước ,Tình cảm",
  //       time: 128,
  //       launchDate: null,
  //       isHot: false,
  //       isSellTicket: true,
  //       image: "SangDen.jpg",
  //       ageLimit: null,
  //       youtube:"jBC0GDOScSk?si=payZxajA7oWZxKSv",
  //     },
  //   ],
  // ];

  const selectedObject = detail[activeIndex];
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
