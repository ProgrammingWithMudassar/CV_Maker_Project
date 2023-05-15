import React from 'react'
import { Container, Box, Button, Grid, Typography, Divider } from '@mui/material'
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
          <Grid item xs={4} textAlign='left' backgroundColor='#000' color="#fff" pb={2}>
            <Box className="ImgBoxInCv">
              <Typography variant="body1" color="initial">Image</Typography>
            </Box>
            <Box textAlign='center' mt={2}>
              <Typography variant="h4" fontWeight={600}>Mudasssar Hussain</Typography>
              <Typography variant="h6" >Job Position</Typography>
            </Box>
            <Divider
              variant="fullWidth"
              orientation="horizontal"
              color="#fff"
              sx={{my:2}}
            />

            <Box textAlign='left' mt={2}>
              <Typography variant="h5" fontWeight={600}>Contact Me.</Typography>
              <Typography variant="body1" sx={{ textIndent: { xs: "50px", md: '100px' } }}>sadfga</Typography>
            </Box>

          </Grid>
          <Grid item xs={8} textAlign='left'>
          <Box mt={2}>
              <Typography variant="h5" fontWeight={600}>About.</Typography>
              <Typography variant="body1" sx={{ textIndent: { xs: "50px"} }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut neque iaculis,
               commodo nisl eget, vulputate orci. Praesent condimentum nisl eu facilisis egestas. 
               Vivamus porttitor lacinia dui sed tincidunt. Integer maximus, leo eu eleifend laoreet, 
               felis tortor eleifend odio, sit amet suscipit quam ante id justo. Nunc rhoncus erat ac lectus malesuada.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CV1