import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import AuthRoutes from "./routes/AuthRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicRoutes />} />
        <Route path="/pay/*" element={<PrivateRoutes />} />
        <Route path="/auth/*" element={<AuthRoutes />}/>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
