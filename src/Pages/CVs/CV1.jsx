import React from 'react'
import { Container, Box, Button, Grid, Typography, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';
import '../Style.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';

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
        {/* Left  */}
        <Grid container spacing={4} >
          <Grid item xs={4} textAlign='left' backgroundColor='#053D71' color="#fff" >
            <Box sx={{ height: '1000px' }}>
              <Box className="ImgBoxInCv">
                <Typography variant="body1" color="initial"></Typography>
              </Box>
              <Box textAlign='center' mt={4}>
                <Typography variant="h4" fontWeight={600}>Mudasssar Hussain</Typography>
                <Typography variant="h6" >Job Position</Typography>
              </Box>
              <Divider
                variant="fullWidth"
                orientation="horizontal"
                color="#fff"
                sx={{ my: 2, width: '95%' }}
              />

              {/* Contact  */}
              <Box textAlign='left' mt={4}>
                <Typography variant="h5" fontWeight={600}>Contact Me.</Typography>
                <Box display='flex' alignItems='center' mt={2} >
                  <CallIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >031246002885</Typography>
                </Box>
                <Box display='flex' alignItems='center' mt={1} >
                  <EmailIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >www.emal@gmail.com</Typography>
                </Box>
                <Box display='flex' alignItems='center' mt={1} >
                  <HomeIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >safgsdfh erjerue ,567</Typography>
                </Box>
                <Box display='flex' alignItems='center' mt={1} >
                  <LinkIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >http://www.emal@gmail.com</Typography>
                </Box>
              </Box>

              {/* Skill */}
              <Box textAlign='left' mt={4}>
                <Typography variant="h5" fontWeight={600} >Skill's.</Typography>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }} mt={2}>
                  <Typography variant="body1" >HTML</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >Researching</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >HTML</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >HTML</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >HTML</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
              </Box>

              {/* Hobbies */}
              <Box textAlign='left' mt={4}>
                <Typography variant="h5" fontWeight={600}>Hobbies.</Typography>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }} mt={2}>
                  <Typography variant="body1" >HTML</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >Researching</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >HTML</Typography>
                  <Typography variant="body1" >23%</Typography>
                </Box>
              </Box>
            </Box>

          </Grid>

          {/* Right  */}
          <Grid item xs={8} textAlign='left'>
            <Box sx={{ height: '1000px', py: 6 }}>
              {/* About  */}
              <Box >
                <Typography variant="h5" fontWeight={600}>About.</Typography>
                <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut neque iaculis,
                  commodo nisl eget, vulputate orci. Praesent condimentum nisl eu facilisis egestas.
                  Vivamus porttitor lacinia dui sed tincidunt. Integer maximus, leo eu eleifend laoreet,
                  felis tortor eleifend odio, sit amet suscipit quam ante id justo. Nunc rhoncus erat ac lectus malesuada.</Typography>
              </Box>

              <Divider
                variant="fullWidth"
                orientation="horizontal"
                color="#053D71"
                sx={{ my: 2, width: '95%' }}
              />


              {/* Experince  */}
              <Box mt={4}>
                <Typography variant="h5" fontWeight={600} my={2}>Experince.</Typography>
                <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#053D71", px: 0.7 }}>
                  <Typography variant="h6" fontWeight={600} >2020-2021</Typography>
                </Box>
                <Typography variant="h6" fontWeight={600}>Company Name</Typography>
                <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>Life is short. Chase your dreams, embrace the unknown, and find joy in every moment. Make every day count and never stop believing.</Typography>
                <Box>
                  <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#053D71", px: 0.7 }}>
                    <Typography variant="h6" fontWeight={600} >2020-2021</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={600}>Company Name</Typography>
                  <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>Life is short. Chase your dreams, embrace the unknown, and find joy in every moment. Make every day count and never stop believing.</Typography>
                </Box>


                <Box>
                  <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#053D71", px: 0.7 }}>
                    <Typography variant="h6" fontWeight={600} >2020-2021</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={600}>Company Name</Typography>
                  <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>Life is short. Chase your dreams, embrace the unknown, and find joy in every moment. Make every day count and never stop believing.</Typography>
                </Box>
              </Box>

              <Divider
                variant="fullWidth"
                orientation="horizontal"
                color="#053D71"
                sx={{ my: 2, width: '95%' }}
              />


              {/* Education  */}
              <Box mt={4}>
                <Typography variant="h5" fontWeight={600} my={2}>Education.</Typography>
                <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#053D71", px: 0.7 }}>
                  <Typography variant="h6" fontWeight={600} >2020-2021</Typography>
                </Box>
                <Typography variant="h6" fontWeight={600}>Degree Name</Typography>
                <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>Life is short. Chase your dreams, embrace the unknown, and find joy in every moment. Make every day count and never stop believing.</Typography>
                <Box>
                  <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#053D71", px: 0.7 }}>
                    <Typography variant="h6" fontWeight={600} >2020-2021</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={600}>Degree Name</Typography>
                  <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>Life is short. Chase your dreams, embrace the unknown, and find joy in every moment. Make every day count and never stop believing.</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CV1