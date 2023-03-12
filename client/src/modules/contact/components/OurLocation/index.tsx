import React from "react";

type Props = {};

const OurLocation = (props: Props) => {
  return (
    <div className="col-span-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63373.65703415214!2d107.5840902700375!3d-6.908107571173537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7cdf9410439%3A0xd75e3bea3b5242b2!2sIstana%20BEC%20Bandung!5e0!3m2!1sid!2sid!4v1678272236365!5m2!1sid!2sid"
        className="!w-full md:!h-[56vh] !h-[26vh] aspect-video"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OurLocation;
