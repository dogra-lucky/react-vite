import {Toaster} from "react-hot-toast";

import "./App.css";
import {AppRoutes} from "./app/routes";
// import {ErrorBoundary} from "./components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
    
      {/* <ErrorBoundary
        fallback={
          <div>
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>Reload</button>
          </div>
          }
          onError={(error, errorInfo) => {
            console.error("ErrorBoundary caught:", error, errorInfo);
            }}
            > */}
        <AppRoutes />
        <Toaster position="top-right" />
            </ErrorBoundary>
      {/* </ErrorBoundary> */}
    </>
  );
}

export default App;
