import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { GiLinkedRings, GiGlassCelebration } from "react-icons/gi";

const Testimonial = () => {
  const plugins = [
    new AutoPlay({ duration: 2000, direction: "NEXT", stopOnHover: false }),
  ];

  return (
    <div className=" md:w-[70%] mx-auto">
      <Flicking
        className="w-[80%] mx-auto"
        plugins={plugins}
        align="prev"
        circular={true}
        // onMoveEnd={(e) => {
        //   console.log(e);
        // }}
      >
        <div className="panel bg-gradient-to-tr from-white via-purple-100 to-white mx-6 w-full lg:w-fit rounded-xl rounded-ee-[155px] rounded-ss-[55px] h-fit">
          <div className="text-center p-6 rounded-xl border-4 border-fuchsia-500 rounded-ee-[150px] rounded-ss-[50px] h-fit">
            <p className="text-center  text-primary ">
              <GiLinkedRings className="w-full text-3xl md:text-8xl" />
            </p>
            <p className="lg:text-xl font-medium p-6">
              {" "}
              ``I could not have asked for a more perfect wedding day, and it is
              all thanks to the incredible team at Social Splash. From the
              moment we met, they understood our vision and worked tirelessly to
              bring it to life. Every detail was meticulously planned, and the
              day went off without a hitch. Our guests are still raving about
              how magical it was. Thank you for making our dream wedding a
              reality!``
            </p>

            <h2 className="text-center  text-2xl font-bold text-primary pt-4">
              Emily & Josh
            </h2>
            <h3 className="text-center pb-16 text-secondary text-lg py-2">
              - From a Bride
            </h3>
          </div>
        </div>
        <div className="panel bg-gradient-to-tr from-white via-blue-50 to-white mx-6 w-full lg:w-fit rounded-xl rounded-ee-[155px] rounded-ss-[55px] h-fit">
          <div className="text-center p-6 rounded-xl border-4 border-fuchsia-500 rounded-ee-[150px] rounded-ss-[50px] h-fit">
            <p className="text-center  text-primary ">
              <LiaBirthdayCakeSolid className="w-full text-3xl md:text-8xl" />
            </p>

            <p className="lg:text-xl font-medium p-6 ">
              {" "}
              ``I wanted to throw a surprise 30th birthday party for my wife,
              and I was overwhelmed with the logistics. That is when I found
              Social Splash. They took care of everything,
              from selecting the perfect venue to coordinating entertainment and
              catering. The party was a huge success, and my wife was genuinely
              surprised and thrilled. It was a night to remember, and I owe it
              all to their expertise and dedication``
            </p>

            <h2 className="text-center  text-2xl font-bold text-primary pt-4">
              James
            </h2>
            <h3 className="text-center pb-10 text-secondary text-lg py-2">
              - From a Birthday Party Client
            </h3>
          </div>
        </div>
        <div className="panel bg-gradient-to-tr from-white via-red-50 to-white mx-6 w-full lg:w-fit rounded-xl rounded-ee-[155px] rounded-ss-[55px] h-fit">
          <div className="text-center p-6 rounded-xl border-4 border-fuchsia-500 rounded-ee-[150px] rounded-ss-[50px]">
            <p className="text-center  text-primary ">
              <GiGlassCelebration className="w-full text-3xl md:text-8xl" />
            </p>
            <p className="lg:text-xl font-medium p-6 h-fit">
              {" "}
              ``I could not have asked for a more perfect wedding day, and it is
              all thanks to the incredible team at Social Splash. From the
              moment we met, they understood our vision and worked tirelessly to
              bring it to life. Every detail was meticulously planned, and the
              day went off without a hitch. Our guests are still raving about
              how magical it was. Thank you for making our dream wedding a
              reality!``
            </p>

            <h2 className="text-center  text-2xl font-bold text-primary pt-4">
              Sarah & Nick
            </h2>
            <h3 className="text-center pb-16 text-secondary text-lg py-2">
              - From an Anniversary Celebration
            </h3>
          </div>
        </div>
      </Flicking>
    </div>
  );
};

export default Testimonial;
