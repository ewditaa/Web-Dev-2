import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { UserProvider } from "./context/UserContext";

// Lazy load (performance optimization)
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;