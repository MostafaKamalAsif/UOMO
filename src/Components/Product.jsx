import React from 'react'
import Image from './Image'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Headding from './Headding';
const Product = ({productImg,title,className,price,PclassName}) => {
  return (
    <>
    <div className="relative  ">
  
        <Image imgsrc={productImg} />

        <div className="absolute top-3 right-3">
        <div className="p-2 rounded-full bg-white">
              <FaRegHeart />
              </div>
              <div className="p-2 rounded-full bg-white mt-4">
              <MdOutlineRemoveRedEye/>
        </div>
        </div>
        <Headding as={"h3"} text={title} className={className}/>
        <Headding as={"h3"} text={price} className={PclassName}/>

    </div>
    </>
  )
}

export default Product