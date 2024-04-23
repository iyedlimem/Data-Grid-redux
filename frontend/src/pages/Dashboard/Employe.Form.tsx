import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createEmploye } from './Employes.hook'
import { IEmploye } from './Employe.model';
import { useAppDispatch } from '../../store';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function EmployeForm({ open, onClose }: any) {

  const initialData = {
    name: '',
    lastname: '',
    grade: '',
    age: 20,
    departement: '',
    profession: '',
  }
  const [formData, setFormData] = useState(initialData)
  const { name, lastname, grade, age, departement, profession } = formData
  const dispatch = useAppDispatch()

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    const employeData: IEmploye = {
      name, lastname, grade, age, departement, profession
    }
    dispatch(createEmploye(employeData))
    setFormData(initialData)
    onClose()
  }

  return (

    <Modal
      open={open}
      onClose={() => onClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h5" component="h2">
          Add New Employe
        </Typography>
        <section style={{ marginTop: "50px" }} className='form'>
          <form onSubmit={onSubmit}>
            <div className='form-inputs'>
              <div className='form-group'>
                <label htmlFor='name'>Employe Name</label>
                <input
                  data-testid='name'
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  placeholder='Enter employe name'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Employe LastName</label>
                <input
                  data-testid='lastname'
                  type='text'
                  className='form-control'
                  id='lastname'
                  name='lastname'
                  value={lastname}
                  placeholder='Enter employe lastname'
                  onChange={onChange}
                />
              </div>
            </div>

            <div className='form-inputs'>
              <div className='form-group'>
                <label htmlFor='name'>Employe Grade</label>
                <input
                  data-testid='grade'
                  type='text'
                  className='form-control'
                  id='grade'
                  name='grade'
                  value={grade}
                  placeholder='Enter employe grade'
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Employe Age</label>
                <input
                  data-testid='age'
                  type='number'
                  className='form-control'
                  id='age'
                  name='age'
                  value={age}
                  placeholder='Enter employe age'
                  onChange={onChange}
                />
              </div>
            </div>

            <div className='form-inputs'>
              <div className='form-group'>
                <label htmlFor='name'>Employe Departement</label>
                <select data-testid='departement' className='form-control' id='departement' name="departement" value={departement} onChange={onChange}>
                  <option value="" >Chose employe departement</option>
                  <option value="IT Department" >IT Department</option>
                  <option value="RH Department">RH Department</option>
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='name'>Employe Profession</label>
                <input
                  data-testid='profession'
                  type='text'
                  className='form-control'
                  id='profession'
                  name='profession'
                  value={profession}
                  placeholder='Enter employe profession'
                  onChange={onChange}
                />
              </div>

            </div>


            <div className='form-group'>
              <button className='btn btn-block' type='submit'>
                Add Employe
              </button>
            </div>
          </form>
        </section>
      </Box>
    </Modal>


  )
}

export default EmployeForm
