import { useEffect, useState } from "react";
import HomePage from "./components/pages/HomePage";
import DisabledAuth from "./components/ui/DisabledAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./components/ui/GlobalLayout";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [links, setLinks] = useState([]);

  // useEffect(() => {
  //   async function getURLs() {
  //     try {
  //       setLoading(true);
  //       const res = await fetch(`${import.meta.env.VITE_API_URL}/urls`);
  //       const data = await res.json();
  //       setLinks(data.urls);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //       setError(null);
  //     }
  //   }
  //   getURLs();
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path="/" element={<HomePage loading={loading} />} />
          <Route path="/login" element={<DisabledAuth />} />
          <Route path="/register" element={<DisabledAuth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
