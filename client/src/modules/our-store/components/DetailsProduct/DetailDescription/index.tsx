import Button from "components/Button";
import React from "react";

type Props = {};

const detailProduct = {
  kondisi: "Baru",
  "berat satuan": 200,
  kategori: "SSD",
  etalase: "SSD SOLID STATE DRIVE",
};

const desc = `Product Specifications
  Model MP33 PRO M.2 PCIe SSD
  Interface
  PCIe 3.0 x4 with NVMe 1.3
  
  Capacity
  1TB
  
  Voltage
  DC +3.3V
  
  Operation Temperature
  0˚C ~ 70˚C
  
  Storage Temperature
  -40˚C ~ 85˚C
  
  Terabyte Written
  512GB / >400TB
  1TB / >600TB
  2TB / >1,000TB[4]
  
  Performance
  Crystal Disk Mark:
  Read/Write: up to 2,100/1,700 MB/s[2]
  IOPS:
  Read/Write: 220K/200K IOPS Max[2]
  
  Weight 6g
  Dimensions 80(L) x 22(W) x 3.8(H) mm
  Humidity RH 90% under 40°C (operational)
  Vibration 80Hz~2,000Hz/20G
  Shock 1,500G/0.5ms
  MTBF 2,000,000 hours
  Operating System System Requirements:
  Windows 10, Windows 8.1, Windows 8, Windows 7, Windows Vista[5]
  Linux 2.6.33 or later
  Warranty 5-year limited warranty`;

const DetailDescription = (props: Props) => {
  const [showMore, setShowMore] = React.useState<boolean>(false);
  return (
    <>
      <ul className="text-sm grid gap-y-2">
        {Object.keys(detailProduct).map((item, idx) => (
          <li key={idx} className="flex gap-x-1 items-center ">
            <h4 className="text-slate-500 capitalize "> {item}: </h4>
            <h4
              className={` ${
                item === "kategori" || item === "etalase"
                  ? "font-semibold text-orange-400"
                  : ""
              } `}
            >
              {" "}
              {detailProduct?.[item as keyof typeof detailProduct]}{" "}
            </h4>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 mt-2">
        {showMore ? desc : `${desc.slice(0, 175)}`}
      </p>
      {!showMore && <p>...</p>}
      <Button
        onClick={() => setShowMore((prev) => !prev)}
        buttonClass="text-orange-400  w-fit font-semibold text-sm"
      >
        {showMore ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya"}
      </Button>
    </>
  );
};

export default DetailDescription;
