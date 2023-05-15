import React from 'react'
import { Container, Box, Button, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';
import '../Style.css'

const CV1 = () => {

  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <Box mt={4}>
      <Box sx={{ width: "100%" }}>
        <Button sx={{ position: 'realtive', left: { xs: "120px", sm: "250px", md: "550px" } }} onClick={goBack}> <ReplyIcon sx={{ ml: -0.5, mt: -0.5 }} /> Back </Button>
      </Box>
      <Container className='CV_container'>
          <Grid container spacing={4} >
            <Grid item xs={4} textAlign='left' backgroundColor='#000' color="#fff">
              <Box className="ImgBoxInCv">
                <Typography variant="body1" color="initial">Image</Typography>
              </Box>
              <Box textAlign='center' mt={2}>
                <Typography variant="h6" fontWeight={600}>Mudasssar Hussain</Typography>
              </Box>
            </Grid>
            <Grid item xs={8} textAlign='left'>sadf</Grid>
          </Grid>
      </Container>
    </Box>
  )
}

export default CV1