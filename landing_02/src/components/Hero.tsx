import { heroSection } from "../constants";
import heroImg from "../assets/hero/hero-img.png";
import Features from "./Features";

export default function Hero() {
  console.log(heroSection.title);
  return (
    <section className=" px-44  overflow-hidden py-8">
      <div className="flex items-end justify-between">
        <div className="flex flex-col space-y-12 max-w-2xl  self-center">
          <h1 className="font-serif text-7xl font-extrabold text-gray-800 whitespace-pre leading-snug">
            {heroSection.title}
          </h1>
          <div className="max-w-lg">
            <p className="text-gray-700  text-lg">{heroSection.subTitle}</p>
          </div>
          <button className="btn-primary w-max">{heroSection.button}</button>
        </div>
        <div className="max-w-3xl ">
          <img className="" src={heroImg} />
        </div>
      </div>
    </section>
  );
}
