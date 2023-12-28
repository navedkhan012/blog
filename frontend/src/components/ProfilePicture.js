import React from "react";
import { stables } from "../constants/index";
import { HiOutlineCamera } from "react-icons/hi";
/**
 * @author
 * @function ProfilePicture
 **/

const ProfilePicture = ({ avatar }) => {
  return (
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
        <input type="file" name="" id="profilePicture" className="sr-only" />
      </div>
      <button
        type="button"
        className="border border-red-500 rounded-lg px-4 py-2  text-red-500"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfilePicture;
