import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const userToken = useSelector(store => store.auth.token);
  if (!userToken) {
    return Navigate({
      to: `/auth/login`,
      state: { path: location.pathname },
      replace: true
    });
  }
  return children;
};
