import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Events from "../../components/Events/Events";
import Planning from "../../components/Planning/Planning";
import Testimonial from "../../components/Testimoninal/Testimonial";

const Home = () => {
  const events = useLoaderData();

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="py-12 bg-yellow-50" style={{
          backgroundImage: "url(/bgrepeat.png)",
        }}>
        <h2 className="w-full text-center text-4xl font-semibold bg-[#fffef1] ">| Our Event Services |</h2>
        <hr className="w-40 mx-auto h-10 " />
        <Events events={events}></Events>

      </div>
      <div>
        <Planning></Planning>
      </div>
      <div className="py-16 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 ">
      <h2 className="w-full text-center text-2xl md:text-4xl font-semibold  py-16 text-white" > People love us (and we love them!) </h2>
        <Testimonial></Testimonial>
      </div>
      
    </>
  );
};

export default Home;
