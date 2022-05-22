import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({
    isLoginUser,
    redirectPath = '/admin',
    children,
  }) => {
    if (!isLoginUser) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

 
export default PrivateRoute