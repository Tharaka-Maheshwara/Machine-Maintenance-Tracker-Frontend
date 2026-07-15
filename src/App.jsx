import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WorkOrders from "./pages/WorkOrders/WorkOrders";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to="/work-orders" replace />}
        />

        {/* Work Orders */}
        <Route
          path="/work-orders"
          element={<WorkOrders />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;