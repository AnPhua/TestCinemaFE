import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <>
      <div className="overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-1000`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <img src={s} className="w-[1900px] h-[693px]" alt="" />;
          })}
        </div>

        <div className="btleft w-[95px] absolute top-0  h-full  justify-between items-center flex text-white px-10 text-4xl">
          <button
            className="opacity-50 hover:opacity-100"
            onClick={previousSlide}
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="btright w-[95px] absolute top-0  h-full  justify-between items-center flex text-white px-10 text-4xl ml-[1820px]">
          <button className="opacity-50 hover:opacity-100" onClick={nextSlide}>
            <ChevronRight className="absolute left-[4px]" />
          </button>
        </div>

        <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-[18px] w-5 h-5 cursor-pointer border-[2px] border-[#c9cdce]  ${
                  i == current ? "bg-[#6F7A7C]" : "bg-[transparent]"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .btleft {
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5) 0,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .btleft:hover {
          outline: 0;
          text-decoration: none;
          opacity: 0.9;
        }
        .btright {
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0) 0,
            rgba(0, 0, 0, 0.5) 100%
          );
        }
        .btright:hover {
          outline: 0;
          text-decoration: none;
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
