import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="w-[90vw] m-auto h-18 flex items-center justify-between">
        <h3 className="text-orange-300 text-xl font-bold">Linkify</h3>
        <nav className="flex items-center justify-center gap-5">
          <Link
            to="/login"
            className="px-2 py-1.5 border-1 rounded text-orange-400"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-2 py-1.5 bg-white rounded text-black"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
