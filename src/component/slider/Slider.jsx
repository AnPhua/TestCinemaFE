import Carousel from "./carousel.components";
import sld1 from "../../assets/images/slider1.png";
import sld2 from "../../assets/images/slider2.jpg";
import sld3 from "../../assets/images/slider3.jpg";

const Slider = () => {
    // let slides = [
    //   sld2,sld3,sld1
    //   ];
    let slides =[
      {
        id:2,
        image:sld2,
      },
      {
        id:8,
        image:sld3,
      },
      {
        id:9,
        image:sld1,
      },
    ]
      return (
        <>
            <div className="w-[1900px] h-[693.23px]">
            <Carousel  slides={slides} />
            </div>
        </>
      );
}
export default Slider;