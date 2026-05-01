

const Hero = () => {
  return (
    <div className="w-full h-[89vh] font-primary">
      <div className="relative w-full h-full">
        <video src={'/hero.mp4'} autoPlay muted loop className="w-full h-full object-cover" ></video>
        <div className="absolute inset-0 px-10  w-full h-full flex flex-col justify-center  ">
            <h1 className="text-white text-6xl lg:text-8xl font-bold tracking-tight">Effortless Style, <br></br>Every Day.</h1>
            <button className="bg-white py-3 px-6 max-w-fit mt-4 uppercase rounded-md"> Shop Now</button>
        </div>

      </div>
    </div>
  );
};

export default Hero;