import { useLoaderData } from "react-router-dom";
import Header from "../../components/Header/Header";
import Events from "../../components/Events/Events";

const Home = () => {
  const events = useLoaderData();

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="py-12 bg-yellow-50">
        <h2 className="w-full text-center text-4xl font-semibold ">| Our Events |</h2>
        <hr className="w-40 mx-auto h-10 " />
        <Events events={events}></Events>
      </div>
    </>
  );
};

export default Home;
