import { useLoaderData, useParams } from "react-router-dom";
import { BiSolidHeartCircle } from "react-icons/bi";

const SingleEventCard = () => {
  const { id } = useParams();
  console.log(id);
  const events = useLoaderData();
  const myEvent = events.find((event) => event.id == id);
  console.log(myEvent);
  const {
    ratings,
    contact_info,
    key_features,
    product_description,
    product_name,
    image_cover,
    event_name,
  } = myEvent;


  return (
    <div>
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url(${image_cover})`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">{event_name}</h1>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[75%] mx-auto my-10 text-xl space-y-4 md:space-y-6 text-slate-700">
        <div className="flex justify-between">
        <p className="text-4xl font-bold"><span className="font-bold font-main text-primary">Event Name : </span>{ product_name }</p>
    
        <p ><BiSolidHeartCircle className="text-rose-500"/>{ratings}</p>
        </div>
        <hr className="w-full"/>
        <h2 className="font-semibold text-primary">Description:</h2>
        <p>{ product_description }</p>
        <h2 className="font-semibold text-primary">Key Features:</h2>
        <ul className="list-decimal space-y-4 p-3 md:p-8">{ key_features.map((keys,id)=><li key={id}><span className="font-semibold text-black">{keys.split(":")[0]}</span> : {keys.split(":")[1]}</li>) }</ul>
        <p>{ contact_info }</p>
        <p>{  }</p>
        <button>Book you order now!</button>
      </div>

      <div className="bg-slate-700 text-white">
        <div className="p-20">

        <p>Rates are determined on a case by case basis. Contact us for more information.</p>
        </div>
      </div>
    </div>
  );
};

export default SingleEventCard;
