import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Switch>
    </BrowserRouter>
  );
};
