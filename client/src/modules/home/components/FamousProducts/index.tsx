import React from "react";

type Props = {};

const famousProducts = [
  {
    label: "Big Screen",
    title: "Smart Watch Series 8",
    subtitle: "From $399 or $16.52/mo for 24 mo",
  },
  {
    label: "Studio Display",
    title: "600 Nits of Brightness",
    subtitle: `27" 5k Retina Display`,
  },
  {
    label: "Iphone",
    title: "Iphone  13 Pro",
    subtitle: "Now in Greenm from $599 or $52.59/mo for 24 mo Footnote*",
  },
  {
    label: "Home Speakers",
    title: "Room-filling sound",
    subtitle: "From $299 or $13.52/mo for 24 mo",
  },
];

const FamousProducts = (props: Props) => {
  return (
    <section id="famous-product" className="container p-1 my-10 px-3 md:px-0">
      <div className="grid grid-cols-4 gap-4 ">
        {famousProducts.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundImage: `url(images/famous-${++idx}.webp)`,
              objectFit: "cover",
              width: "100%",
            }}
            className="lg:col-span-1 basic__transition hover:-translate-y-1 border border-slate-300/75 hover:shadow-lg col-span-2 h-[400px] cursor-pointer bg-center  rounded-md  shadow-md "
          >
            <div
              className={`${
                idx > 1 ? "text-dark" : "text-white"
              } grid gap-y-3 pt-8 p-4`}
            >
              <h2 className="lg:text-sm  ">{item.label}</h2>
              <h2 className="lg:text-lg text-2xl font-semibold">
                {item.title}
              </h2>
              <h2 className="lg:text-xs text-sm text-muted-accent-1">
                {item.subtitle}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FamousProducts;
