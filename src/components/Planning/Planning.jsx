const Planning = () => {
  return (
    <div>
      {/* start */}
      <h2 className="w-full text-center text-2xl md:text-3xl font-bold py-10">
        | We’ll walk you through every part of planning |
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 lg:p-20">
        <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border py-10">
          <div className="p-6  text-center space-y-2">
            <h4 className="text-sm font-semibold">SPREAD THE WORD</h4>
            <h2 className="text-2xl font-bold">Your announcements</h2>

            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              Get your guests excited to RSVP. Send out save-the-dates and start
              a (free!) wedding website to keep them up to date.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block mx-auto rounded-full select-none bg-blue-gray-900/10 py-3 px-6 text-center align-middle border w-fit font-semibold text-primary border-primary"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src="/planning1.JPG" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* end */}
        <div className="relative flex w-80 flex-col rounded-xl bg-teal-50 bg-clip-border text-gray-700 shadow-md border py-8  lg:h-fit lg:my-auto">
          <div className="p-6  text-center space-y-2">
            <h4 className="text-sm font-semibold">SPREAD THE WORD</h4>
            <h2 className="text-2xl font-bold">Your announcements</h2>

            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
              Get your guests excited to RSVP. Send out save-the-dates and start
              a (free!) wedding website to keep them up to date.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block mx-auto rounded-full select-none bg-blue-gray-900/10 py-3 px-6 text-center align-middle border w-fit font-semibold text-primary border-primary"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src="/planning1.JPG" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* end */}
        <div className="relative flex w-80 flex-col rounded-xl bg-[white] bg-clip-border text-gray-700 shadow-md border py-10 ">
          <div className="p-6  text-center space-y-2">
            <h4 className="text-sm font-semibold">BUILD YOUR WISH LIST</h4>
            <h2 className="text-2xl font-bold">Your registry</h2>

            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Let your guests know exactly what you want. Add gifts from The Knot Registry Store, sync your other registries, add cash funds and more.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="block mx-auto rounded-full select-none bg-blue-gray-900/10 py-3 px-6 text-center align-middle border w-fit font-semibold text-primary border-primary"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
            <img src="/planning3.png" className="h-full w-full object-cover" />
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Planning;
