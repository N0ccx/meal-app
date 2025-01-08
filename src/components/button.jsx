import React from "react";
import { Link } from "react-router-dom";

const Next = ({ label, link }) => {
  return (
    <div className="flex flex-col items-center px-4 mt-8">
      <Link
        to={link}
        className="block w-full bg-custom-gradient text-white font-semibold text-center py-2 rounded-md hover:bg-red-700 transition"
      >
        {label}
      </Link>
    </div>
  );
};

export default Next;
