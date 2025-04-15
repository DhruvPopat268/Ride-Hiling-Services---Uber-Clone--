import React, { useEffect } from 'react'
import { persistor } from '../Store/store'
import { useNavigate } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {logout} from '../Slicer/CaptainFormSlicer'

const CaptainLogout = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(logout())

        persistor.purge().then(() => {
            navigate('/CaptainLogin')
        })

    }, [navigate])

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout