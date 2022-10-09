import { features } from "../constants";

export default function Features() {
  return (
    <section className="max-w-[80%] ml-auto flex">
      {features.map((feature) => {
        return (
          <div
            className={`${
              feature.isFeatured
                ? "bg-gradient-to-br from-violet-300 to-indigo-500 text-white"
                : "bg-white"
            } flex flex-col space-y-12 p-8 text-left w-1/3`}
          >
            <div>
              <feature.icon
                className={`w-16 h-16 ${
                  feature.isFeatured ? "fill-white" : "fill-indigo-400"
                } `}
              />
            </div>
            <div className="max-w-[17rem]">
              <h3 className="text-2xl font-bold fong-serif ">
                {feature.title}
              </h3>
            </div>
            <div className="max-w-[17rem]">
              <p className="">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
