import logo1 from '../assets/Uber-PNG-Photos.png'
import logo2 from '../assets/Uber_Moto_Orange_312x208_pixels_Mobile.png'
import logo3 from '../assets/Uber_Auto_558x372_pixels_Desktop.png'
const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={()=> props.setvehiclePanel(false)} className='flex justify-center text-3xl text-[#c2c4c4]'> <i className="ri-arrow-down-wide-fill"></i> </h5>
        
        <div onClick={() => {
          props.setconfirmRide(true);
          props.setvehiclePanel(false);
          } } className=' flex bg-gray-100 border-3 border-gray-300 active:border-black flex-row py-2  rounded-2xl justify-evenly mb-3'>
          
          <img src={logo1}
          className='h-10 mt-2' 
          />

          <div className='flex flex-col '>
            <h4 className=' font-bold flex flex-row'>SwiftGo <span className='text-sm font-medium ml-1'><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='text-xs font-semibold text-[]'>2 mins away . 15:24</h5>
            <h5 className='text-xs text-[]'>Affordable Compact Rides</h5>
          </div>

          <div>
              <h2>Rs.193.20</h2>
          </div>
          
        </div>

        <div onClick={() => {
          props.setconfirmRide(true);
          props.setvehiclePanel(false);
          }} className=' flex flex-row py-2 border-3 border-gray-300 active:border-black  bg-gray-100 rounded-2xl justify-evenly mb-3'>
          
          <img src={logo2}
          className='h-10 mt-2' 
          />

          <div className='flex flex-col '>
            <h4 className=' font-bold flex flex-row'>Moto <span className='text-sm font-medium ml-1'><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='text-xs font-semibold '>1 mins away . 15:24</h5>
            <h5 className='text-xs '>Affordable Motorcycle Rides</h5>
          </div>

          <div>
              <h2>Rs.70.20</h2>
          </div>
          
        </div>

        <div onClick={() => {
          props.setconfirmRide(true);
          props.setvehiclePanel(false);
        }} className=' flex flex-row py-2 border-3 border-gray-300 active:border-black  bg-gray-100 rounded-2xl justify-evenly mb-3'>
          
          <img src={logo3}
          className='h-10 mt-2' 
          />

          <div className='flex flex-col '>
            <h4 className='font-bold flex flex-row'>UberAuto<span className='text-sm font-medium ml-1'><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='text-xs font-semibold '>1 mins away . 15:24</h5>
            <h5 className='text-xs '>Affordable AutoRickShaw Rides</h5>
          </div>

          <div >
              <h2>Rs.130.20</h2>
          </div>
          
        </div>
        
    </div>
  )
}

export default VehiclePanel