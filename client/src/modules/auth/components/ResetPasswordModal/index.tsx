import React from "react";
import { BasicModal } from "modules/auth/components";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import { ReactComponent as ForgotPasswordIcon } from "assets/forgot-password.svg";

type Props = {
  initialRef: any;
  title?: string;
  onClose(): void;
};

const ResetPasswordModal = ({ initialRef, onClose, title }: Props) => {
  return (
    <BasicModal.Content>
      <ModalContent className="">
        <ModalHeader textAlign={"center"}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <div className="h-auto w-[65%] mx-auto aspect-video">
            <ForgotPasswordIcon />
          </div>
          <div className="grid gap-y-5">
            <FormControl>
              <FormLabel>New Password</FormLabel>
              <Input
                focusBorderColor={"white"}
                ref={initialRef}
                placeholder="Your Password"
                type="password"
                className="focus:!ring-2 focus:!ring-green-accent-4/75"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                focusBorderColor={"white"}
                placeholder="Your Confirm Password"
                type="password"
                className="focus:!ring-2 focus:!ring-green-accent-4/75"
              />
            </FormControl>
          </div>

          <h3 className="text-xs mt-6  text-slate-400">
            If you are having trouble accessing your account, our password
            recovery process can help you reset your password and regain access.
          </h3>
        </ModalBody>
        <ModalFooter>
          <Button
            className="bg-green-accent-4/75 hover:bg-green-accent-4/90 active:bg-green-accent-4 basic__transition !text-white"
            variant={""}
            mr={3}
          >
            {/* <Spinner /> */}
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </BasicModal.Content>
  );
};

export default ResetPasswordModal;
