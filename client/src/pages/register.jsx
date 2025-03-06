import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>
        <FormRow type='text' labelText='' name='name' defaultValue='Jhon' />
        <FormRow type='text' labelText='last name' name='lastName' defaultValue='Smith' />
        <FormRow type='text' labelText='' name='location' defaultValue='earth' />
        <FormRow type='email' labelText='' name='email' defaultValue='jhon@smith.com' />
        <FormRow type='password' labelText='' name='password' defaultValue='secret123' />


        <button type='submit' className='btn btn-block'>submit</button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>

  )
}

export default register