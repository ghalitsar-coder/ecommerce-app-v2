import { Image } from "@chakra-ui/react";
import Button from "components/Button";
import { Link } from "react-router-dom";
import Line from "../../SectionOr/Line";

type Props = {
  isLogin: boolean;
  handleAuth(): void;
};

const DetailAuthButtons = ({ isLogin, handleAuth }: Props) => {
  return (
    <div className="md:col-span-6 grid col-span-12 gap-y-5 md:col-start-4">
      <Button
        text={isLogin ? "Sign In" : "Sign Up"}
        color="green"
        buttonType="contained"
      />
      <Button
        text={isLogin ? "Create New Account" : "Already have an Account ?"}
        color="red"
        onClick={handleAuth}
        buttonType="contained"
      />

       

      <OrContinueWith />
      <AuthSigninOptions />
      <Terms />
      <TakeMeBackButton />
    </div>
  );
};
export default DetailAuthButtons;

const TakeMeBackButton = () => {
  return (
    <div className=" text-center    ">
      <h5 className="[&>span]:text-blue-400 [&>span]:font-semibold text-xs mt-4 text-center [&>span]:cursor-pointer  ">
        <Link to="/">
          <h3>Take me back!</h3>
        </Link>
      </h5>
    </div>
  );
};

const Terms = () => {
  return (
    <h5 className="[&>span]:text-blue-400 [&>span]:font-semibold text-xs mt-4 text-center [&>span]:cursor-pointer  ">
      By clicking button above, you agree to our
      <span> terms of use </span>
      and
      <span> privacy policies</span>
    </h5>
  );
};

const AuthSigninOptions = () => {
  return (
    <div className=" grid grid-cols-3 place-items-center [&>img]:cursor-pointer ">
      {[
        "https://img.icons8.com/fluency/48/null/google-logo.png",
        "https://img.icons8.com/glyph-neue/48/null/github.png",
        "https://img.icons8.com/fluency/48/null/facebook-new.png",
      ].map((url, key) => (
        <Image key={key} src={url} />
      ))}
    </div>
  );
};

const OrContinueWith = () => {
  return (
    <div className={`flex items-center px-3  my-5    bg w-full`}>
      <Line />
      <h3 className="flex text-sm px-3 font-semibold text-green-accent-4">
        Or Continue With
      </h3>
      <Line />
    </div>
  );
};
