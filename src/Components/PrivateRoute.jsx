import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
    const { children, token } = props;
    if (!token) {
        return <Navigate to="/login" />;
    }
    return <>{children}</>;
};

export default PrivateRoute;
