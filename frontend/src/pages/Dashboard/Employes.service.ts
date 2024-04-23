import axios from 'axios'
import { IEmploye } from './Employe.model'

const API_URL = '/api/employes/'

// Create new employe
const createEmploye = async (employeData: IEmploye, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, employeData, config)

    return response.data
}

// update an employe
const updateEmploye = async (employeId: any, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + 'update', employeId, config)

    return response.data
}

// update an employe
const payEmploye = async (employeId: any, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.put(API_URL + 'pay', employeId, config)

    return response.data
}

// update an employe
const updateAllEmployes = async (newemployes: IEmploye[], token: string) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL + 'updateAll', newemployes, config)

    return response.data
}

// get an employe
const getEmploye = async (employeId: any, token: string) => {

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL + 'getOne', config)

    return response.data
}



// Get user employes
const getEmployes = async (token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete user employe
const deleteEmploye = async (employeId: any, token: string) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + employeId, config)

    return response.data
}

const employeService = {
    createEmploye,
    getEmployes,
    getEmploye,
    updateEmploye,
    updateAllEmployes,
    deleteEmploye,
    payEmploye,
}

export default employeService
