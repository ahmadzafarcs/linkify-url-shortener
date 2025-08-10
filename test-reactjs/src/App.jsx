import { useEffect, useState } from "react";
import AddURL from "./components/url/AddURL";
import Links from "./components/url/Links";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function getURLs() {
      try {
        setLoading(true);
        const res = await fetch(`${import.meta.env.VITE_API_URL}/urls`);
        const data = await res.json();
        setLinks(data.urls);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
        setError(null);
      }
    }
    getURLs();
  }, []);
  return (
    <>
      <main className="w-[90vw] m-auto">
        <div className="flex flex-col items-center justify-center gap-14 mt-10">
          <h2 className="text-xl font-bold">URL Shortner</h2>
          <AddURL setLinks={setLinks} />
          {loading ? (
            <span className="text-white">Loading URLs...</span>
          ) : (
            <Links links={links} setLinks={setLinks} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
