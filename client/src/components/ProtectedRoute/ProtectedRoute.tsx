import { Navigate, Outlet } from "react-router-dom";
import { IRout } from "./interface";

export const ProtectedRoute = ({ redirectPath, isAllowed }: IRout) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
};
