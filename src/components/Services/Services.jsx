import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Services = () => {
  return (
    <>
      <h2 className="w-full text-center text-3xl font-semibold uppercase ">
        {" "}
        SERVICES INCLUDE{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-10 gap-10 justify-center items-center w-[90%] mx-auto">
        <div className="max-w-xs   ">
          <h2 className="font-semibold text-xl">Day of Coordination</h2>
          <ul className="py-8 space-y-2">
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                2 hours of professional in-person consultation  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
              Venue walkthrough prior to wedding
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
              Contract reviews of all vendors
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
              Vendor confirmation and management
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
                
                Development of a detailed wedding day timeline and layout
                
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
                Assistance with wedding set-up and tear down  
            </li>
          </ul>
          <button className="btn border-secondary rounded-sm hover:btn-secondary text-secondary bg-white">Purchase</button>
        </div>
        <div className="max-w-xs   ">
          <h2 className="font-semibold text-xl">Full Service Planning</h2>
          <ul className="py-8 space-y-2 list-disc">
            <li className="flex text-slate-500 text-sm">
              <AiFillHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
                
                Unlimited consultations with client via telephone/email (when
                available)
                
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiFillHeart className="my-1  mr-4 text-xl text-rose-600" />
                
                Full wedding planning timeline formation and management
                
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiFillHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
                Budget formation and management  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiFillHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
                Assistance with wedding design  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiFillHeart className="my-1  mr-4 text-xl text-rose-600" />{" "}
                Vendor referrals  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiFillHeart className="my-1  mr-4 text-xl text-rose-600" />
                
                {" "}
                Attendance at all vendor meetings (schedule permitting)
                
            </li>
          </ul>
          <button className="btn  rounded-sm btn-secondary">Purchase</button>
        </div>
        <div className="max-w-x ">
          <h2 className="font-semibold text-xl">Exclusive Deal</h2>
          <ul className="py-8 space-y-2">
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Reviewing wedding budget  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Reviewing wedding planning timeline  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Pulling together design ideas  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Suggesting vendors  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Reviewing venue options  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Centerpiece design and assembly  
            </li>
            <li className="flex text-slate-500 text-sm">
              <AiOutlineHeart className="my-1  mr-4 text-xl text-rose-600" />
                 Wedding favor design and assembly  
            </li>
          </ul>
          <button className="btn  rounded-sm btn-secondary">Purchase</button>
        </div>
      </div>
    </>
  );
};

export default Services;
