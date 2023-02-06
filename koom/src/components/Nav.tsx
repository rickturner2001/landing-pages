import { navigation } from "../constants";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between bg-blue-50 px-10 py-4">
      {/* Left Side (Logo) */}
      <div>
        <h1 className="text-2xl font-extrabold text-blue-500">
          {navigation.brand}
        </h1>
      </div>
      {/* Center (Links) */}
      <div className="flex space-x-12">
        {navigation.links.map((link) => {
          const [text, href] = link;
          return (
            <a
              key={href}
              className=" text-md font-bold  text-gray-700"
              href={href}
            >
              {text}
            </a>
          );
        })}
      </div>
      {/* Right Side (Actions) */}
      <div className="flex items-center space-x-6">
        <button className="font-bold text-blue-700">Login</button>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
}
