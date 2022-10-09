import { navbar } from "../constants";

export default function Navbar() {
  return (
    <nav className="w-full py-12 px-44 flex justify-between items-center">
      {/* Brand */}
      <div>
        <h1 className="text-xl  font-extrabold uppercase text-gray-800">
          {navbar.brand}
        </h1>
      </div>
      <div className="flex space-x-32 items-center">
        <div className="flex space-x-12 items-center">
          {navbar.links.map((link) => {
            const [text, href] = link;

            return (
              <a className="font-bold text-gray-800" href={href}>
                {text}
              </a>
            );
          })}
        </div>
        <div className="flex items-center space-x-12">
          <button className="font-bold text-indigo-700">Register</button>
          <button className="btn-primary">contact</button>
        </div>
      </div>
    </nav>
  );
}
