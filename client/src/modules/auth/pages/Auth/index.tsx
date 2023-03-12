import { useDisclosure } from "@chakra-ui/react";
import {
  DetailAuth,
  BasicModal,
  SectionGreeting,
  ForgotPasswordModal,
} from "modules/auth/components";
import SectionOr from "modules/auth/components/SectionOr";
import React from "react";

export interface FormField {
  username?: string;
  password?: string;
  email?: string;
  phoneNumber?: string;
}

const Auth = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <section
      id="auth"
      className="w-full min-h-screen py-10 px-3 md:px-0 bg-cream-accent-1 place-items-center grid gap-y-10"
    >
      <div className="container py-10 grid place-items-center rounded-xl  min-h-[68%] bg-cream-accent-2 md:p-10 md:px-0 ">
        <SectionGreeting />
        <SectionOr />
        <DetailAuth onOpen={onOpen} />
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
    </section>
  );
};

export default Auth;
