import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import loadigGif from '../images/preloader.gif'
function Wrapper({ children }) {

    const {
        isLoading,
        error,
    } = useAuth0();
    if (isLoading) {
        return <div className='auth-div'>
            <img src={loadigGif} alt="" />
        </div>;
    }
    if (error) {
        return <div>Oops... {error.message}</div>;
    }
    return <>{children}</>;
}
export default Wrapper;