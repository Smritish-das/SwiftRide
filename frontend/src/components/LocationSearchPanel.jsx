import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {

  
  const locations = [
    "Apt 45, Oakwood Residences, 1234 Maple Street, Springfield, IL 62704, USA",
    "House No. 78, Rosewood Residency, MG Road, Pune, Maharashtra 411001, India",
    "Unit 21, Lakeside Towers, 7890 Pine Crescent, Toronto, ON M5G 1Z8, Canada",
    "Flat 3B, Willow Court, 56 Baker Avenue, London W1U 3BW, United Kingdom"
  ];

  return (
    <div>
      {locations.map((location, index) => (
        <div key={index} onClick={() => {
          props.setvehiclePanel(true);
          props.setpanel(false);
        } } className="flex border-2 border-gray-50 active:border-black rounded-xl p-3 flex-row gap my-2">
          <h5 className="text-xl px-1 bg-[#eee] h-full rounded-4xl mx-1 flex items-center justify-center">
            <i className="ri-map-pin-2-line"></i>
          </h5>
          <h5 className="font-medium">{location}</h5>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
