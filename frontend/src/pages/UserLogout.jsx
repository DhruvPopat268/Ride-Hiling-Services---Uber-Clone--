import React, { useEffect } from 'react'
import { persistor } from '../Store/store'
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {logout} from '../Slicer/FormSlicer'

const UserLogout = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();



    useEffect(() => {

        dispatch(logout())

        persistor.purge().then(() => {
            navigate('/UserLogin')
        })

    }, [navigate])

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout