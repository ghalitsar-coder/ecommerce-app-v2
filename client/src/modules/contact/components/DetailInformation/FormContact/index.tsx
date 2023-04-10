import Button from "components/Button";
import { Fragment, useState } from "react";
import { arrOfFormContact } from "../constant";

const FormContact = () => {
  const [formData, setFormData] = useState<{} | { [key: string]: string }>({});

  return (
    <div className="col-span-2 md:col-span-1 ">
      {" "}
      <h1 className="font-semibold mb-5 text-2xl">Contact</h1>
      <div className="grid gap-y-5">
        {arrOfFormContact?.map((item) => (
          <Fragment key={item}>
            <fieldset>
              <input
                type="text"
                className=" basic__border input__class-regular placeholder:capitalize "
                placeholder={item}
                name={item}
                value={formData[item as keyof typeof formData] ?? ""}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [item]: e.target.value,
                  }))
                }
              />
            </fieldset>
          </Fragment>
        ))}
        <Button
          text={"Submit"}
          buttonType="contained"
          color="dark"
          buttonClass={"!py-1.5 w-fit px-7 !rounded-full"}
          rounded={"full"}
        />
      </div>
    </div>
  );
};

export default FormContact;
