import { FormField } from "modules/auth/pages/Auth";

const InputField = ({
  idx,
  formField,
  handleForm,
  ...props
}: {
  idx: number;
  name: string;
  formField: FormField | undefined;
  handleForm(e: React.ChangeEvent<HTMLInputElement>): void;
}) => {
  return (
    <fieldset key={idx} className={` col-span-2 md:col-span-1 `}>
      <input
        {...props}
        value={formField?.[props?.name as keyof FormField] ?? ""}
        onChange={handleForm}
        className="input__class-regular   focus:!ring-green-accent-4/75 placeholder:text-xs text-green-accent-4 !py-2.5 placeholder:text-slate-400"
      />
    </fieldset>
  );
};
export default InputField;
