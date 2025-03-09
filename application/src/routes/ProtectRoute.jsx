import { Outlet, Navigate } from "react-router-dom";
import { useAuthenticator } from '@aws-amplify/ui-react';

export default function ProtectedRoute({ redirectPath = '/login', children }) {
    const { authStatus } = useAuthenticator((context) => [context.authStatus]);

    if (authStatus !== 'authenticated') {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? <>{children}</> : <Outlet />;
}
