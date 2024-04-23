import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as React from 'react';
import { RootState, useAppDispatch } from '../../store'
import Header from '../../components/Header';
import { getEmployes, reset } from './Employes.hook'
import Spinner from '../../components/Spinner';

import Employes from './Employes';
import EmployeForm from './Employe.Form';

import "./Dashboard.css"
function Dashboard() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const { user } = useSelector((state: RootState) => state.auth)
    const { employes, isLoading, isError, message } = useSelector((state: RootState) => state.employes)


    useEffect(() => {
        if (isError) {
            console.log(message)
        }

        if (!user) {
            navigate('/')
        }
        dispatch(getEmployes())
        return () => {
            dispatch(reset())
        }

    }, [user, navigate, isError, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }
    console.log(employes)
    return (
        <div data-testid='dashboard'>
            <Header />
            <section className='heading container'>
                <h5>Welcome {user && user.name}</h5>
                <button className='btn' onClick={handleOpen}>
                    Add New user
                </button>
            </section>
            <EmployeForm open={open} onClose={handleClose} />

            <section className='content'>
                <Employes emp={employes} />
            </section>
        </div>
    )
}

export default Dashboard
