import React, { useRef } from 'react'
import { Container, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "300px",
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '1rem',
    p: 4, mt: { xs: 2, md: 0 }
  }

  const IconStyle = {
    position: 'absolute',
    top: '1rem', right: "1rem",
    fontSize: '2rem',
    color: '#000'
  }

  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const CpasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const Cpassword = CpasswordRef.current.value;

    if (email && password && name && Cpassword) {
      navigate('/login');
    } else {
      toast.error('Please fill all fields');
    }
  };

  return (
    <div>
      <Box sx={style}>
        <Link to='/'>
          <CancelIcon sx={IconStyle} />
        </Link>
        <Typography variant="h4" component="h2" fontWeight='600' textAlign='center' > SignUp </Typography>
        <form onSubmit={handleSubmit}>
          <Box>
            <Stack direction="column" mt={4} textAlign="left">
              <label for="" style={{ fontWeight: "600" }}>Name</label>
              <input type="text" placeholder='Name' className='input' ref={nameRef} /><br />
              <label for="" style={{ fontWeight: "600" }}>Email</label>
              <input type="email" placeholder='Email' className='input' ref={emailRef} /><br />
              <label for="" style={{ fontWeight: "600" }}>Password</label>
              <input type="password" placeholder='password' className='input' ref={passwordRef} /><br />
              <label for="" style={{ fontWeight: "600" }}>Confirm Password</label>
              <input type="password" placeholder='password' className='input' ref={CpasswordRef} /><br />
            </Stack>
          </Box>
          <Button sx={{ width: '100%', mt: 2, fontWeight: '600', p: 2.3 }} type="submit">SignUp</Button>
          <Typography variant="body1" color="initial" mt={2}>
            Create new account
            <Link to='/login'>
              <span style={{ cursor: 'pointer', fontWeight: "600", textDecoration: 'underline' }} > Login </span>
            </Link>
          </Typography>
        </form>
      </Box>
      <ToastContainer />
    </div>
  )
}

export default SignUp