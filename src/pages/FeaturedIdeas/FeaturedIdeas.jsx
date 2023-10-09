import Marquee from "react-fast-marquee";
import { AiFillHeart, AiOutlineDoubleRight } from "react-icons/ai";
import ArticlesRight from "../../components/ArticlesRight/ArticlesRight";
const FeaturedIdeas = () => {
  return (
    <div className="my-10 w-[80%] mx-auto">
      <h1 className="text-4xl font-black">Events & Party Ideas</h1>

      <div>
        <Marquee
          speed={30}
          pauseOnHover={true}
          className="my-10"
          gradient={true}
          gradientWidth={50}
        >
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  bg-amber-400 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            ALL (20)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-lime-600 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Wedding (20)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-fuchsia-400 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Birthday (10)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-rose-300 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Engagement (17)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-teal-400 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Night out (2)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-blue-400 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Bridal Shower (7)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-pink-400 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Bachelor Party(3)
          </div>
          <div className="md:w-44 md:h-14 px-4 py-2 text-xs md:text-base  border-slate-400 flex justify-center items-center border-2 font-semibold rounded-lg mx-4">
            Bridal Shower (5)
          </div>
        </Marquee>
      </div>

      <h2 className="text-2xl font-semibold">Recently Added on Ideas</h2>

      <div className="flex flex-col lg:flex-row lg:justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
          {/* Single card */}
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img src="https://plus.unsplash.com/premium_photo-1661657777704-8aacfc70692e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-lg md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                How Soon Is Too Soon for a Wedding Shower?
              </h4>
              <p className="mt-3 block font-sans text-base md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
                Here`s how to find the sweet spot for the shower.
              </p>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center -space-x-3">
                <AiFillHeart className="text-secondary text-2xl" />
              </div>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                January 10, 2023
              </p>
            </div>
          </div>
          {/* Single card */}
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img src="https://images.unsplash.com/photo-1574120153654-453fb26e6bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-lg md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                24 Engagement Party Dresses for impressing guest.
              </h4>
              <p className="mt-3 block font-sans text-base md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
                Celebrating a newly engaged couple? These engagement party
                dresses were made for the occasion.
              </p>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center -space-x-3">
                <AiFillHeart className="text-secondary text-2xl" />
              </div>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                March 12, 2023
              </p>
            </div>
          </div>
          {/* Single card */}
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img src="https://images.unsplash.com/photo-1513273216459-54c4833d6b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-lg md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Bridal Shower Guests Will Love These 22 Game Prizes
              </h4>
              <p className="mt-3 block font-sans text-base md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
                From coasters to coffee mugs, these gifts will keep attendees
                engaged.
              </p>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center -space-x-3">
                <AiFillHeart className="text-secondary text-2xl" />
              </div>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                January 10, 2023
              </p>
            </div>
          </div>
          {/* Single card */}
          <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto">
            <div className="relative m-0 overflow-hidden rounded-t-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              <img src="https://images.unsplash.com/photo-1589050820342-d666e6116a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" />
            </div>
            <div className="p-6">
              <h4 className="block font-sans text-lg md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Who Should You Invite to the Bachelorette Party?
              </h4>
              <p className="mt-3 block font-sans text-base md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
                It`s normal to have questions about who should actually get an
                invitation.
              </p>
            </div>
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center -space-x-3">
                <AiFillHeart className="text-secondary text-2xl" />
              </div>
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                January 10, 2023
              </p>
            </div>
          </div>
          <div className="join mx-auto border mb-10 md:col-span-2  ">
        <button className="join-item btn btn-active ">1</button>
            <button className="join-item btn ">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
            <button className="join-item btn btn-secondary"><AiOutlineDoubleRight/></button>
          </div>
        </div>
        
        <div className="lg:py-10  w-full mx-auto lg:w-fit">
          <ArticlesRight></ArticlesRight>
        </div>
      </div>
      {/* Cards starts */}
    </div>
  );
};

export default FeaturedIdeas;
