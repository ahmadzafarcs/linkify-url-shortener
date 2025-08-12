import { Button, Description, Field, Input, Label } from "@headlessui/react";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function AddURL({ setLinks }) {
  const [url, setUrl] = useState("");
  const [shortedUrl, setShortedUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setShortedUrl("");
      if (!url) {
        setError("URL is required");
        return;
      }
      const res = await fetch(`${import.meta.env.VITE_API_URL}/url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200 && data.url) {
        setUrl("");
        setShortedUrl(data.url.urlId);
        setLinks((prev) => [
          ...prev,
          { urlId: data.url.urlId, redirect: data.url.redirect },
        ]);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const [copiedId, setCopiedId] = useState(null);

  async function copyToClipboard(id) {
    const shortLink = `https://linkify.api.azcs.site/api/${id}`;
    try {
      await navigator.clipboard.writeText(shortLink);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500); // reset after 1.5s
    } catch (err) {
      setError("Failed to copy link");
    }
  }

  return (
    <>
      <section className="mb-6">
        <div className="flex items-center justify-center">
          <form
            className="w-full max-w-md sm:max-w-lg px-4"
            onSubmit={handleSubmit}
          >
            <Field className="grid grid-rows-[auto_1fr] gap-2 justify-center">
              {error && (
                <Description className="text-sm text-red-400"></Description>
              )}
              <div className="grid grid-rows-[1fr_auto] md:grid-cols-[1fr_auto] items-center gap-4 md:gap-2 md:w-[600px]">
                <Input
                  disabled={loading}
                  className="bg-stone-800 px-4 py-3 rounded text-md disabled:text-stone-800 w-full text-xl"
                  type="text"
                  placeholder="https://www.example.com/blablabl..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-white text-black font-semibold text-xl px-4 py-3 rounded cursor-pointer disabled:bg-stone-200 w-full sm:w-auto disabled:cursor-not-allowed"
                  disabled={loading || url.length < 3}
                >
                  {loading ? (
                    <span className="loading loading-spinner loading-sm">
                      Shorting...
                    </span>
                  ) : (
                    "Short URL"
                  )}
                </Button>
              </div>
            </Field>
          </form>
        </div>
        {loading && <p className="text-center bounce">Shorting URL...</p>}
        {shortedUrl && !loading && (
          <section className="flex items-center justify-center">
            <div
              className={`flex items-center justify-between gap-4 px-4 py-4 rounded ${
                copiedId ? "bg-green-900" : "bg-orange-900"
              } w-md`}
            >
              <p>https://linkify.api.azcs.site/api/{shortedUrl}</p>
              <button
                onClick={() => copyToClipboard(shortedUrl)}
                className={`cursor-pointer ${copiedId ? "text-green-500" : ""}`}
              >
                <Copy />
              </button>
            </div>
          </section>
        )}
      </section>
    </>
  );
}
