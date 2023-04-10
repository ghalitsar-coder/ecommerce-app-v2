import React, { useState, ChangeEvent } from "react";
import { FaPencilAlt } from "react-icons/fa";

type Props = {};

const Note = (props: Props) => {
  const [note, setNote] = useState("");
  const [showNote, setShowNote] = useState(false);

  return (
    <div className="grid gap-y-4">
      {showNote && (
        <fieldset>
          <input
            type="text"
            className=" basic__border input__class-regular placeholder:capitalize "
            placeholder={"Contoh: Warna Putih, Size M"}
            name={"note"}
            value={note}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNote(e.target.value)
            }
          />
        </fieldset>
      )}
      <button
        onClick={() => setShowNote((prev) => !prev)}
        className="flex w-fit items-center gap-x-2.5"
      >
        {!showNote ? (
          <>
            <FaPencilAlt size={".8em"} className={"fill-orange-400 shrink-0"} />
            <span className="font-semibold text-sm  text-orange-400 ">
              Tambahkan Catatan
            </span>
          </>
        ) : (
          <h3 className="font-semibold text-sm  text-orange-400 ">
            Batalkan Catatan
          </h3>
        )}
      </button>
    </div>
  );
};

export default Note;
