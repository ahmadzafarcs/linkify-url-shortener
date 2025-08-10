import { useState } from "react";
import { MoveRight, Trash } from "lucide-react";
import { Button } from "@headlessui/react";

export default function Links({ links, setLinks }) {
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  async function deleteURL(id) {
    setDeletingId(id);
    try {
      await new Promise((r) => setTimeout(r, 1000)); // simulate loading effect
      setLinks((prev) => prev.filter((url) => url.urlId !== id));
      await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <section className="flex items-center justify-center w-full px-4">
      <ul className="flex flex-col gap-2 w-full max-w-2xl">
        {links?.map((link) => (
          <li
            key={link.urlId}
            className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto] gap-3 px-3 py-2.5 rounded transition-all duration-500 ease-in-out transform
              ${
                deletingId === link.urlId
                  ? "bg-red-900 opacity-0 scale-95"
                  : "bg-transparent opacity-100 scale-100"
              }
            `}
          >
            <p className="text-stone-400 truncate">{link?.redirect}</p>
            <MoveRight className="text-orange-400 hidden sm:block" />
            <a
              href={`${import.meta.env.VITE_API_URL}/${link?.urlId}`}
              target="_blank"
              className="hover:underline cursor-pointer break-all"
            >
              {`localhost:5173/${link?.urlId}`}
            </a>
            <Button
              onClick={() => deleteURL(link.urlId)}
              className="justify-self-start sm:justify-self-end cursor-pointer"
            >
              <Trash className="w-5 text-red-400" />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
