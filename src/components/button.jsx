// write button card here
import React from "react";

const Button = ({onClick}) => {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
    >
      View Product
    </button>
  );
};

export default Button;