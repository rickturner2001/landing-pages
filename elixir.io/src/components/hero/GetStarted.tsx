import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { heroSection } from "../../constants";

const GetStarted = ({ className }: { className: string }) => {
  return (
    <div
      className={`group ${
        className ? className : ""
      }  h-44 w-44 bg-blue-gradient rounded-full  p-1`}
    >
      <div className="bg-primary group-hover:bg-blue-gradient group-hover:bg-red-200clear h-full w-full rounded-full">
        <div className="flex h-full w-full justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="flex space-x-2 items-center">
              <p className=" text-gradient group-hover: font-bold text-2xl">
                {heroSection.buttonTop}
              </p>
              <heroSection.buttonImg className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="text-gradient font-bold text-2xl">
                {heroSection.buttonBottom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
