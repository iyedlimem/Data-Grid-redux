import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const Payment = () => {
    return (
        <>
            <Header />
            <Link to='/dashboard' className="employe-element" style={{float :"left" }}> {"< Back To Employes"} </Link>
        </>

    )
}

export default Payment