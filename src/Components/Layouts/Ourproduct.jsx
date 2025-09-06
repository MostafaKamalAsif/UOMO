import React, { useEffect, useState } from "react";
import Headding from "../Headding";
import Container from "../Container";
import axios from "axios";
import Product from "../Product";

const Ourproduct = () => {
  let [alldata, setalldata] = useState([]);
  useEffect(() => {
    async function alldatas() {
      let data = await axios.get(
        "https://mostafakamalasif.github.io/UOMO-API/index.json"
      );
      setalldata(data.data.data);
    }
    alldatas();
  }, []);
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
            <div className="pt-[31px] grid grid-cols-4  iteams-center gap-x-6  ">
              {alldata.slice(0, 8).map((iteam) => (
                <div className=" ">
                  <Product
                    productImg={iteam.img.formats.thumbnail.url}
                    title={iteam.title}
                    className={"pt-5"}
                    price={`$${iteam.price}`} 
                    oldprice={iteam.old_price ? `$${iteam.old_price}` : null}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Ourproduct;
