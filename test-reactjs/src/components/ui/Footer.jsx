import { Dot } from "lucide-react";
import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex items-center justify-center h-10 gap-2 text-sm w-[100vw] text-stone-200">
      <p>&copy; Copyright - {year} </p>
      <Dot />
      <p>Developer - Ahmad Zafar</p>
      <Dot />
      <a href="https://www.linkedin.com/in/ahmadzafarcs" className="underline">
        LinkedIn
      </a>
    </footer>
  );
}

export default Footer;
