'use client';
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function LoaderPortal({ children, forceLoading = false }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Always show loader for at least 2s after hydration (browser only)
    const timeout = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  if (show || forceLoading) {
    return <Loader />;
  }
  return children;
}
