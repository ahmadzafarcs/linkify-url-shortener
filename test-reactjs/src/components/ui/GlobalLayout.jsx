import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function GlobalLayout() {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
        <img
          src="./bg-circle.png"
          alt="bg-circle"
          className="w-20 blur-3xl absolute top-2 left-40 z-50"
        />
        <img
          src="./bg-circle.png"
          alt="bg-circle"
          className="w-40 blur-3xl absolute top-50 right-40 z-50 hidden md:inline"
        />
        <div className="fixed bottom-0 right-0">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default GlobalLayout;
