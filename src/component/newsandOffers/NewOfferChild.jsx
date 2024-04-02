import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import km1 from "../data/offerdata";
import { useState, useRef } from "react";
import Modal from "antd/es/modal/Modal";
import YouTube from "react-youtube";
import phimhot from "../data/data";

const NewOfferChild = () => {
  const { id } = useParams();
  const offer = km1[0].flat().find((item) => item.id === parseInt(id));
  const [open, setOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const youtubeRef = useRef(null);
  const viewTrailer = (videoId) => {
    setCurrentVideoId(videoId);
    setOpen(true);
  };

  const handleX = () => {
    setOpen(false);
    setCurrentVideoId(null);
    if (youtubeRef.current) {
      youtubeRef.current.internalPlayer.pauseVideo();
    }
  };
  const opts = {
    height: "377",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <>
      <div className="xl:w-[100%] lg:w-[950px] md:w-[730px] mx-[auto] px-[15px] md:px-[380px] mt-[20px] ">
        <div className="mx-[-15px]">
          <div className="lg:w-[50%] lg:float-left relative min-h-[1px] px-[15px]">
            <div>
              <div className="lg:w-[100%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
                <br />
                <h2 class="m-0 text-[27px] leading-[1.5em] fontofchild !font-[300]">
                  {offer.title}
                </h2>
                <div
                  class="fb-like hidden-xs fb_iframe_widget"
                  data-href="https://www.betacinemas.vn/khuyen-mai-moi/tuan-phim-cuc-khet-uu-dai-phe-det.htm"
                  data-layout="standard"
                  data-action="like"
                  data-size="small"
                  data-show-faces="true"
                  data-share="true"
                  fb-xfbml-state="rendered"
                  fb-iframe-plugin-query="action=like&amp;app_id=367174740769877&amp;container_width=515&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fkhuyen-mai-moi%2Ftuan-phim-cuc-khet-uu-dai-phe-det.htm&amp;layout=standard&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"
                >
                  <span className="align-bottom  w-[450px] h-[28px]">
                    <iframe
                      name="fd9ad4cbb530007b0"
                      width="1000px"
                      height="1000px"
                      data-testid="fb:like Facebook Social Plugin"
                      title="fb:like Facebook Social Plugin"
                      frameborder="0"
                      allowtransparency="true"
                      allowfullscreen="true"
                      scrolling="no"
                      allow="encrypted-media"
                      src="https://www.facebook.com/v17.0/plugins/like.php?action=like&amp;app_id=367174740769877&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df92be89b0613680ba%26domain%3Dbetacinemas.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbetacinemas.vn%252Ff3969d0e214e33b2d%26relation%3Dparent.parent&amp;container_width=515&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fkhuyen-mai-moi%2Ftuan-phim-cuc-khet-uu-dai-phe-det.htm&amp;layout=standard&amp;locale=en_US&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small"
                      className=" border-0 visible w-[450px] h-[28px]"
                    ></iframe>
                  </span>
                </div>
                <h4 className="fontofchild leading-[1.5em]">
                  <span id=""></span>
                </h4>
              </div>
              <div class="lg:w-[100%] lg:float-left md:w-[100%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px] fontsan !text-[16px]">
                <p>
                  <img
                    alt=""
                    src={offer.image}
                    className="w-[100%]] h-[100%]"
                  />
                </p>

                <p>&nbsp;</p>

                <p>
                  <b id="docs-internal-guid-40f51ec5-7fff-8b1e-a69b-83a3f51a120c">
                    {offer.description}
                  </b>
                </p>

                <p>&nbsp;</p>
                <p>&nbsp;</p>

                <div class="!mb-[10px]"></div>
              </div>
            </div>
            <div class="lg:w-[100%] lg:float-left relative min-h-[1px] px-[15px] !mb-[35px]">
              <div
                class="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
                data-href="https://www.betacinemas.vn/khuyen-mai-moi/tuan-phim-cuc-khet-uu-dai-phe-det.htm"
                data-numposts="5"
                data-width="auto"
                data-colorscheme="light"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="app_id=367174740769877&amp;color_scheme=light&amp;container_width=515&amp;height=100&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fkhuyen-mai-moi%2Ftuan-phim-cuc-khet-uu-dai-phe-det.htm&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v17.0&amp;width="
                className="w-[100%]"
              >
                <span className="align-bottom  w-[100%] h-[216px]">
                  <iframe
                    name="f85588cff77b8a874"
                    width="1000px"
                    height="100px"
                    data-testid="fb:comments Facebook Social Plugin"
                    title="fb:comments Facebook Social Plugin"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://www.facebook.com/v17.0/plugins/comments.php?app_id=367174740769877&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfc89adbbab75b8e2c%26domain%3Dbetacinemas.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fbetacinemas.vn%252Ff3969d0e214e33b2d%26relation%3Dparent.parent&amp;color_scheme=light&amp;container_width=515&amp;height=100&amp;href=https%3A%2F%2Fwww.betacinemas.vn%2Fkhuyen-mai-moi%2Ftuan-phim-cuc-khet-uu-dai-phe-det.htm&amp;locale=en_US&amp;numposts=5&amp;sdk=joey&amp;version=v17.0&amp;width="
                    className="border-none visible w-[100%] h-[216px]"
                  ></iframe>
                </span>
              </div>
            </div>

            <div>
              <div class="lg:w-[100%] lg:float-left relative min-h-[1px] px-[15px] cursor-pointer">
                <h1 class="uppercase pl-0 !mb-[30px]">
                  <a
                    className="text-[#000] hover:underline text-[33px] !font-[300]  fontofchild !cursor-pointer"
                    href="a"
                  >
                    Tin tức khác
                  </a>
                </h1>
                {km1[0].flat().map((item) =>
                  item.id === parseInt(id) ? null : (
                    <div class="xl:w-[25%] xl:float-left lg:w-[50%] lg:float-left md:w-[50%] md:float-left sm:w-[100%] sm:float-left relative min-h-[1px] px-[15px]">
                      <Link to={`/newoffers/newofferchild/${item.id}`}>
                        <a>
                          <div className="h-[107.5px] !rounded-[10px]  relative overflow-hidden">
                            <img
                              src={item.image}
                              alt=""
                              className="absolute top-0 left-[-21.4157px] width-[142px] h-[108px] max-w-none"
                            />
                          </div>
                        </a>
                        <h4 class="pt-[10px] pb-[10px] text-center h-[100px] overflow-hidden">
                          <a className="text-[#000000] hover:underline text-[17px] !font-[300]  fontofchild !cursor-pointer">
                            {item.title}
                          </a>
                        </h4>
                      </Link>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:float-left  relative min-h-[1px] px-[15px]">
          <div class="lg:mt-[40px] sm:mt-0">
            <h1 class="uppercase text-center fontofchild !font-[500] my-[20px] mx-0 !text-[33px] ">
              Phim đang hot
            </h1>
            {phimhot[1].slice(0, 4).map((item, index) => {
              return (
                <>
                  <div className="float-left xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] xl:pr-[30px] lg:pr-[30px] md:pr-[30px] sm:pr-[30px] px-[26.75px] ">
                    <div className="md:mx-[-15px] ">
                      <div className="lg:w-[100%] md:w-[100%] sm:w-[100%] ">
                        <div className="p-item relative !p-0">
                          <div className="pi-img-wr">
                            <img
                              className="block max-w-[100%] h-[auto] rounded-[20px] align-middle"
                              alt=""
                              src={require(`../../assets/images/poster/${item.image}`)}
                            />
                            {item.ageLimit && (
                              <span className="absolute  top-[10px]  left-[10px]">
                                <img
                                  alt=""
                                  src={require(`../../assets/images/${item.ageLimit}`)}
                                  className="block max-w-[100%] h-[auto] align-middle"
                                />
                              </span>
                            )}
                            <div className="rounded-[20px]">
                              <a
                                href="#"
                                onClick={() => viewTrailer(item.youtube)}
                                className="fancybox-fast-view"
                              >
                                <i
                                  className="fpl fa fa-play-circle text-[#fff] text-[55px] absolute top-[50%] w-[47px] h-[47px] rounded-[47px] left-[41%] m-0 inline-block leading-[14px] text-center"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-[100%] md:w-[100%] sm:w-[100%]">
                        <div className="h-[45px] min-h-[45px]">
                          <h3
                            className="!text-center 
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
                            <a href="#">{item.name}</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Modal
                    key={index}
                    title={null}
                    open={open && currentVideoId === item.youtube}
                    onCancel={handleX}
                    footer={null}
                    className="!w-[700px] max-w-[100%] text-left align-middle overflow-auto "
                  >
                    <div className="p-0 overflow-x-hidden bg-[inherit] relative">
                      <div className="p-[15px] border-b border-[#e5e5e5] min-h-[16.42857143px]">
                        <h3 className="fontos leading-[1.5em] text-[23px] font-[300] text-[inherit]">
                          TRAILER - <span>{item.name}</span>
                        </h3>
                      </div>
                      <div className="relative p-[15px] pb-[20px] text-center">
                        <YouTube
                          videoId={item.youtube}
                          opts={opts}
                          ref={youtubeRef}
                        />
                      </div>
                    </div>
                  </Modal>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap");

          .fontsan {
            font-family: "Source Sans 3", sans-serif;
          }
          .fontofchild {
            font-family: Oswald !important;
            font-weight: 600;
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
            background: url() no-repeat;
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
        `}
      </style>
    </>
  );
};
export default NewOfferChild;
