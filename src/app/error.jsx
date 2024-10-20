"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const searchParams = useSearchParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="text-center mt-10">
        <h1>Something went wrong</h1>
        <p>{searchParams.get("message") || "An unexpected error occurred."}</p>
        <button className="hover:text-amber-600" onClick={() => reset()}>
          Try Again
        </button>
      </div>
    </Suspense>
  );
}
