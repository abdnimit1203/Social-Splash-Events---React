import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const {
    id,
    event_name,
    image_square,
    price,
    short_description,
    long_description,
    color_code,
    
  } = event;
  return (
    <div data-aos={id%2 ? "fade-left": "fade-right"}  data-aos-duration="500" className="" >
      <div className="relative flex w-[80%] md:max-w-6xl  mx-auto flex-col md:flex-row rounded-xl bg-white bg-clip-border gap-4 text-gray-700 shadow-md" >
        <div className="relative m-0 shrink-0 overflow-hidden md:rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image_square}
            alt="image"
            className="md:max-w-xs aspect-square"
          />
        </div>
        <div className="p-6">
          
          <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased font-main">
            {short_description}
          </h4>
          <h6 className = {` mb-4 font-semibold  border
          w-fit px-2 hover:bg-${color_code}` }style={{color: color_code ,borderColor: color_code , borderRadius: "30px"}}>
            {event_name}
          </h6>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {long_description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-lg italic underline font-semibold">{price}</p>
          <Link>
            <button  className='btn font-main btn-primary text-white rounded-sm' > View Details</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
EventCard.propTypes = {
  event: PropTypes.object.isRequired,
};
export default EventCard;
