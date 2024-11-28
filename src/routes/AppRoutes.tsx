import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AdminPage } from "../pages/AdminPage";
import Unauthorized from "../components/Unauthorized";

export const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route 
            path="admin"
            element = {
              <ProtectedRoute requiredPermission="view:dashboard">
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path='/unauthorized' element={<Unauthorized />}/>
        </Routes>
    );
}