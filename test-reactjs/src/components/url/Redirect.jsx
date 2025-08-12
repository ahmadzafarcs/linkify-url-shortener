import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

function Redirect() {
  const { urlId } = useParams();
  console.log(urlId);
  useEffect(() => {
    window.location.replace(`https://linkify.api.azcs.site/api/${urlId}`);
  }, [urlId]);
  return <h3 className="flex items-center justify-center h-30">Linkify</h3>;
}

export default Redirect;
