import React from "react";
import { Link } from "react-router-dom";

const Next = ({ label, link, onClick }) => {
  return (
    <div className="flex justify-center items-center w-full mt-4">
      <div className="w-[470px]">
        <div className="flex flex-col items-center mt-8">
          <Link
            to={link}
            onClick={onClick}
            className="block w-full bg-custom-gradient text-white font-semibold text-center py-2 rounded-md hover:bg-red-700 transition"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Next;