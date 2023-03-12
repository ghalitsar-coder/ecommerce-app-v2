import { BsFillTelephoneFill } from "react-icons/bs";
import { IoHomeSharp, IoMailSharp, IoTimeSharp } from "react-icons/io5";
type Props = {};
export const arrOfFormContact = ["name", "email", "phone number", "comment"];

export const arrOfInformationDetails = [
  {
    icon: <IoHomeSharp className="fill-slate-500" />,
    label: "33 New Montgomery St. Ste 59 San Francisco CA. USA 95105",
  },
  {
    icon: <BsFillTelephoneFill className="fill-slate-500" />,
    label: "(+21)9-293-4844",
  },
  { icon: <IoMailSharp className="fill-slate-500" />, label: "demo@gmail.com" },
  {
    icon: <IoTimeSharp className="fill-slate-500" />,
    label: "Monday - Friday 10 AM - 9 AM",
  },
];
