import { Checkbox } from "@chakra-ui/react";

const ButtonsRememberAndForgotPassword = ({ onOpen }: { onOpen(): void }) => {
  return (
    <>
      <fieldset className="col-span-6 md:col-span-5    md:col-start-2">
        <Checkbox defaultChecked colorScheme={"teal"}>
          <span className="pl-1 whitespace-nowrap font-semibold">
            Remember for 30 days
          </span>
        </Checkbox>
      </fieldset>
      <fieldset className="col-span-6 md:col-span-5    md:col-start-7">
        <button
          onClick={onOpen}
          className="underline  w-fit ml-auto cursor-pointer text-green-accent-4 flex justify-end font-semibold"
        >
          Forgot Password
        </button>
      </fieldset>
    </>
  );
};

export default ButtonsRememberAndForgotPassword;
