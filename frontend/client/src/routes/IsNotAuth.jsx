import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const IsNotAuth = ({ children }) => {
  const token = useSelector(store => store.auth.token);

  if (token) {
    return <Navigate replace to={"/"} />;
  }
  return children;
};
