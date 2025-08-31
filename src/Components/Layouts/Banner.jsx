import React from 'react'
import Flex from '../Flex'
import { FaFacebookF,FaInstagram ,FaTwitter,FaPinterest} from "react-icons/fa";
import Headding from '../Headding';
import Image from '../Image';
import bannerOne from "/src/assets/banner_one.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Dots from '../Dots';
const Banner = () => {
    var settings = {
    dots: true,
    infinite: true,
    speed: 500,
 appendDots: dots =>(<Dots dots={dots}/>),

    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function(i) {
      return (
        <div className="flex justify-center items-center w-6 h-6 hover:h-6 hover:w-6 hover:border  hover:border-black hover:rounded-full duration-700">
        <div className="w-3 h-3 rounded-full bg-gray-400 hover:bg-black duration-500"></div>
        </div>
      ); },
  };
  return (
    <>
    <div className="">
        <Flex>
<div className="space-y-6 px-6 w-[5%] text-[#767676]">
    <FaFacebookF className=''/>
    <FaTwitter className=''/>
    <FaInstagram className=''/>
    <FaPinterest className=''/>
    <Headding as={"h3"} text={"FOLLOW US"} className={"rotate-180 [writing-mode:vertical-rl] font-medium text-[#767676] "}/>
</div>
<div className="w-[90%] relative ">
 
<Slider {...settings} >
  <div className="w-full">
    <img src={bannerOne} alt="Banner 1"  />
  </div>
  <div className="w-full">
    <img src={bannerOne} alt="Banner 2"  />
  </div>
  <div className="w-full">
    <img src={bannerOne} alt="Banner 3" />
  </div>
</Slider>

</div>

<div className=" text-[#222222]  w-[5%]  mt-[500px]">
 <Headding as={"h3"} text={"SCROLL"} className={"font-medium rotate-180  [writing-mode:vertical-rl] pt-2.5  m-auto "}/>
 <h3 className='border-2 rotate-180  [writing-mode:vertical-rl] h-7.5 m-auto  ' ></h3>
</div>

        </Flex>
    </div>
    </>
  )
}

export default Banner