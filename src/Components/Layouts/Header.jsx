import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri";
import { Link, useLocation } from "react-router";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.svg";
const Header = () => {
  const location=useLocation();
  return (
    <>
      <div className="pt-8.5 pb-6">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Flex className={"gap-x-[56px]"}>
                <Image imgsrc={Logo} />
                {/* useLocation() gives you the current URL (location.pathname) If the current path matches the to value of a Link, we add a bottom border + black textOtherwise, it just stays gray */}
                <ul className="flex items-center gap-x-11">
                  <Link
                    to="/"
                   className={` ${location.pathname === "/"? " border-b-2 border-black ": ""}`}
                    
                  >
                    <li  className="text-black font-medium ">        
                      HOME
                    </li>
                  </Link>
                  <Link to="shop"
                   className={` ${location.pathname === "/shop"? " border-b-2 border-black ": ""}`}
                    
                  >
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
