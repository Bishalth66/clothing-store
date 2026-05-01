import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-screen font-primary">
      <div className="relative w-full h-full max-h-screen">
        <Image
        src={'/hero-image.png'}
        alt=""
        fill 
        className="object-cover aspect-4/3"
        />
        <div className="absolute inset-0 w-full h-full flex flex-col justify-center  max-w-7xl mx-auto ">
            <h1 className="text-white text-8xl font-bold">Effortless Style, <br></br>Every Day.</h1>
            <button className="bg-white py-3 px-6 max-w-fit mt-4 uppercase rounded-md"> Shop Now</button>
        </div>

      </div>
    </div>
  );
};

export default Hero;