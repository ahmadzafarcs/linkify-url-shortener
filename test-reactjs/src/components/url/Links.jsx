import { useState } from "react";
import { MoveRight, Trash, Copy } from "lucide-react";
import { Button } from "@headlessui/react";

export default function Links({ links, setLinks }) {
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  async function deleteURL(id) {
    setDeletingId(id);
    try {
      await new Promise((r) => setTimeout(r, 1000)); // loading effect
      setLinks((prev) => prev.filter((url) => url.urlId !== id));
      await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
        method: "DELETE",
      });
    } catch (err) {
      setError(err.message);
    }
  }

  async function copyToClipboard(id) {
    const shortLink = `https://linkify.azcs.site/${id}`;
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500); // reset after 1.5s
    } catch (err) {
      setError("Failed to copy link");
    }
  }

  return (
    <section className="flex items-center justify-center w-full px-4">
      <ul className="flex flex-col gap-2 w-full max-w-2xl">
        {links?.map((link) => (
          <li
            key={link.urlId}
            className={`grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr_auto_auto] gap-3 px-3 py-2.5 rounded transition-all duration-500 ease-in-out transform
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
              {`linkify.azcs.site/${link?.urlId}`}
            </a>
            <div className="flex gap-5">
              {/* Copy button */}
              <Button
                onClick={() => copyToClipboard(link.urlId)}
                className="justify-self-start sm:justify-self-end cursor-pointer"
              >
                <Copy
                  className={`w-5 ${
                    copiedId === link.urlId ? "text-green-400" : "text-blue-400"
                  }`}
                />
              </Button>

              {/* Delete button */}
              <Button
                onClick={() => deleteURL(link.urlId)}
                className="justify-self-start sm:justify-self-end cursor-pointer"
              >
                <Trash className="w-5 text-red-400" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
