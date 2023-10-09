const About = () => {
  return (
    <div>
       <div
        className="hero "
        style={{
          backgroundImage: "url(/about.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black">
            
        </div>
        <h2 className="text-center text-4xl font-bold py-16 text-white">
          {" "}
          ABOUT US
        </h2>
        <p className="text-center  py-16 text-white mt-16 flex-wrap">No idea where to start? Social Splash is here to help!</p>

      </div> 
      <div className="flex flex-col justify-center items-center w-[80%] mx-auto gap-6 py-10 lg:py-20">
        <h2 className="text-xl font-bold text-center text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Social Splash events is your one stop event planning and design
          company.
        </h2>
        <p>
          At Social Splash team, we are more than just event planners , we are
          dream weavers, memory-makers, and your partners in crafting
          unforgettable moments. Our dedicated team of experienced professionals
          is passionate about turning your vision into reality, ensuring that
          every social event we touch is a resounding success.
        </p>

      </div>
      <div>
        <div>
          <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
              <img
                alt="Welcome"
                src="/about.jpg"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="w-full px-[10%] py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 bg-slate-700 text-white h-full">
              <div className="mx-auto max-w-lg">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  ABOUT YOUR EVENT PLANNING TEAM
                </h2>

                <p className="mt-4">
                  Behind every successful event, there is a team of passionate
                  individuals committed to making it happen. Our team comprises
                  event planners, designers, coordinators, and creative minds,
                  each bringing their unique talents and expertise to the table.
                  We thrive on creativity, collaboration, and the joy of seeing
                  your vision come to life.
                </p>
                <p className="mt-4">Our event planners, with years of industry experience, are the architects of your celebration, crafting intricate blueprints to ensure every detail aligns with your desires. Our visionary designers breathe life into these plans, transforming venues into enchanting settings that reflect your unique style. Our meticulous coordinators work tirelessly behind the scenes, ensuring that every aspect runs seamlessly, leaving you to enjoy your event without worry.</p>
                <p className="mt-4">But what truly sets our team apart is our shared passion for creativity and innovation. We thrive on the thrill of brainstorming fresh ideas, collaborating closely with you to understand your aspirations, and channeling our collective energy into crafting exceptional moments. It`s the joy we derive from seeing your vision come to life that fuels our dedication.</p>
              </div>
            </div>
          </section>
        </div>
        <div className="px-[10%] py-10 space-y-4 lg:w-[80%] mx-auto">
            <h2 className="header transition duration-300 ease-in-out hover:scale-105 py-10">Why Choose Us?</h2>
            <li> <span className="font-bold">Expertise:</span> Our team boasts years of expertise in planning and executing social events, including weddings, birthday parties, anniversaries, engagement parties, retirement parties, and baby showers. We have a deep understanding of the unique nuances and requirements of each event type, and we tailor our services to match your specific needs.</li>
            <li> <span className="font-bold">Personalization:</span> We believe that every event is a reflection of your style, personality, and story. Thats why we take the time to get to know you and your preferences. Whether you dream of an elegant wedding, a fun-filled birthday bash, or a heartwarming anniversary celebration, we personalize every detail to ensure its a perfect fit for you.</li>
            <li> <span className="font-bold">Attention to Detail:</span> From the grandest design elements to the tiniest details, we leave no stone unturned. Our meticulous approach ensures that every aspect of your event is executed flawlessly. We pride ourselves on our ability to create an immersive experience for you and your guests.</li>
            <li> <span className="font-bold">Trusted Network:</span> Over the years, we have built strong relationships with top-tier vendors, including photographers, caterers, decorators, and entertainers. Our extensive network allows us to connect you with the best professionals in the industry, ensuring a seamless and exceptional event.</li>
            <li> <span className="font-bold">Stress-Free Experience:</span> Planning social events can be overwhelming, but we`re here to alleviate that stress. We take care of the logistics, coordination, and troubleshooting, so you can relax and enjoy the celebration without worry.</li>
            <li> <span className="font-bold">Client-Centric Approach:</span> Your happiness and satisfaction are our top priorities. We are dedicated to providing you with exceptional service, open communication, and a seamless planning process. Your event`s success is our ultimate goal.</li>
        </div>
      </div>
    </div>
  );
};

export default About;
