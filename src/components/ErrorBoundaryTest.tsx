import {useState} from "react";

export function ErrorBoundaryTest() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error("Intentional error to test ErrorBoundary");
  }

  return (
    <div>
      <h2>ErrorBoundary test</h2>
      <p>
        Click the button to throw during render. You should see the boundary
        fallback.
      </p>
      <button type="button" onClick={() => setShouldThrow(true)}>
        Throw error
      </button>
    </div>
  );
}
