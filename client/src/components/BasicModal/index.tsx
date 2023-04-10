import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { ReactComponent as ForgotPasswordIcon } from "assets/forgot-password.svg";
type BasicModalProps = {
  isOpen: boolean;
  title?: string;
  initialRef?: any;
  finalRef?: any;
  children?: React.ReactNode;
  onClose(): void;
};
const BasicModal = ({
  isOpen,
  onClose,
  initialRef,
  finalRef,
  children,
}: BasicModalProps) => {
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        {children}
      </Modal>
    </>
  );
};

BasicModal.Content = ({ children }: { children: React.ReactElement }) => {
  return children;
};
export default BasicModal;
