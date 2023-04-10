import { Badge } from "@chakra-ui/react";
import Button from "components/Button";
import React from "react";

type Props = {};

const UserAddress = (props: Props) => {
  return (
    <div className="mb-4">
      <h2>Alamat Pengiriman</h2>
      <div className="border-b my-3"></div>
      <div className="grid gap-y-2">
        <h2 className="text-sm font-semibold">
          Ghalitsar Gyasi Elfaris (Rumah){" "}
          <span>
            <Badge variant="subtle" colorScheme="orange">
              <span className="capitalize">Utama</span>
            </Badge>
          </span>{" "}
        </h2>
        <p className="text-xs text-slate-500">6281223378026</p>
        <p className="text-xs text-slate-400">
          Jl. Budi Asih, Kec. Sumedang Sel., Kabupaten Sumedang, Jawa Barat,
          45311 [Tokopedia Note: Jl. Budi asih gg.srimanganti RT/RW 03/06 no 7
          Regol wetan Sumedang Selatan, Kab. Sumedang, 45311
        </p>
      </div>
      <div className="border-b my-3"></div>
      <div className="flex items-center gap-x-5">
        <Button
          buttonType="outlined"
          color="gray"
          buttonClass="px-3 !border-slate-400 !text-sm !rounded-lg !py-2 "
        >
          Pilih Alamat Lain
        </Button>
        <Button
          buttonType="outlined"
          color="gray"
          buttonClass="px-3 !border-slate-400 !text-sm !rounded-lg !py-2 "
        >
          Kirim Ke Beberapa Alamat
        </Button>
      </div>
    </div>
  );
};

export default UserAddress;
