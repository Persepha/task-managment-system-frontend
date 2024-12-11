"use client";

// Error components must be Client Components
import * as React from "react";

export default function UpdateStoreError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <h1>{error.message}</h1>;
}
