import { FiSend } from "react-icons/fi";

const FooterOne = () => {
  return (
    <div className="bg-dark-accent-3 p-4 border-b text-white">
      <div className="max-w-5xl h-24 w-full flex md:flex-row flex-col gap-y-5 justify-between items-center   mx-auto">
        <div className=" flex items-center gap-x-2 ">
          <FiSend size={"2em"} />
          <h1 className="font-semibold text-lg ">Sign Up For Newsletter</h1>
        </div>
        <fieldset className="flex transition-all duration-300 ease-in-out focus-within:ring focus-within:ring-orange-accent-2 items-center w-full max-w-lg justify-between bg-white  rounded-md flex-1 p-1 ">
          <input
            type="text"
            placeholder="Your Email..."
            className="outline-none bg-transparent text-sm pl-2 flex-1 placeholder:text-sm text-dark "
          />
          <button
            type="button"
            className="bg-dark-accent-3 hover:bg-transparent rounded-sm border border-transparent hover:border hover:border-dark-accent-3 hover:text-dark-accent-3 transition-all duration-300 ease-in-out   py-1 px-3"
          >
            Subscribe
          </button>
        </fieldset>
      </div>
    </div>
  );
};
export default FooterOne;
