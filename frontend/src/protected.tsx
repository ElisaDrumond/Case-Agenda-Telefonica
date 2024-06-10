import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "./shared/session-provider";

type Props = {
    children?: ReactNode,
}

export const ProtectedRoute = ({
    children,
  }:Props) => {
    const token = localStorage.getItem("token")

    if (!token) {
      return <Navigate to="/login" replace />;
    }
  
    return children ? children : <Outlet />;
  };