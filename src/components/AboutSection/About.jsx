import AnimateText from "../AnimateText";
import SectionTitle from "../SectionTitle";

const About = () => {
  return (
    <section className="flex-center flex-col">
      <SectionTitle title="About"></SectionTitle>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 banner py-5 px-2 ">
        <div>
          <img
            className="rounded-2xl w-full min-w-[100px]"
            src="https://i.ibb.co/qFFBD5b/Khalid-Hasan-React-developer.jpg"
          />
        </div>
        <div className="lg:col-span-2 rounded-2xl glass sm:p-6 p-3">
         d
        </div>
      </div>
    </section>
  );
};

export default About;
