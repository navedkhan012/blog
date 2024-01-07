import React, { useState } from "react";
import { createPortal } from "react-dom";
import { stables } from "../constants/index";
import { HiOutlineCamera } from "react-icons/hi";
import CropEasy from "./crop/CropEasy";
/**
 * @author
 * @function ProfilePicture
 **/

const ProfilePicture = ({ avatar }) => {
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    setPhoto({
      url: URL.createObjectURL(file),
      file: file,
    });
    setOpenCrop(true);
  };

  return (
    <>
      {openCrop &&
        createPortal(
          <CropEasy photo={photo} setOpenCrop={setOpenCrop} />,
          document.getElementById("portal")
        )}

      <div className=" w-full flex  items-center gap-x-4">
        <div className=" w-20 h-20 relative rounded-full outline outline-offset-1 outline-2 overflow-hidden outline-primary">
          <label
            htmlFor="profilePicture"
            className="cursor-pointer absolute inset-0 rounded-full bg-transparent"
          >
            {avatar ? (
              <img
                src={stables.UPLOAD_FOLDER_BASE_URL + avatar}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-blue-200 flex justify-center items-center">
                <HiOutlineCamera className=" w-7 h-auto text-primary" />
              </div>
            )}
          </label>
          <input
            name="profilePicture"
            type="file"
            id="profilePicture"
            className="sr-only"
            onChange={handleFileChange}
          />
        </div>
        <button
          type="button"
          className="border border-red-500 rounded-lg px-4 py-2  text-red-500"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default ProfilePicture;
