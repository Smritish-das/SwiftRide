
const WaitingForDriver = (props) => {
  
  return (
    <div className="flex flex-col">
      <div className="px-5 py-4 flex flex-row justify-between items-center  border-b-2 border-[#b2b2b2] ">
        <h2 className="text-xl font-semibold ">Meet at the pickup point</h2>
        <p onClick={() => props.setwaitDriver(false)} className="flex flex-col bg-black text-white h-15 w-15 justify-center items-center">
          <span className="font-semibold text-xl"><i className="ri-arrow-down-wide-fill"></i></span>
        </p>
      </div>
      <div className=" flex flex-row  w-screen border-b-2 pb-4 border-[#b2b2b2]">
        <div className="w-40 flex items-center justify-center pl-10">
          <img className="h-27" src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272731/car_yvtnzq.jpg" alt="" />
          <img
            className="h-19 w-19 absolute left-5 rounded-full object-cover"
            src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272736/portrait_clhkti.png"
            alt=""
          />
        </div>
        <div className=" w-60  flex items-end pr-2 flex-col mt-5">
          <h5 className="font-semibold text-[#414141]">{props.ride?.captain.fullname.firstname}</h5>
          <h1 className="text-2xl font-bold">{props.ride?.captain.vehicle.plate}</h1>
          <p className="text-s text-[#555555]">White Suzuki S-Presso LXI</p>
          <p>{props.ride?.otp}</p>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-20">
          <p className="h-20 flex justify-center items-center text-2xl">
            <i className="ri-map-pin-2-fill"></i>
          </p>
          <p className="h-20 flex justify-center items-center text-lg">
            <i className="ri-square-fill"></i>
          </p>
          <p className="h-20 flex justify-center items-center text-2xl">
            <i className="ri-bank-card-fill"></i>
          </p>
        </div>
        <div className="w-full">
          <div className="h-20 pt-3 border-b-2 border-[#b2b2b2] ">
            <p>{props.ride?.pickUp}</p>
          </div>
          <div className="h-20 pt-3 border-b-2 border-[#b2b2b2] ">
            <p>{props.ride?.destination}</p>
          </div>
          <div className="h-20 pt-3 ">
            <p className="text-xl font-bold">Rs.{props.ride?.fare}</p>
            <p>Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver