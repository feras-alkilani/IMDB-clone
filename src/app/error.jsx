"use client";

import { useEffect, useState } from "react";

export default function Error({ error, reset }) {
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    console.log(error);
  }, [error]);

  const handleReset = () => {
    setIsResetting(true);
    reset();
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-red-600">Something went wrong</h1>
      <p className="mt-4">
        Please try again later or contact support if the issue persists.
      </p>
      <button
        className="hover:text-amber-600 mt-4 p-2 border border-amber-600 rounded"
        onClick={handleReset}
        disabled={isResetting} // disable the button during reset
      >
        {isResetting ? "Trying..." : "Try Again"}
      </button>
    </div>
  );
}
