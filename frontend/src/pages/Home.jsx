import { useContext, useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";
import { SocketContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";
const Home = () => {
  const [pickUp, setpickUp] = useState("");
  const [drop, setdrop] = useState("");
  const [panel, setpanel] = useState(false);
  const panelRef = useRef(null);
  const iconRef = useRef(null);
  const [vehiclePanel, setvehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRide, setconfirmRide] = useState(false);
  const confirmRef = useRef(null);
  const [lookingForDriver, setlookingForDriver] = useState(false);
  const lookingForDriverRef = useRef(null);
  const [waitDriver, setwaitDriver] = useState(false);
  const waitDriverRef = useRef(null);
  const [suggestions, setsuggestions] = useState({ pickup: [], drop: [] });
  const [searchType, setSearchType] = useState(null);
  const [fare, setfare] = useState({});
  const [vehicleType, setvehicleType] = useState(null);
  const [ride, setRide] = useState(null)

  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user._id) {
      socket.emit("join", { userType: "user", userId: user._id });
    }
  }, [socket, user]);

  socket.on("ride-confirmed", (ride) => {
    setlookingForDriver(false);
    setwaitDriver(true);
    setRide(ride);
  });

  socket.on('ride-started',(ride) => {
    setwaitDriver(false);
    navigate('/riding',{
      state: {
        ride: ride
      }
    })
  });
  
  const fetchSuggestions = async (type, value) => {
    if (value.length < 3) {
      setsuggestions((prev) => ({ ...prev, [type]: [] }));
      return;
    }
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/map/get-suggestions`,
        {
          params: { input: value },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setsuggestions((prev) => ({ ...prev, [type]: response.data }));
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleInputChange = async (type, e) => {
    const value = e.target.value;
    if (type === "pickUp") {
      setpickUp(value);
    } else {
      setdrop(value);
    }
    fetchSuggestions(type, value);
  };

  const findTrip = async () => {
    setpanel(false);
    setvehiclePanel(true);
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/ride/get-fare`,
      {
        params: { pickUp: pickUp, destination: drop },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setfare(response.data);
  };

  const createRide = async () => {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/ride/create`,
      {
        pickUp,
        destination: drop,
        vehicleType,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log(response.data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: "5%",
      });
      gsap.to(iconRef.current, {
        opacity: 100,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: "0% 10%",
      });
      gsap.to(iconRef.current, {
        opacity: 0,
      });
    }
  }, [panel]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRide) {
      gsap.to(confirmRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRide]);

  useGSAP(() => {
    if (lookingForDriver) {
      gsap.to(lookingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(lookingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [lookingForDriver]);

  useGSAP(() => {
    if (waitDriver) {
      gsap.to(waitDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitDriver]);

  return (
    
    <div className="h-screen relative overflow-hidden">
        <img className="w-35 absolute mt-4 ml-3 z-10 " src="https://res.cloudinary.com/dwuaohlet/image/upload/v1748272732/Untitled_design__2_-removebg-preview_x6wksq.png" />

      <div className="h-full w-screen z-0">
        <LiveTracking />
      </div>

      <div className=" h-screen  flex flex-col justify-end absolute w-full top-0 z-10 ">
        <div className="h-[35%] p-5 bg-white relative ">
          <h5
            ref={iconRef}
            onClick={() => setpanel(false)}
            className="absolute top-3 text-3xl right-5 opacity-0"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line h-16 bg-black w-1 absolute top-21 left-10 rounded-full"></div>
            <input
              onClick={() => {
                setpanel(true);
                setSearchType("pickUp");
              }}
              value={pickUp}
              onChange={(e) => {
                handleInputChange("pickUp", e);
              }}
              className="bg-[#eee] px-10 w-full py-2 my-2 rounded-xl text-lg"
              type="text"
              placeholder="Add a pickup Location"
            />
            <input
              onClick={() => {
                setpanel(true);
                setSearchType("drop");
              }}
              value={drop}
              onChange={(e) => {
                handleInputChange("drop", e);
              }}
              className="bg-[#eee] px-10 w-full py-2 my-2 rounded-xl text-lg"
              type="text"
              placeholder="Add a drop Location"
            />
          </form>
          <button
            onClick={() => findTrip()}
            disabled={!pickUp || !drop}
            className={`mt-3 w-full py-2 rounded-xl text-lg font-semibold transition ${
              pickUp && drop
                ? "bg-black text-white cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Find a Ride
          </button>
        </div>

        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            loc={suggestions[searchType] || []}
            setLocation={searchType === "pickUp" ? setpickUp : setdrop}
          ></LocationSearchPanel>
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed bg-white z-40 bottom-0  flex flex-col py-5 translate-y-full px-3 w-full"
      >
        <VehiclePanel
          setvehicleType={setvehicleType}
          fare={fare}
          setvehiclePanel={setvehiclePanel}
          setconfirmRide={setconfirmRide}
        ></VehiclePanel>
      </div>

      <div
        ref={confirmRef}
        className="fixed bg-white z-30 bottom-0  flex translate-y-full flex-col py-2 w-full"
      >
        <ConfirmRide
          pickUp={pickUp}
          destination={drop}
          fare={fare[vehicleType]}
          createRide={createRide}
          setconfirmRide={setconfirmRide}
          setlookingForDriver={setlookingForDriver}
        />
      </div>

      <div
        ref={lookingForDriverRef}
        className="fixed bg-white z-20 bottom-0  flex flex-col py-2 w-full translate-y-full"
      >
        <LookingForDriver
          pickUp={pickUp}
          destination={drop}
          fare={fare[vehicleType]}
        />
      </div>

      <div
        ref={waitDriverRef}
        className="fixed bg-white z-20 bottom-0  flex flex-col py-2 w-full  "
      >
        <WaitingForDriver ride={ride} setwaitDriver={setwaitDriver} />
      </div>
    </div>
  );
};

export default Home;
