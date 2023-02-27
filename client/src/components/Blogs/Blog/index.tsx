import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  item: string;
};

const Blog = (props: Props) => {
  return (
    <div className="bg-white lg:col-span-1 rounded-lg shadow-md overflow-hidden col-span-2 ">
      <div className="w-full bg-red-300">
        <Image
          src={`images/${props?.item}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-3 px-2.5 grid gap-y-2">
        <p className="text-xs text-slate-500 ">11 June, 2022</p>
        <h2 className="text-sm font-semibold ">
          {" "}
          Feugiat molestie ipsum aliquam vivamus{" "}
        </h2>
        <p className="text-[10px] text-muted-accent-1 ">
          Porttitor proin sollicitudin consectetur enim tempor pharetra mollis
          inceptos. Feugiat nisl ut tortor eros nascetur senectus.
        </p>
        <button className="rounded-full mt-3 w-fit px-5 !text-xs lg:text-sm py-2 bg-dark-accent-3 uppercase text-white ">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Blog;
