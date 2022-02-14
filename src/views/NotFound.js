import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const NotFound = () => {

    const history = useHistory();
    const location = useLocation();
    const params = useParams();

    return (
        <>
            <h1>404 Page not found!</h1>
            <button onClick={() => history.push('/')}>Regresar</button>
        </>
    )
}

export default NotFound;