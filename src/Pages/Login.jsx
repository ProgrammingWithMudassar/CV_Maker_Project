import React from 'react'
import { Container, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'




const Login = () => {

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
    };

    return (
        <div>
            <Box sx={style}>
                <Typography variant="h4" component="h2" fontWeight='600' textAlign='center' > Log In </Typography>
                <Box>
                    <Stack direction="column" mt={4} textAlign="left">
                        <label for="" style={{ fontWeight: "600" }}>Email</label>
                        <input type="email" placeholder='Email' className='input' /><br />
                        <label for="" style={{ fontWeight: "600" }}>Password</label>
                        <input type="password" placeholder='password' className='input' /><br />
                        <Typography variant="body1" color="initial" sx={{ cursor: "pointer",textDecoration:'underline' }}>Forget password?</Typography>
                    </Stack>
                </Box>
                <Button sx={{ width: '100%', mt: 2, fontWeight: '600', p: 2.3 }}>LogIn</Button>
                <Typography variant="body1" color="initial" mt={2}>
                    Create new account
                    <Link to='/signUp'>
                        <span style={{ cursor: 'pointer', fontWeight: "600", textDecoration:'underline' }} > SignUp </span>
                    </Link>
                </Typography>
            </Box>
        </div>
    )
}

export default Login