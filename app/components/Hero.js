const Hero = () => {
  return (
    <div className="hero mt-6 md:mt-10 mb-6 md:min-h-8 text-white flex justify-between items-center relative p-7 md:p-10 rounded-xl">
      <div className="z-10">
        <span className="text-md font-semibold">Sale</span>
        <h2 className="text-3xl font-semibold md:text-5xl uppercase my-2">
          Up to <br /> 50% OFF
        </h2>
        <p className="mb-6">Further Reductions</p>
        <a
          href="/"
          className="px-4 bg-gray-700 py-2 text-sm uppercase hover:bg-green-700 cursor-pointer text-white rounded"
        >
          Shop Now
        </a>
      </div>
      <img
        src="./images/user.png"
        alt="hero-png"
        className="max-w-[200px] md:max-w-[300px] object-cover absolute bottom-0 right-2 md:right-10"
      />
    </div>
  );
};

export default Hero;
