import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import { RequireAuth } from "./routes/RequireAuth";
import { IsNotAuth } from "./routes/IsNotAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route
          path="/pay/*"
          element={
            <RequireAuth>
              <PrivateRoutes />
            </RequireAuth>
          }
        />
        <Route
          path="/auth/*"
          element={
            <IsNotAuth>
              <AuthRoutes />
            </IsNotAuth>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
