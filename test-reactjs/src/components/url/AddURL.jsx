import { Button, Description, Field, Input, Label } from "@headlessui/react";
import { useState } from "react";

export default function AddURL({ setLinks }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
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

  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <form
            className="w-full max-w-md sm:max-w-lg px-4"
            onSubmit={handleSubmit}
          >
            <Field className="grid grid-rows-[auto_1fr] gap-2">
              <Label>Add URL</Label>
              {error && (
                <Description className="text-sm text-red-400">
                  {error}
                </Description>
              )}
              <Input
                disabled={loading}
                className="bg-stone-800 px-2 py-1.5 rounded text-md disabled:text-stone-800 w-full"
                type="text"
                placeholder="example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Field>
            <Button
              type="submit"
              className="bg-white text-black font-semibold text-md px-2 py-1.5 rounded mt-4 cursor-pointer disabled:bg-stone-200 w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm">
                  Shorting...
                </span>
              ) : (
                "Short URL"
              )}
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
