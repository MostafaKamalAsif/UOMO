import React from 'react'
import Headding from '../Headding'
import Container from '../Container'

const Ourproduct = () => {
  return (
    <>
    <div className="py-[94px]">
        <Container>
        <div className="">
            <Headding as={"h3"} text={<>OUR TRENDY <span className='font-bold'>PRODUCTS</span></>} className={"text-[35px] text-center"}/>
            <div className="pt-[31px]  ">
            <ul className='flex items-center justify-center gap-x-14 font-medium text-[16px]  '>
                <li>All</li>
                <li>NEWARRIVALS</li>
                <li>  BEST SELLER </li>
                <li>TOP RATING</li>
            </ul>
            </div>
        </div>
        </Container>
    </div>
    </>
  )
}

export default Ourproduct