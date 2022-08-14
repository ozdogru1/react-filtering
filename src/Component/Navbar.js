import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({cartProduct}) => {
  return (
    <nav className="h-16  bg-slate-800  text-xl text-white flex justify-between items-center ">
           <div className="p-10">
           <Link to="/">Home</Link>
            </div>
           <div className="p-10 relative ">
             <Link className="ml-5 " to="/cart">Cart</Link>
            
           </div>
           <div className="absolute top-0 right-4 text-red-700 bg-slate-50 rounded-full  p-1">
           <p >{cartProduct.length}</p>
           </div>
     </nav>
  );
};

export default Navbar;
