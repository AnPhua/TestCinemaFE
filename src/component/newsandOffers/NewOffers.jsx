/* eslint-disable jsx-a11y/anchor-is-valid */

import { Link } from "react-router-dom";
import km1 from "../data/offerdata";
const NewOffers = () => {
  return (
    <>
      <div className="xl:w-[100%] lg:w-[950px] md:w-[730px] mx-[auto] px-[15px] md:px-[380px] ">
        <div className="mx-[-15px]">
          <h1 className="uppercase !font-[550] text-[33px] leading-[1.5em] mt-[20px] mx-[0px] mb-[10px] h1kmm">
            <a
              className="no-underline hover:text-[#337AB7] hover:underline tracking-[-0.02em]"
              href="/khuyen-mai-moi.htm"
            >
              Khuyến mãi mới
            </a>
          </h1>
          {km1[0].map((item, index) => {
            if (item.id === 1) {
              return (
                <div className="lg:w-[50%] lg:float-left relative min-h-[1px] px-[15px] mb-[30px] h-[415px]">
                  <div className="!rounded-[10px] h-[415px] relative overflow-hidden">
                    <Link to={`newofferchild/${item.id}`}>
                      <img
                        src={require(`../../assets/images/offer/${item.image}`)}
                        className="absolute top-0 left-[-0.248555px] w-[545px] h-[415px] max-w-[none] align-middle border-0"
                        alt=""
                      />
                    </Link>
                    <div className="text-[41px] hidden">Hết mã voucher</div>
                  </div>
                  <div className="!p-[15px]  absolute bottom-0 bg-orange-500 bg-opacity-60 left-0 my-0 mx-[15px] !rounded-bl-[10px] !rounded-br-[10px]">
                    <Link to={`newofferchild/${item.id}`}>
                      <h2 className="m-0">
                        <a
                          className="text-[#fff] text-[27px] !font-[500] hover:underline h1kmm"
                          href=""
                        >
                          {item.title}
                          <span className="text-[20px] text-[#03599d]"></span>
                        </a>
                      </h2>
                    </Link>
                  </div>
                </div>
              );
            } else if (item.id >= 2 && item.id <= 3) {
              return (
                <div className="lg:w-[25%] lg:float-left relative min-h-[1px] px-[15px] mb-[30px] h-[415px]">
                  <div className="!rounded-[10px] h-[415px]">
                    <a href="/khuyen-mai-moi/thanh-toan-shopeepay-giam-ngay-5.htm">
                      <div className="h-[207.5px] !rounded-tl-[10px]  !rounded-tr-[10px]  relative overflow-hidden">
                        <Link to={`newofferchild/${item.id}`}>
                          <img
                            src={require(`../../assets/images/offer/${item.image}`)}
                            className="absolute top-[-1.42109e-14px] left-[-7.57831px] w-[273px] h-[208px] max-w-none align-middle border-0"
                            alt=""
                          />
                          <div className="text-[19px] hidden">
                            Hết mã voucher
                          </div>
                        </Link>
                      </div>
                    </a>
                    <div className="!p-[15px]">
                      <Link to={`newofferchild/${item.id}`}>
                        <h4 className="my-[10px] h1kmm leading-[1.5em]  text-[17px] !font-[300]">
                          <a
                            className="text-[#000] hover:underline"
                            href="/khuyen-mai-moi/thanh-toan-shopeepay-giam-ngay-5.htm"
                          >
                            {item.title}
                            <span className="text-[14px] text-[#03599d]"></span>
                          </a>
                        </h4>
                      </Link>
                      <p className="text-justify"></p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="lg:w-[25%] lg:float-left relative min-h-[1px] px-[15px] mb-[30px]">
                  <div className="!rounded-[10px] h-[415px]">
                    <a href="/khuyen-mai-moi/beta-ve-re-momo-mua-lien.htm">
                      <div className="h-[207.5px] !rounded-tl-[10px]  !rounded-tr-[10px]  relative overflow-hidden">
                        <Link to={`newofferchild/${item.id}`}>
                          <img
                            src={require(`../../assets/images/offer/${item.image}`)}
                            className="absolute top-[-1.42109e-14px] left-[-7.57831px] w-[273px] h-[208px] max-w-none align-middle border-0"
                            alt=""
                          />
                          <div className="text-[19px] hidden">
                            Hết mã voucher
                          </div>
                        </Link>
                      </div>
                    </a>
                    <div className="!p-[15px]">
                      <Link to={`newofferchild/${item.id}`}>
                        <h4 className="my-[10px] h1kmm leading-[1.5em]  text-[17px] !font-[300]">
                          <a
                            className="text-[#000] hover:underline"
                            href="/khuyen-mai-moi/beta-ve-re-momo-mua-lien.htm"
                          >
                            {item.title}
                            <span className="text-[14px] text-[#03599d]"></span>
                          </a>
                        </h4>
                        <p className="text-justify"></p>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="xl:w-[100%] lg:w-[950px] md:w-[730px] mx-[auto] px-[15px] md:px-[380px]">
        <div className="mx-[-15px]">
          <h1 className="uppercase !font-[550] text-[33px] leading-[1.5em] mt-[20px] mx-[0px] mb-[10px] h1kmm">
            <a
              className="no-underline hover:text-[#337AB7] hover:underline tracking-[-0.02em]"
              href="/tin-ben-le.htm"
            >
              Tin Bên Lề
            </a>
          </h1>
          {km1[1].map((item, index) => {
            if (item.id === 1) {
              return (
                <div className="lg:w-[50%] lg:float-left relative min-h-[1px] px-[15px] mb-[30px] h-[415px]">
                  <div className="!rounded-[10px] h-[415px] relative overflow-hidden">
                    <Link to={`newofferchildnewside/${item.id}`}>
                      <img
                        src={require(`../../assets/images/offer/${item.image}`)}
                        className="absolute top-0 left-[-0.248555px] w-[545px] h-[415px] max-w-[none] align-middle border-0"
                        alt=""
                      />
                    </Link>
                    <div className="text-[41px] hidden">Hết mã voucher</div>
                  </div>
                  <div className="!p-[15px]  absolute bottom-0 bg-orange-500 bg-opacity-60 left-0 my-0 mx-[15px] !rounded-bl-[10px] !rounded-br-[10px]">
                    <Link to={`newofferchildnewside/${item.id}`}>
                      <h2 className="m-0">
                        <a
                          className="text-[#fff] text-[27px] !font-[500] hover:underline h1kmm"
                          href="/khuyen-mai-moi/tuan-phim-cuc-khet-uu-dai-phe-det.htm"
                        >
                          {item.title}
                          <span className="text-[20px] text-[#03599d]"></span>
                        </a>
                      </h2>
                    </Link>
                  </div>
                </div>
              );
            } else if (item.id >= 2 && item.id <= 3) {
              return (
                <div className="lg:w-[25%] lg:float-left relative min-h-[1px] px-[15px] mb-[30px] h-[415px]">
                  <div className="!rounded-[10px] h-[415px]">
                    <a href="/khuyen-mai-moi/thanh-toan-shopeepay-giam-ngay-5.htm">
                      <div className="h-[207.5px] !rounded-tl-[10px]  !rounded-tr-[10px]  relative overflow-hidden">
                        <Link to={`newofferchildnewside/${item.id}`}>
                          <img
                            src={require(`../../assets/images/offer/${item.image}`)}
                            className="absolute top-[-1.42109e-14px] left-[-7.57831px] w-[273px] h-[208px] max-w-none align-middle border-0"
                            alt=""
                          />
                          <div className="text-[19px] hidden">
                            Hết mã voucher
                          </div>
                        </Link>
                      </div>
                    </a>
                    <div className="!p-[15px]">
                      <Link to={`newofferchildnewside/${item.id}`}>
                        <h4 className="my-[10px] h1kmm leading-[1.5em]  text-[17px] !font-[300]">
                          <a
                            className="text-[#000] hover:underline"
                            href="/khuyen-mai-moi/thanh-toan-shopeepay-giam-ngay-5.htm"
                          >
                            {item.title}
                            <span className="text-[14px] text-[#03599d]"></span>
                          </a>
                        </h4>
                      </Link>
                      <p className="text-justify"></p>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="lg:w-[25%] lg:float-left relative min-h-[1px] px-[15px] mb-[30px]">
                  <div className="!rounded-[10px] h-[415px]">
                    <a href="/khuyen-mai-moi/beta-ve-re-momo-mua-lien.htm">
                      <div className="h-[207.5px] !rounded-tl-[10px]  !rounded-tr-[10px]  relative overflow-hidden">
                        <Link to={`newofferchildnewside/${item.id}`}>
                          <img
                            src={require(`../../assets/images/offer/${item.image}`)}
                            className="absolute top-[-1.42109e-14px] left-[-7.57831px] w-[273px] h-[208px] max-w-none align-middle border-0"
                            alt=""
                          />
                          <div className="text-[19px] hidden">
                            Hết mã voucher
                          </div>
                        </Link>
                      </div>
                    </a>
                    <div className="!p-[15px]">
                      <Link to={`newofferchildnewside/${item.id}`}>
                        <h4 className="my-[10px] h1kmm leading-[1.5em]  text-[17px] !font-[300]">
                          <a
                            className="text-[#000] hover:underline"
                            href="/khuyen-mai-moi/beta-ve-re-momo-mua-lien.htm"
                          >
                            {item.title}
                            <span className="text-[14px] text-[#03599d]"></span>
                          </a>
                        </h4>
                      </Link>
                      <p className="text-justify"></p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap");
          .h1kmm {
            font-family: Oswald !important;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};
export default NewOffers;
