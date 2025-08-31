import React, { useEffect, useState } from "react";
import Headding from "../Headding";
import Container from "../Container";
import axios from "axios";

const Ourproduct = () => {
    let [alldata, setalldata]= useState([])
    useEffect(()=>{
async function alldatas () {
   let data=await axios.get("https://mostafakamalasif.github.io/Orebi-API/index.json"  )
   setalldata(data)
}
    },[])
  return (
    <>
      <div className="py-[94px]">
        <Container>
          <div className="">
            <Headding
              as={"h3"}
              text={
                <>
                  OUR TRENDY <span className="font-bold">PRODUCTS</span>
                </>
              }
              className={"text-[35px] text-center"}
            />
            <div className="pt-[31px]  ">
              <ul className="flex items-center justify-center gap-x-14 font-medium text-gray-600 text-[16px] cursor-pointer">
                <li className="hover:text-black ">All</li>
                <li className="hover:text-black ">NEWARRIVALS</li>
                <li className="hover:text-black "> BEST SELLER </li>
                <li className="hover:text-black ">TOP RATING</li>
              </ul>
            </div>

          </div>
        </Container>
      </div>
    </>
  );
};

export default Ourproduct;
