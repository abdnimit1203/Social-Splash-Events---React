import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const UpcomingEvents = () => {
  return (
    <div>
      <div
        className="hero h-[216px]"
        style={{
          backgroundImage: "url(/formImg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <h2 className="text-center text-4xl font-bold py-16 text-white">
          {" "}
          OUR UPCOMING EVENTS!
        </h2>
      </div>
      <div className="w-[80%] mx-auto h-10 my-10 flex">
        <button className="btn rounded-none btn-secondary">Top Updates: </button>
      <Marquee className="border h-12">
        <span className="font-bold px-3">Ongoing Events :</span> Wedding party at Manitoba , convention hall organised by Social Splash on August 22th ,2023. Special guest arrived at the party : Justin Trudeau || Birthday party at Dhaka , Party center hall organised by Social Splash on October 2nd , 2023 with great success! || <span className="font-bold px-3 text-secondary">SALE! SALE! SALE!</span> October -November 2023 we are providing huge sale on any event purchased!
      </Marquee>
      </div>
      {/* hero events */}
      <div className="hero min-h-screen" style={{backgroundImage: 'url(/upcomingevents.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 bg-black"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md hidden lg:block">
      <h1 className="mb-5 text-5xl font-bold capitalize">Events we are eagerly planning for</h1>
      <p className="mb-5 max-w-sm">Join Our live event show on the date mentioned. Create a Account if you dont have one!</p>
      <Link to={"/registration"}>
      
      <button className="btn btn-secondary btn-wide rounded-sm transition duration-300 ease-in-out hover:scale-110">Register</button>
      </Link>
    </div>
    <div className="min-h-screen flex flex-col justify-center gap-8  bg-[#11111183] lg:pl-20">
    <div className="flex px-6 transition duration-300 ease-in-out hover:scale-110">
        <div className="aspect-square bg-slate-800 font-bold uppercase p-6 flex flex-col justify-center items-center"><span className="font-black text-4xl">14</span><span>October</span> </div>
        <div className=" text-slate-800 bg-[#ffffffef] flex justify-center items-start flex-col text-left px-3 py-6">
            <h2 className="font-bold md:text-xl">Wedding Ceremony : Joe & Monica </h2>
            <p className="pr-4 max-w-sm py-4">A wonderful event for the two loving couples most memorable day of Life</p>
            <button className="btn border-secondary btn-sm rounded-sm text-secondary border-2">Details</button>
        </div>
    </div>
    <div className="flex px-6 transition duration-300 ease-in-out hover:scale-110">
        <div className="aspect-square bg-secondary font-bold uppercase p-6 flex flex-col justify-center items-center"><span className="font-black text-4xl">24</span><span> October  </span> </div>
        <div className=" text-slate-800 bg-[#ffffffdc] flex justify-center items-start flex-col text-left px-3 py-6">
            <h2 className="font-bold md:text-xl">Baby Shower : Bonnie and Clyde. </h2>
            <p className="pr-4 max-w-sm py-4">What a great day of life! Coming to know what your child gender reveal and baby shower!</p>
            <button className="btn btn-secondary btn-sm rounded-sm border-2">Details</button>
        </div>
    </div>
    <div className="flex px-6 transition duration-300 ease-in-out hover:scale-110">
        <div className="aspect-square bg-primary font-bold uppercase p-6 flex flex-col justify-center items-center"><span className="font-black text-4xl">30</span><span>October</span> </div>
        <div className=" text-slate-800 bg-[#fffffff3] flex justify-center items-start flex-col text-left px-3 py-6">
            <h2 className="font-bold md:text-xl">Wedding Ceremony :  Sonny & Cher. </h2>
            <p className="pr-4 max-w-sm py-4">A wonderful event for the two loving couples most memorable day of Life</p>
            <button className="btn btn-primary btn-sm rounded-sm text-white border-2">Details</button>
        </div>
    </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default UpcomingEvents;
