import { ArrowRight, Dot } from "lucide-react";
import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex items-center justify-center h-10 gap-2 text-xs w-[100vw] text-stone-200 w-[90vw] m-auto">
      <p>&copy; Copyright - {year} </p>
      <Dot />
      <a href="https://www.linkedin.com/in/ahmadzafarcs" className="underline">
        Ahmad - LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
