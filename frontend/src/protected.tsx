import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSession } from "./shared/session-provider";

type Props = {
    children?: ReactNode,
}

export const ProtectedRoute = ({
    children,
  }:Props) => {
    const {session} = useSession()

    if (!session) {
      return <Navigate to="/login" replace />;
    }
  
    return children ? children : <Outlet />;
  };