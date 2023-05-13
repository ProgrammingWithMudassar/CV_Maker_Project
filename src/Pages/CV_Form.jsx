import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Button, Grid, Card, ListItem, List, Divider } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './Style.css'

const EditTemplate = () => {

    const paramName = useParams();
    const [category, setCategory] = useState('')

    useEffect(() => {
        setCategory(paramName.id);
    }, [])


    return (
        <Box my={4}>
            <Box sx={{ width: "100%" }}>
                <Link to='/resume'>
                    <Button sx={{ position: 'realtive', left: { xs: "120px", sm: "250px", md: "500px" } }}> <ReplyIcon sx={{ ml: -0.5, mt: -0.5 }} /> Back </Button>
                </Link>
            </Box>
            <Container >
                <Typography variant="h5" color="initial" fontWeight={600}>Build Your Resume</Typography>
                <Grid container spacing={4} sx={{ textAlign: 'left', pt: 4 }}>
                    {/* First Grid  */}
                    <Grid item xs={12} sm={6} md={4} >
                        <Box >

                            {/* Name  & Position*/}
                            <Box className="file-upload-container">
                                <input type="file" id="file-upload" className='input_file' />
                                <label htmlFor="file-upload" className="custom-file-upload"> <CameraAltIcon sx={{ opacity: '0.5' }} /> </label>
                                <Typography variant="h6" color="initial" fontWeight={600}>Upload Profile Image</Typography>
                            </Box>
                            <Box mt={2}>
                                <Box>
                                    <label for="name" style={{ fontWeight: "600", }}>Name <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input type="text" id="name" placeholder='Name' className='form_input' /><br />
                                </Box>

                                <Box mt={1}>
                                    <label for="position" style={{ fontWeight: "600", }}>Job Position <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span> </label>
                                    <input type="text" id="position" placeholder='Job Position' className='form_input' /><br />
                                </Box>
                            </Box>

                            {/* Contact Information */}
                            <Box mt={2}>
                                <Typography variant="h6" color="initial" fontWeight={600} textAlign="center">Contact Information</Typography>

                                <Box>
                                    <label for="number" style={{ fontWeight: "600", }}>Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input type="number" id="number" placeholder='Contact Number' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="email" style={{ fontWeight: "600", }}>Email <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input type="email" id="email" placeholder='Email' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="address" style={{ fontWeight: "600", }}>Address <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input type="address" id="address" placeholder='Address' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="website" style={{ fontWeight: "600", }}>Website Link</label>
                                    <input type="website" id="website" placeholder='Website Link' className='form_input' /><br />
                                </Box>

                            </Box>

                            <Box mt={2}>
                                <Box display="flex" justifyContent='center'>
                                    <Typography variant="h6" color="initial" fontWeight={600} >Your Skills </Typography>
                                    <Typography variant="body2" color="initial" mt={0.9}>(min. add 3 skills) </Typography>
                                </Box>

                                <Card >
                                    <List>
                                        <Grid container spacing={0}>
                                            <Grid xs={8}>
                                                <ListItem><Typography variant="body1" color="initial" fontWeight={600}>Skill</Typography> </ListItem>
                                            </Grid>
                                            <Grid xs={4}>
                                                <ListItem><Typography variant="body1" color="initial" textAlign='left' fontWeight={600}>Experties</Typography> </ListItem>
                                            </Grid>
                                            <Grid xs={8} >
                                                <ListItem><input type="text" placeholder='1st skill' className='form_input' /></ListItem>
                                                <ListItem><input type="text" placeholder='2nd skill' className='form_input' /></ListItem>
                                                <ListItem><input type="text" placeholder='3rd skill' className='form_input' /></ListItem>
                                                <ListItem><input type="text" placeholder='4th skill' className='form_input' /></ListItem>
                                                <ListItem><input type="text" placeholder='5th skill' className='form_input' /></ListItem>
                                            </Grid>
                                            <Grid xs={4} >
                                                <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                                <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                                <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                                <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                                <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                            </Grid>
                                        </Grid>
                                    </List>
                                </Card>
                            </Box>


                        </Box>
                    </Grid>

                    {/* Second Grid  */}
                    <Grid item xs={12} sm={6} md={4} >
                        <label for="about" style={{ fontWeight: "600" }}>About Me <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                        <textarea
                            type="about"
                            id="about"
                            placeholder='Describe yourself in 250 letters'
                            className='textarea_input'
                            rows="10" cols="50"
                            maxLength={250}
                        /><br />

                        {/* Education  */}
                        <Box mt={1}>
                            <Typography variant="h6" color="initial" fontWeight={600} textAlign='center' >Education </Typography>

                            <Card >
                                <Grid container spacing={0} sx={{ pt: 1 }}>
                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>First Degree <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='Start' /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='End' /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input type="text" className='form_input' placeholder='Degree Name' /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe yourself in 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150}
                                            /></ListItem>
                                    </Grid>


                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>Second Degree <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='Start' /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='End' /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input type="text" className='form_input' placeholder='Degree Name' /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe yourself in 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150}
                                            /></ListItem>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Box>
                        {/* Hobbies  */}
                        <Box mt={2}>
                            <Box display="flex" justifyContent='center'>
                                <Typography variant="h6" color="initial" fontWeight={600} >Hobbies  </Typography>
                                <Typography variant="body2" color="initial" mt={0.9}>(min. add 3 hobbies) </Typography>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item xs={6}> <input type="text" id="name" placeholder='Name' className='form_input' /><br /> </Grid>
                                <Grid item xs={6}> <input type="text" id="name" placeholder='Name' className='form_input' /><br /> </Grid>
                                <Grid item xs={6}> <input type="text" id="name" placeholder='Name' className='form_input' /><br /> </Grid>
                                <Grid item xs={6}> <input type="text" id="name" placeholder='Name' className='form_input' /><br /> </Grid>
                            </Grid>
                        </Box>


                    </Grid>

                    {/* Third Grid  */}
                    <Grid item xs={12} sm={6} md={4} >

                        {/* Experience  */}
                        <Box >
                            <Typography variant="h6" color="initial" fontWeight={600} textAlign='center' >Experience </Typography>

                            <Card >
                                <Grid container spacing={0} sx={{ pt: 1 }}>
                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>First Experience <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='Start' maxLength={4} /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='End' /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input type="text" className='form_input' placeholder='Company Name' /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe into 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150}
                                            /></ListItem>
                                    </Grid>


                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>Second Experience <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='Start' /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='End' /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input type="text" className='form_input' placeholder='Company Name' /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe into 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150}
                                            /></ListItem>
                                    </Grid>
                                    
                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>Third Experience</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='Start' /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input type="number" className='form_input' placeholder='End' /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input type="text" className='form_input' placeholder='Company Name' /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe into 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150}
                                            /></ListItem>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Box>
                        {/* Language  */}
                        <Box mt={2}>
                            <Typography variant="h6" color="initial" fontWeight={600} textAlign='center'>Languages </Typography>
                            <Card >
                                <List>
                                    <Grid container spacing={0}>
                                        <Grid xs={8}>
                                            <ListItem><Typography variant="body1" color="initial" fontWeight={600}>language</Typography> </ListItem>
                                        </Grid>
                                        <Grid xs={4}>
                                            <ListItem><Typography variant="body1" color="initial" textAlign='left' fontWeight={600}>Experties</Typography> </ListItem>
                                        </Grid>
                                        <Grid xs={8} >
                                            <ListItem><input type="text" placeholder='1st language' className='form_input' /></ListItem>
                                            <ListItem><input type="text" placeholder='2nd language' className='form_input' /></ListItem>
                                            <ListItem><input type="text" placeholder='3rd language' className='form_input' /></ListItem>
                                        </Grid>
                                        <Grid xs={4} >
                                            <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                            <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                            <ListItem><input type="number" placeholder='%' className='form_input' /></ListItem>
                                        </Grid>
                                    </Grid>
                                </List>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
                    <Button>Submit</Button>
                    <Button
                        sx={{
                            background: 'linear-gradient(45deg, #B02E0C 30%, #EB4511 90%)',
                            color:"#fff",
                            '&:hover': {
                                backgroundColor: 'red',
                            },
                        }}
                        onClick={() => window.location.reload()}
                        >Clear All</Button>
                </Box>
                <Box sx={{ mt: { xs: 2, md: 4 } }}>
                    <Divider
                        variant="fullWidth"
                        orientation="horizontal"
                    />
                    <Typography variant="body1" color="initial" textAlign='center' mt={2}>@2023</Typography>
                </Box>

            </Container>
        </Box>
    )
}

export default EditTemplate




// {category === 'IT' && (
//     <>
//         <input type="text" placeholder="IT input 1" />
//         <input type="text" placeholder="IT input 2" />
//         {/* Additional IT-specific input fields */}
//     </>
// )}

// {category === 'health' && (
//     <>
//         <input type="text" placeholder="Health input 1" />
//         <input type="text" placeholder="Health input 2" />
//         {/* Additional health-specific input fields */}
//     </>
// )}

// {category === 'managment' && (
//     <>
//         <input type="text" placeholder="Business input 1" />
//         <input type="text" placeholder="Business input 2" />
//         {/* Additional business-specific input fields */}
//     </>
// )}

// {category === 'business' && (
//     <>
//         <input type="text" placeholder="Business input 1" />
//         <input type="text" placeholder="Business input 2" />
//         {/* Additional business-specific input fields */}
//     </>
// )}