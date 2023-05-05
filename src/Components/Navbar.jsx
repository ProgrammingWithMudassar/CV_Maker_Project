import React from 'react'
import './Style.css'
import { Container, Stack } from '@mui/material'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


const Navbar = () => {



    return (
        <div>
            <Container>
                <Box mt={{ xs: 1, md: 2 }} className="navbar">
                    <Link to='/'>
                        <Typography variant="h6" color="#fff" fontWeight={600}>CV_Maker.</Typography>
                    </Link>
                    <Link to='/Login'>
                        <Button sx={{ color: '#000', fontWeight: '600', p: "0 1.5rem" }} >
                            Log In
                        </Button>
                    </Link>
                </Box>
            </Container>
        </div>
    )
}

export default Navbar