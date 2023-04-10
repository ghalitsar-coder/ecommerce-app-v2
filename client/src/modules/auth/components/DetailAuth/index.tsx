import { FormField } from "modules/auth/pages/Auth";
import React from "react";
import InputFieldsAuth from "../InputFieldsAuth";
import ButtonsRememberAndForgotPassword from "./ButtonsRememberAndForgotPassword";
import DetailAuthButtons from "./DetailAuthButtons";
const DetailAuth = ({ onOpen }: { onOpen(): void }) => {
  const [formField, setFormField] = React.useState<FormField | undefined | {}>(
    {}
  );
  const [isLogin, setIsLogin] = React.useState(true);

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormField((prev: FormField | undefined) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAuth = () => {
    setIsLogin((prev) => !prev);
    setFormField({});
  };

  return (
    <div className="px-3 max-w-6xl  w-full">
      <div className="   p-5 bg-white rounded-xl">
        <div className="grid grid-cols-12 gap-5  !w-full  ">
          <InputFieldsAuth
            formField={formField}
            handleForm={handleForm}
            isLogin={isLogin}
          />
          <ButtonsRememberAndForgotPassword onOpen={onOpen} />
          <DetailAuthButtons isLogin={isLogin} handleAuth={handleAuth} />
        </div>
      </div>
    </div>
  );
};

export default DetailAuth;
