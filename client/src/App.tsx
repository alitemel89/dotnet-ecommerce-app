import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./scenes/HomePage";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname === "/" ? (
        <>
          <HomePage />
        </>
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
