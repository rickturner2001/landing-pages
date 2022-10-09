import { heroSection } from "../constants";

export default function Hero() {
  return (
    <section id="hero" className=" w-full  bg-cover bg-no-repeat">
      <div className=" h-[88vh] w-full  bg-opacity-40 bg-gradient-to-b  from-sky-300/60 to-white py-32">
        <div className="mx-auto flex max-w-2xl flex-col space-y-12">
          <h1 className="text-center text-6xl font-extrabold leading-tight text-veryDarkBlue">
            {heroSection.title}
          </h1>
          <p className="text-bold text-center text-lg leading-relaxed text-gray-800">
            {heroSection.subtitle}
          </p>

          <div className="relative mx-auto w-[90%]">
            <input
              type="text"
              placeholder={heroSection.formPlaceholder}
              className=" w-full rounded-2xl border border-gray-50 p-5 focus:outline-none"
            />
            <button className="btn-primary absolute right-2 -top-1/2  w-max translate-y-[130%]   ">
              {heroSection.fromBtn}
            </button>
            <p className="text-bold mt-4 text-center text-sm leading-relaxed text-gray-800">
              {heroSection.formDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
