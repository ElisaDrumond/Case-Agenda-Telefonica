// biome-ignore lint/style/useImportType: <explanation>
import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  children?: ReactNode;
};

export const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};
