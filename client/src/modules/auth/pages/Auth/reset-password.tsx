import React, { useEffect } from "react";

import {
  BasicModal,
  ForgotPasswordModal,
  ResetPasswordModal,
} from "modules/auth/components";
import { useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

type Props = {};

const ResetPassword = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const navigate =useNavigate()
  useEffect(() => {
    onOpen();
  }, []);

  const handleClose = () => { 
    navigate('/auth')
    onClose()
   }

  return (
    <section
      id="reset-password"
      className="w-screen h-screen bg-cream-accent-1"
    >
      <BasicModal
        initialRef={initialRef}
        finalRef={finalRef}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <ResetPasswordModal
          title={"Reset Password"}
          onClose={handleClose}
          initialRef={initialRef}
        />
      </BasicModal>
    </section>
  );
};

export default ResetPassword;
