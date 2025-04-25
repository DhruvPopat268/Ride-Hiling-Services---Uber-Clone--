import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { persistor } from '../Store/store'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Slicer/FormSlicer'

const UserProtectedWrapper = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/auth/user`, {
      withCredentials: true
    })
      .then(res => {
        if (res.status === 201) {
          setIsAuthenticated(true);
        }
      })
      .catch(() => {

        setIsAuthenticated(false);
        dispatch(logout())
          persistor.purge().then(() => {
            navigate('/UserLogin');
          });
        
        navigate('/UserLogin');
      });
  }, [navigate]);

  if (isAuthenticated === null) return <p>Loading...</p>;

  return <>{children}</>;
};

export default UserProtectedWrapper;