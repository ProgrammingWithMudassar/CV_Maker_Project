import React from 'react'
import { Container, Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    }}>
      <Box sx={{
        backgroundColor: '#BFBFBF',
        width: '13rem',
        height: "13rem",
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 3px 5px 2px rgba(191, 191, 191, .5)',
      }}>
        <Typography variant="h2" color="initial" fontWeight='600'>MK</Typography>
      </Box>
      <Link to='/resume'>
        <Button sx={{ width: '250px', mt: 4, p: '1.2rem' }}>Create Your Resume</Button>
      </Link>
    </Box>
  )
}

export default Home