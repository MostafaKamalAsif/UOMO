import React from 'react'

const Dots = ({dots}) => {
  return (
    <>
  <div className="absolute bottom-[10%] left-[10%] ">
      <ul className=" flex gap-x-6 ">
        {dots}
      </ul>
    </div>
    </>
  )
}

export default Dots