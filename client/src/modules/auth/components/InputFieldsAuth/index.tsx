import { FormField } from "modules/auth/pages/Auth";
import React from "react";
import InputField from "./InputField";
const fields = [
  {
    name: "username",
    type: "text",
    placeholder: "Username",
  },
  {
    name: "phoneNumber",
    type: "text",
    placeholder: "Phone number",
  },
  {
    name: "email",
    type: "text",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];
type Props = {
  formField: FormField | undefined;
  isLogin: boolean;
  handleForm(e: React.ChangeEvent<HTMLInputElement>): void;
};

const InputFieldsAuth = ({ formField, handleForm, isLogin }: Props) => {
  const renderFields = React.useMemo(() => {
    let arr;
    if (isLogin) {
      const loginFields = ["username", "password"];
      arr = fields.filter((field) => loginFields.includes(field.name));
    } else {
      arr = fields;
    }
    return arr;
  }, [isLogin]);

  return (
    <div className="grid gap-5 gap-x-10 col-span-12 md:col-span-10 md:col-start-2 grid-cols-2">
      {renderFields.map((item, idx) => (
        <InputField
          formField={formField}
          idx={idx}
          key={idx}
          {...item}
          handleForm={handleForm}
        />
      ))}
    </div>
  );
};

export default InputFieldsAuth;
