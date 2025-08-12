import { Copy, DollarSign, Dot } from "lucide-react";
import AddURL from "../url/AddURL";
import Links from "../url/Links";
import { useState } from "react";
import { Button } from "@headlessui/react";

function HomePage({ setLinks }) {
  return (
    <main className="w-[90vw] m-auto relative">
      <div className="flex flex-col items-center justify-center gap-8 mt-10">
        <div className="text-center">
          <h2 className="text-3xl w-[345px] md:w-auto md:text-4xl md:mb-4">
            Turn Long URLs Into{" "}
            <span className="italic text-orange-400">Smart</span> Links.
          </h2>
          <p className="text-lg md:text-2xl text-stone-400">
            From clutter to clarity—instantly
          </p>
        </div>
        <AddURL setLinks={setLinks} />
        {/* {loading ? (
          <span className="text-white">Loading URLs...</span>
        ) : (
          <Links links={links} setLinks={setLinks} />
        )} */}
      </div>

      <section>
        <div className="flex items-center justify-center gap-2">
          <p>Fast</p>
          <Dot />
          <p>Secure</p>
          <Dot />
          <p>Reliable</p>
          <Dot />
          <p>Free</p>
        </div>
        <div></div>
      </section>
    </main>
  );
}

export default HomePage;
