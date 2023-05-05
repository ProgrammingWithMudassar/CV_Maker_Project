import React from 'react'
import { Container, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


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
    p: 4,
  }


  return (
    <div>
      <Box sx={style}>
        <Typography variant="h4" component="h2" fontWeight='600' textAlign='center' > SignUp </Typography>
        <Box>
          <Stack direction="column" mt={4} textAlign="left">
            <label for="" style={{ fontWeight: "600" }}>Name</label>
            <input type="text" placeholder='Email' className='input' /><br />
            <label for="" style={{ fontWeight: "600" }}>Email</label>
            <input type="email" placeholder='Email' className='input' /><br />
            <label for="" style={{ fontWeight: "600" }}>Password</label>
            <input type="password" placeholder='password' className='input' /><br />
            <label for="" style={{ fontWeight: "600" }}>Confirm Password</label>
            <input type="password" placeholder='password' className='input' /><br />
          </Stack>
        </Box>
        <Button sx={{ width: '100%', mt: 2, fontWeight: '600', p: 2.3 }}>SignUp</Button>
        <Typography variant="body1" color="initial" mt={2}>
          Create new account
          <Link to='/login'>
            <span style={{ cursor: 'pointer', fontWeight: "600", textDecoration:'underline' }} > Login </span>
          </Link>
        </Typography>
      </Box>
    </div>
  )
}

export default SignUp