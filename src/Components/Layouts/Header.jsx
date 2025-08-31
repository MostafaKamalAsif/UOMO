import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri";
import { Link } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.svg";
const Header = () => {
  return (
    <>
      <div className="pt-8.5 pb-6">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Flex className={"gap-x-[56px]"}>
                <Image imgsrc={Logo} />
                <ul className="flex items-center gap-x-11">
                  <Link
                    to="/"
                   
                    
                  >
                    <li  className="text-black font-medium ">
                      HOME
                    </li>
                  </Link>
                  <Link to="shop" >
                    <li  className="text-black font-medium ">
                      SHOP
                    </li>
                  </Link>
                  <Link >
                    <li  className="text-black font-medium ">
                    
                      COLLECTION
                    </li>
                    
                  </Link>
                  <Link>
                    <li  className="text-black font-medium ">
                      JOURNAL
                    </li>
                    
                  </Link>
                  <Link >
                    <li  className="text-black font-medium ">
                     
                      LOOKBOOK
                    </li>
                 
                  </Link>
                  <Link >
                    <li  className="text-black font-medium ">
                    
                      PAGES
                    </li>
                   
                  </Link>
                </ul>
              </Flex>
            </div>
            <div className="">
              <Flex className={"gap-x-8"}>
                <RiSearchLine />
                <HiOutlineUser />
                <FaRegHeart />
                <MdOutlineShoppingBag />
                <RiMenu2Fill />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
