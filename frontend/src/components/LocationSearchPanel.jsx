import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {


  const locations  = props.loc.map(item => item.description);

  return (
    <div>
      {locations.map((location, index) => (
        <div key={index} onClick={() => {
          props.setLocation(location)
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
