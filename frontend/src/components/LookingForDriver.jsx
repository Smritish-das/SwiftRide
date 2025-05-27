
const LookingForDriver = (props) => {
  return (
    <div>
      <h5  className='flex pb-2 justify-center text-xl font-semibold'> Looking for nearby drivers </h5>
      <div className="w-screen top-9 left-0  h-1 my-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <div className='flex w-full justify-center py-2'>
        <img className='h-30' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSox9BKp9shn46-lwuSfX7Sib9Zb-ffkuFHHRbZB_qeY6biAYjl" />
      </div>

      <div className='pl-12 border-t border-[#b2b2b2] '>
        
        <div className='py-3 border-b border-[#b2b2b2]'>
          <div className='absolute left-4 top-55 text-xl'><i className="ri-map-pin-2-fill"></i></div>
          <p className='text-xl font-bold'>562/11-A</p>
          <p>{props.pickUp}</p>
        </div>
        <div className='py-3 border-b border-[#b2b2b2]'>
          <div className='absolute left-4 top-75 '><i className="ri-square-fill"></i></div>
          <p className='text-xl font-bold'>Third Wave Coffee</p>
          <p>{props.destination}</p>
        </div>
        <div className='py-3'>
          <div className='absolute left-3 top-93 text-xl '><i className="ri-bank-card-fill"></i></div>
          <p className='text-xl font-bold'>Rs.{props.fare}</p>
          <p>Cash</p>
        </div>
      </div>
    </div>
  )
}

export default LookingForDriver