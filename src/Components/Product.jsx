import React from 'react'
import Image from './Image'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import Headding from './Headding';
import Flex from './Flex';
const Product = ({productImg,title,className,price,PclassName,oldprice}) => {
  return (
    <>
    <div className="relative  mt-6 ">
  
        <Image imgsrc={productImg} />

        <div className="absolute top-3 right-3 ">
        <div className="p-2 rounded-full bg-white">
              <FaRegHeart />
              </div>
              <div className="p-2 rounded-full bg-white mt-4">
              <MdOutlineRemoveRedEye/>
        </div>
        </div>
        <Headding as={"h3"} text={title} className={className}/>
        <Flex className={"gap-x-4"}>
 {
          oldprice &&(
            <Headding as={"h3"}  text={oldprice}  className={`line-through text-gray-500 `} />
          )
        }

          <Headding as={"h3"} text={price} className={`${PclassName} ${oldprice ? "text-red-500 " : ""}`}/>
       
                
        </Flex>
        

    </div>
    </>
  )
}

export default Product