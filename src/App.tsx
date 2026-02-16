import {Toaster} from "react-hot-toast";

import "./App.css";
import {AppRoutes} from "./app/routes";
import {ErrorBoundary} from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary
        fallback={
          <div>
            <h1>Something went wrong</h1>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        }
        onError={(error, errorInfo) => {
          console.error("ErrorBoundary caught:", error, errorInfo);
        }}
      >
        <AppRoutes />
        <Toaster position="top-right" />
      </ErrorBoundary>
    </>
  );
}

export default App;
