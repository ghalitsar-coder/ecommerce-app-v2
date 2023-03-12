import { useDisclosure } from "@chakra-ui/react";
import { IoPlaySkipForward } from "react-icons/io5";
import RecentLogin from "./RecentLogin";
import React from "react";
import {
  DetailAuth,
  BasicModal,
  ForgotPasswordModal,
} from "modules/auth/components";

const SectionGreeting = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <div className="grid w-full gap-y-5">
        <div className="grid  gap-y-4 text-center text-green-accent-4">
          <h1 className="lg:text-6xl   text-4xl  ">Welcome back</h1>
          <h3 className="md:text-base text-sm">
            Join the world`s largest community{" "}
          </h3>
        </div>
        <div className="flex gap-10 md:flex-row flex-col md:items-end items-center justify-center max-w-6xl w-full mx-auto  ">
          <RecentLogin />
          <div className="flex justify-center rounded-lg items-center gap-x-5">
            <button
              className={`rounded-xl p-1.5 h-24 w-24   cursor-pointer grid place-content-center gap-y-5 `}
            >
              <h3 className=" text-center text-lg font-semibold text-green-accent-4 ">
                Sign Up help
              </h3>
            </button>
            <div className="grid justify-center  gap-y-3">
              <div className="bg-yellow-300 rounded-xl grid place-items-center cursor-pointer w-10 h-10">
                <IoPlaySkipForward className="fill-white" />
              </div>
              <h4 className="text-sm text-green-accent-4 max-w-[200px] underline underline-green-accent-4 cursor-pointer ">
                This video will help you to create a new account{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <BasicModal
        initialRef={initialRef}
        finalRef={finalRef}
        title={"Forgot Password"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ForgotPasswordModal onClose={onClose} initialRef={initialRef} />
      </BasicModal>
    </>
  );
};
export default SectionGreeting;
