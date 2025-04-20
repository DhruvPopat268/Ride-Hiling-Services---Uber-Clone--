import React, { useEffect } from 'react'
import { persistor } from '../Store/store'
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {logout} from '../Slicer/FormSlicer'
import axios from 'axios'

const UserLogout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Step 1: Dispatch Redux logout action
        dispatch(logout());

        // Step 2: Clear the user session from the backend by calling the logout API
        axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`,{}, { withCredentials: true })
            .then(() => {
                // Step 3: Purge persisted state (local storage, session storage)
                persistor.purge().then(() => {
                    // Step 4: Navigate to the login page after successful logout
                    navigate('/UserLogin');
                });
            })
            .catch(error => {
                console.error('Logout error', error);
                // Optionally, handle the error (e.g., show an error message)
            });

    }, [dispatch, navigate]);

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout