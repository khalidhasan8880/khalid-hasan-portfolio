import AnimateText from "@/components/AnimateText";
import Link from "next/link";
// import Image from "next/image";
const Banner = () => {
  return (

    <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 banner py-5 px-2 items-center">
      <div>
        <img
          className="rounded-2xl w-full min-w-[100px]"
          src="https://i.ibb.co/x3jYLqD/banner-Image.jpg"
        />
      </div>
      <div className="lg:col-span-2 rounded-2xl ">
        <div className="rounded-2xl md:px-5 px-3 py-9 md:py-4">
          <AnimateText title="Hi, i am" classNames="text-xl" animateDelay={0.1}></AnimateText>
          <AnimateText
            title="Khalid Hasan"
            animateDelay={0.6}
            classNames=" sm:text-5xl text-3xl mb-1"></AnimateText>

          <AnimateText
          animateDelay={0.8}
            title="Junior MERN-Stack Web Developer"
            classNames="bg-[#01439C] text-white sm:text-3xl text-2xl px-2 py-1"></AnimateText>

          <p className="mt-5">
            I am patient and motivated Web Developer. Exploring new technologies
            and a strong aptitude for critical thinking. Strong foundation in
            modern web development. Experienced in building dynamic and
            responsive user interfaces using React.js
          </p>
          <button className="mt-8 px-6 py-3 bg-[#0091ff] font-semibold text-white rounded-full shadow-2xl shadow-[#0091ff] hover:shadow-none transition-all duration-700 border-none outline-none">
            Download Resume
          </button>
          <a href='#contact' className="mt-8 px-6 py-3 bg-[#01439C]  ms-5 font-semibold text-white rounded-full  shadow-[#01439C] border-none outline-none">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
