import React from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";
import './ProtectedRoute.css';

import im from '../../images/rec1.png';

function ProtectedRoute({ component: Component, ...props  }) {

    const history = useHistory();

    return (
        <Route>
            {
                () => props.isLogged ? <Component {...props} /> : history.push('/', {
                    noAuthRedirect: true
                })
            }
        </Route>
    );
}

export default ProtectedRoute;