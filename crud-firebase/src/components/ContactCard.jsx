import React, { useState } from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div
        key={contact.id}
        className="flex items-center justify-between p-2 rounded-lg bg-yellow"
      >
        <div className="flex gap-1 ">
          <HiOutlineUserCircle className="text-orange text-4xl " />

          <div className=" bg-yellow">
            <h2 className="text-medium">{contact.name} </h2>
            <p className="text-sm">{contact.email} </p>
          </div>
        </div>
        <div className="flex text-3xl ">
          <RiEditCircleLine />
          <IoMdTrash className="text-orange" />
        </div>
      </div>
    </>
  );
};

export default ContactCard;
