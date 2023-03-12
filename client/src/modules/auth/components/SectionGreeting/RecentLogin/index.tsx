import { Image } from "@chakra-ui/react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiVolumeUp } from "react-icons/hi";
import { IoIosCloseCircle, IoMdAdd } from "react-icons/io";
import { IoPlaySkipForward } from "react-icons/io5";

const users = [
  {
    name: "Zain Sajid",
    image:
      "https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?w=996&t=st=1678521537~exp=1678522137~hmac=a0e2267f6a34f296feae6f4be544271ce63fdc5c093010b5e2b4003c8031dd81",
  },
  {
    name: "Hanna luke",
    image:
      "https://img.freepik.com/free-photo/image-young-asian-business-woman-female-entrepreneur-glasses-holding-tablet-looking-professional-glasses-white-background_1258-89375.jpg?w=996&t=st=1678521504~exp=1678522104~hmac=7cde6d21946182ffbe1ba6d5ded8031cf6cc1abba5e72484f275d23eb771ff13",
    icon: <IoPlaySkipForward />,
    icon2: <AiOutlineAudioMuted />,
    icon3: <HiVolumeUp />,
  },
];

const RecentLogin = () => {
  return (
    <div className="">
      <h3 className="text-lg mb-4 md:text-left text-center my-7 text-green-accent-4 font-semibold">
        Recent logins
      </h3>
      <ul className="flex gap-x-4 items-center">
        {users?.map((item, idx) => (
          <li key={+idx}>
            <div
              className={`rounded-xl p-1.5 h-[100px] w-[100px] bg-white relative cursor-pointer hover:-translate-y-1 basic__transition hover:shadow-lg  `}
            >
              <span className="absolute top-1.5 left-1 cursor-pointer">
                <IoIosCloseCircle className="fill-red-accent-2/75" />
              </span>
              <span className="absolute top-1.5 right-1 cursor-pointer">
                <BsThreeDotsVertical />
              </span>
              <div className="grid gap-y-4 place-items-center">
                <div className="w-11 h-11 overflow-hidden rounded-full ">
                  <Image
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xs text-center text-green-accent-4  ">
                  {" "}
                  {item.name}{" "}
                </h3>
              </div>
            </div>
          </li>
        ))}
        <li>
          <div
            className={`rounded-xl  h-24 w-24 bg-red-accent-2 relative cursor-pointer grid   hover:-translate-y-1 basic__transition hover:shadow-lg`}
          >
            <div className="grid place-items-center">
              <div className="w-11 h-11   shadow-lg bg-white/50 flex backdrop-blur-sm overflow-hidden rounded-full ">
                <IoMdAdd className="text-[25px] m-auto fill-white " />
              </div>
              <h3 className="text-white -translate-y-[5px] text-center text-xs">Add Account</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default RecentLogin;
