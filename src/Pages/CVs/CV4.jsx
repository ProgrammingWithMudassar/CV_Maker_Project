import React, { useEffect, useState,useRef } from 'react'
import { Container, Box, Button, Grid, Typography, Divider } from '@mui/material'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LinkIcon from '@mui/icons-material/Link';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';
import '../Style.css'

const CV4 = () => {

  const [FormData, setFormData] = useState([]);
  const persistedData = useSelector((state) => state);

  useEffect(() => {
    setFormData(persistedData.PersistedReducer.reducer);

  }, [])

  const goBack = () => {
    window.history.go(-1);
  };


  return (
    <Box mt={4}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: '10%', gap: 2 }}>
        <Link to='/'>
          <Button sx={{ p: 2 }} > Go Main </Button>
        </Link>
        <Button sx={{ p: 2 }} onClick={goBack}> <EditIcon sx={{ mr: 1, mt: -0.5 }} /> Edit </Button>
        <Button sx={{ p: 2 }} > Submit </Button>
      </Box>
      <Container className='CV_container'>
        {/* Left  */}
        <Grid container spacing={4} >
          <Grid item xs={4} textAlign='left' backgroundColor='#FFA44F' color="#fff" >
            <Box sx={{ height: '1050px' }}>
              <Box className="ImgBoxInCv">
                <Typography variant="body1" color="initial"></Typography>
              </Box>
              <Box textAlign='center' mt={4}>
                <Typography variant="h4" fontWeight={600}>{FormData.Name}</Typography>
                <Typography variant="h6" >{FormData.Job_position}</Typography>
              </Box>
              <Divider
                variant="fullWidth"
                orientation="horizontal"
                color="#fff"
                sx={{ my: 2, width: '95%' }}
              />

              {/* Contact  */}
              <Box textAlign='left' mt={2}>
                <Typography variant="h5" fontWeight={600}>Contact Me.</Typography>
                <Box display='flex' alignItems='center' mt={2} >
                  <CallIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >{FormData.Number}</Typography>
                </Box>
                <Box display='flex' alignItems='center' mt={1} >
                  <EmailIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >{FormData.Email}</Typography>
                </Box>
                <Box display='flex' alignItems='center' mt={1} >
                  <HomeIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >{FormData.Address}</Typography>
                </Box>
                <Box display='flex' alignItems='center' mt={1} >
                  <LinkIcon color="#fff" sx={{ mx: 3 }} />
                  <Typography variant="body1" >{FormData.Web_Link}</Typography>
                </Box>
              </Box>

              {/* Skill */}
              <Box textAlign='left' mt={2}>
                <Typography variant="h5" fontWeight={600} >Skill's.</Typography>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }} mt={2}>
                  <Typography variant="body1" >{FormData.skill1}</Typography>
                  <Typography variant="body1" >{FormData.skill_exp1}%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >{FormData.skill2}</Typography>
                  <Typography variant="body1" >{FormData.skill_exp2}%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >{FormData.skill3}</Typography>
                  <Typography variant="body1" >{FormData.skill_exp3}%</Typography>
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >{FormData.skill4}</Typography>
                  {
                    FormData.skill_exp4 === '' ? "" : <Typography variant="body1" >{FormData.skill_exp5}%</Typography>
                  }
                </Box>
                <Box sx={{ display: 'flex', px: 3, justifyContent: 'space-between' }}>
                  <Typography variant="body1" >{FormData.skill5}</Typography>
                  {
                    FormData.skill_exp5 === '' ? "" : <Typography variant="body1" >{FormData.skill_exp5}%</Typography>
                  }
                </Box>
              </Box>



              {/* Language */}
              <Box textAlign='left' mt={2}>
                <Typography variant="h5" fontWeight={600} >Language's.</Typography>
                <Box sx={{ display: 'flex', px: 6, justifyContent: 'space-between' }} mt={2}>
                  <ul>
                    <li>{FormData.Language1}</li>
                    <li>{FormData.Language2}</li>
                    {
                      FormData.Language3 === '' ? '' : <li>{FormData.Hob3}</li>
                    }
                  </ul>
                </Box>
              </Box>

              {/* Hobbies */}
              <Box textAlign='left' mt={2}>
                <Typography variant="h5" fontWeight={600}>Hobbies.</Typography>
                <Box sx={{ display: 'flex', px: 6, justifyContent: 'space-between' }} mt={2}>
                  <ul>
                    <li>{FormData.Hob1}</li>
                    <li>{FormData.Hob2}</li>
                    {
                      FormData.Hob3 === '' ? '' : <li>{FormData.Hob3}</li>
                    }
                    {
                      FormData.Hob4 === '' ? '' : <li>{FormData.Hob3}</li>
                    }
                  </ul>
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
                <Typography variant="body1" sx={{ textIndent: { xs: "50px", minHeight: "70px" } }}>{FormData.About}</Typography>
              </Box>

              <Divider
                variant="fullWidth"
                orientation="horizontal"
                color="#FFA44F"
                sx={{ my: 2, width: '95%' }}
              />


              {/* Experince  */}
              <Box mt={4}>
                <Typography variant="h5" fontWeight={600} my={2}>Experince.</Typography>
                <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#FFA44F", px: 0.7 }}>
                  <Typography variant="h6" fontWeight={600} >{FormData.Exp1_start_year}-{FormData.Exp1_end_year}</Typography>
                </Box>
                <Typography variant="h6" fontWeight={600}>{FormData.Exp1_compnay_name}</Typography>
                <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>{FormData.Exp1_details}</Typography>
                <Box>
                  <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#FFA44F", px: 0.7 }}>
                    <Typography variant="h6" fontWeight={600} >{FormData.Exp2_start_year}-{FormData.Exp2_end_year}</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={600}>{FormData.Exp2_compnay_name}</Typography>
                  <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>{FormData.Exp2_details}</Typography>
                </Box>
                <Box>
                  {
                    FormData.Exp3_start_year && FormData.Exp3_end_year === '' ?
                      <Box>
                        <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#FFA44F", px: 0.7 }}>
                          <Typography variant="h6" fontWeight={600} >{FormData.Exp3_start_year}-{FormData.Exp3_end_year}</Typography>
                        </Box>
                        <Typography variant="h6" fontWeight={600}>{FormData.Exp3_compnay_name}</Typography>
                        <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>{FormData.Exp3_details}</Typography>
                      </Box>
                      :
                      ''
                  }
                </Box>
              </Box>

              <Divider
                variant="fullWidth"
                orientation="horizontal"
                color="#FFA44F"
                sx={{ my: 2, width: '95%' }}
              />


              {/* Education  */}
              <Box mt={4}>
                <Typography variant="h5" fontWeight={600} my={2}>Education.</Typography>
                <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#FFA44F", px: 0.7 }}>
                  <Typography variant="h6" fontWeight={600} >{FormData.Edu1_start_year}-{FormData.Edu1_end_year}</Typography>
                </Box>
                <Typography variant="h6" fontWeight={600}>{FormData.Edu1_degree}</Typography>
                <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>{FormData.Edu1_details}</Typography>
                <Box>
                  <Box sx={{ width: "117px", color: '#fff', backgroundColor: "#FFA44F", px: 0.7 }}>
                    <Typography variant="h6" fontWeight={600} >{FormData.Edu2_start_year}-{FormData.Edu2_end_year}</Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={600}>{FormData.Edu2_degree}</Typography>
                  <Typography variant="body1" sx={{ textIndent: { xs: "50px" } }}>{FormData.Edu2_details}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default CV4