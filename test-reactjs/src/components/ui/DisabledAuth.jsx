import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function DisabledAuth() {
  return (
    <section className="text-center pt-20 flex flex-col items-center gap-3 justify-center">
      <div className="text-4xl mb-8 ">
        Registration is temporary
        <span className="text-orange-400 font-bold italic ml-2 ">Closed</span>.
      </div>
      <Link to="/" className="px-2 py-1.5 bg-white text-black text-xl rounded ">
        Return to Home
      </Link>
      <img src="./closed.png" alt="closed-png-image" className="w-40" />
    </section>
  );
}

export default DisabledAuth;
