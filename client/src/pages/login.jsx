import React from 'react'
import { Link } from 'react-router-dom'
import { FormRow, Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'


const login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Login</h4>

        <FormRow type='email' name='email' defaultValue='john@smith.com'></FormRow>
        <FormRow type='password' name='password' defaultValue='secret123'></FormRow>
        <button type='sumbit' className='btn btn-block'>Submit</button>
        <button type='sumbit' className='btn btn-block'>Explore the app</button>
        <p>
          Not a member yet?
          <Link to='/login' className='member-btn'>Register</Link>
        </p>
      </form>

    </Wrapper>

  )
}

export default login