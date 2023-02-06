import { featuresSection } from "../constants";

export default function Features() {
  return (
    <section className="w-full bg-white pb-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-center space-y-12 md:flex-row md:space-y-0 md:space-x-12">
        {featuresSection.map((feature) => {
          return (
            <div
              key={feature.title}
              className="flex w-1/3 flex-col space-y-6 rounded-2xl bg-blue-50/70 p-10 "
            >
              <div className="mx-auto w-max rounded-3xl bg-white p-4 shadow-md">
                <feature.icon className="h-10 w-10 fill-blue-500" />
              </div>
              <div className="flex flex-col space-y-4 text-center">
                <h3 className="text-3xl font-bold">{feature.title}</h3>
                <p className="text-lg text-gray-500">{feature.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
