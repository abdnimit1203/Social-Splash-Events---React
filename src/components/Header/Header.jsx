import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  AOS.init({ offset: 120, duration: 400, delay: 200, mirror: true });
  AOS.refresh();
  return (
    <div>
      {/* <img data-aos="fade-left" src="/lightLogo.png" alt="" /> */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/G7gh9M0/background.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-0 bg-gradient-to-tr from-[#b90baa9c] to-[#00000075]"></div>
        <div className="hero-content text-center">
          <div className="max-w-4xl text-white">
            <h1 data-aos="fade-right" className="mb-5 text-5xl font-bold ">
              Welcome to Social Splash
            </h1>
            <div
              data-aos="fade-right"
              className="flex items-center flex-col gap-2"
            >
              <h4 className="text-lg bg-[#11111179] w-fit">
                From Weddings Celebrations, Parties, and more -
              </h4>
              <h4 className="text-lg bg-[#11111179] w-fit">
                {" "}
                Do not fear, Take Heart!
              </h4>
            </div>
            <p data-aos="fade-right" className="text-xl italic mt-6">
              find{" "}
            </p>
            <p
              data-aos="fade-right"
              className=" font-main m-5 text-2xl font-semibold"
            >
              ONE-OF-A-KIND VENUES
            </p>
            <div  className="flex justify-center gap-4">
              <button className="btn btn-primary text-white px-6 rounded-sm">
                Start PLANNING
              </button>
              <button className="btn btn-secondary text-white px-6 rounded-sm">
                Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
