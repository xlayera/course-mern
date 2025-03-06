import React from 'react'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur quasi distinctio accusantium maxime ab, excepturi reprehenderit repellat, sequi earum, ipsam impedit perspiciatis ut iure obcaecati natus magnam alias eveniet.
          </p>

          <Link to='/register' className='btn register-link'>Register</Link>
          <Link to='/login' className='btn '>Login / Demo User</Link>

          <img src={main} alt="job hunt" className='img main-img' />
        </div>
      </div>
    </Wrapper>
  )
};

export default landing