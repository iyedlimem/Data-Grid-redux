import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { IUser } from "./User.model";
import Spinner from '../../components/Spinner'
import { RootState, useAppDispatch } from "../../store";
import { login, reset } from "./Authentification.hook";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import "./Authentification.css"


function Login() {
  const [formData, setFormData] = useState<IUser>({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess && user) {
      console.log(user)
      navigate('/dashboard')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, dispatch])

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Header />
      <section className='heading-auth'>
        <h1>
          Login
        </h1>
        <p>Login and start managing your employes</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group-auth'>
            <input
              data-testid='email'
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              placeholder='Enter your email'
              onChange={onChange}
            />
          </div>
          <div className='form-group-auth'>
            <input
              data-testid='password'
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              placeholder='Enter password'
              onChange={onChange}
            />
          </div>

          <div className='form-group'>
            <button data-testid='submit' type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login

