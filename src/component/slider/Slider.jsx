import Carousel from "./carousel.components";
import sld1 from "../../assets/images/slider1.png";
import sld2 from "../../assets/images/slider2.jpg";
import sld3 from "../../assets/images/slider3.jpg";
import sld4 from "../../assets/images/slider4.jpg";

const Slider = () => {
    let slides = [
      sld4,sld2,sld3,sld1
      ];
    
      return (
        <>
            <div className="w-[1900px] h-[693.23px]">
            <Carousel  slides={slides} />
            </div>
        </>
      );
}
export default Slider;