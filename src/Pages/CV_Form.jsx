import React, { useEffect, useState, useRef } from 'react'
import { Box, Container, Typography, Button, Grid, Card, ListItem, List, Divider } from '@mui/material'
import ReplyIcon from '@mui/icons-material/Reply';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import { UpdateState, ClearFormData } from '../Features/Counter/CounterSlice'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './Style.css'


const EditTemplate = () => {

    const [FormData, setFormData] = useState({});


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();


    const handleInput = (e) => {
        let { Name, Job_position, Number, Email, Address, About, Hob1, Hob2,
            skill1, skill2, skill3, skill_exp1, skill_exp2, skill_exp3,
            Language1, Language2, Language3,
            Edu1_start_year, Edu1_end_year, Edu1_degree, Edu1_details,
            Edu2_start_year, Edu2_end_year, Edu2_degree, Edu2_details,
            Exp1_start_year, Exp1_end_year, Exp1_compnay_name, Exp1_details,
            Exp2_start_year, Exp2_end_year, Exp2_compnay_name, Exp2_details,
        } = FormData;

        if (
            Name
            // && Job_position && Number && Email && Address && About && Hob1 && Hob2 &&
            // skill1 && skill2 && skill3 &&
            // skill_exp1 && skill_exp2 && skill_exp3 &&
            // Language1 && Language2 && Language3 &&
            // Edu1_start_year && Edu1_end_year && Edu1_degree && Edu1_details &&
            // Edu2_start_year && Edu2_end_year && Edu2_degree && Edu2_details &&
            // Exp1_start_year && Exp1_end_year && Exp1_compnay_name && Exp1_details &&
            // Exp2_start_year && Exp2_end_year && Exp2_compnay_name && Exp2_details

        ) {
            dispatch(UpdateState(FormData))
            toast.success('Register Successfully');
            navigate(`/resume/${id}/cv`);
        } else {
            toast.error('Please fill all fields');
        }
    }

    const ClearState = () => {
        dispatch(ClearFormData());
        window.location.reload();
    }


    const [DefaultFormData, setDefaultFormData] = useState([]);
    const persistedData = useSelector((state) => state);

    useEffect(() => {
        setDefaultFormData(persistedData.PersistedReducer.reducer);
        // setFormData(defaultValueRef.current);

    }, [])


    return (
        <Box my={4}>
            <Box sx={{ width: "100%" }}>
                <Link to='/resume' >
                    <Button sx={{ position: 'realtive', left: { xs: "120px", sm: "250px", md: "550px" } }}> <ReplyIcon sx={{ ml: -0.5, mt: -0.5 }} /> Back </Button>
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
                                    <label htmlFor="name" style={{ fontWeight: "600", }}>Name <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input defaultValue={DefaultFormData.Name} type="text" id="name" placeholder='Name' className='form_input' onChange={(e) => setFormData({ ...FormData, Name: e.target.value })} /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="position" style={{ fontWeight: "600", }}>Job Position <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span> </label>
                                    <input defaultValue={DefaultFormData.Job_position} type="text" id="position" placeholder='Job Position' className='form_input' onChange={(e) => setFormData({ ...FormData, Job_position: e.target.value })} /><br />
                                </Box>
                            </Box>

                            {/* Contact Information */}
                            <Box mt={2}>
                                <Typography variant="h6" color="initial" fontWeight={600} textAlign="center">Contact Information</Typography>

                                <Box>
                                    <label for="number" style={{ fontWeight: "600", }}>Number <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input defaultValue={DefaultFormData.Number} type="number" id="number" placeholder='Contact Number' className='form_input' onChange={(e) => setFormData({ ...FormData, Number: e.target.value })} /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="email" style={{ fontWeight: "600", }}>Email <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input defaultValue={DefaultFormData.Email} type="email" id="email" placeholder='Email' className='form_input' onChange={(e) => setFormData({ ...FormData, Email: e.target.value })} /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="address" style={{ fontWeight: "600", }}>Address <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></label>
                                    <input defaultValue={DefaultFormData.Address} type="address" id="address" placeholder='Address' className='form_input' onChange={(e) => setFormData({ ...FormData, Address: e.target.value })} /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="website" style={{ fontWeight: "600", }}>Website Link</label>
                                    <input defaultValue={DefaultFormData.Web_Link} type="website" id="website" placeholder='Website Link' className='form_input' onChange={(e) => setFormData({ ...FormData, Web_Link: e.target.value })} /><br />
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
                                                <ListItem><input defaultValue={DefaultFormData.skill1} type="text" onChange={(e) => setFormData({ ...FormData, skill1: e.target.value })} placeholder='1st skill' className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill2} type="text" onChange={(e) => setFormData({ ...FormData, skill2: e.target.value })} placeholder='2nd skill' className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill3} type="text" onChange={(e) => setFormData({ ...FormData, skill3: e.target.value })} placeholder='3rd skill' className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill4} type="text" onChange={(e) => setFormData({ ...FormData, skill4: e.target.value })} placeholder='4th skill' className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill5} type="text" onChange={(e) => setFormData({ ...FormData, skill5: e.target.value })} placeholder='5th skill' className='form_input' /></ListItem>
                                            </Grid>
                                            <Grid xs={4} >
                                                <ListItem><input defaultValue={DefaultFormData.skill_exp1} type="number" placeholder='%' onChange={(e) => setFormData({ ...FormData, skill_exp1: e.target.value })} className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill_exp2} type="number" placeholder='%' onChange={(e) => setFormData({ ...FormData, skill_exp2: e.target.value })} className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill_exp3} type="number" placeholder='%' onChange={(e) => setFormData({ ...FormData, skill_exp3: e.target.value })} className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill_exp4} type="number" placeholder='%' onChange={(e) => setFormData({ ...FormData, skill_exp4: e.target.value })} className='form_input' /></ListItem>
                                                <ListItem><input defaultValue={DefaultFormData.skill_exp5} type="number" placeholder='%' onChange={(e) => setFormData({ ...FormData, skill_exp5: e.target.value })} className='form_input' /></ListItem>
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
                            defaultValue={DefaultFormData.About}
                            onChange={(e) => setFormData({ ...FormData, About: e.target.value })}
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
                                        <ListItem> <input defaultValue={DefaultFormData.Edu1_start_year} type="number" className='form_input' placeholder='Starting year' onChange={(e) => setFormData({ ...FormData, Edu1_start_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Edu1_end_year} type="number" className='form_input' placeholder='Ending year' onChange={(e) => setFormData({ ...FormData, Edu1_end_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input defaultValue={DefaultFormData.Edu1_degree} type="text" className='form_input' placeholder='Degree Name' onChange={(e) => setFormData({ ...FormData, Edu1_degree: e.target.value })} /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe yourself in 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150} defaultValue={DefaultFormData.Edu1_details}
                                                onChange={(e) => setFormData({ ...FormData, Edu1_details: e.target.value })}
                                            /></ListItem>
                                    </Grid>


                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>Second Degree <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Edu2_start_year} type="number" className='form_input' placeholder='Starting year' onChange={(e) => setFormData({ ...FormData, Edu2_start_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Edu2_end_year} type="number" className='form_input' placeholder='Ending year' onChange={(e) => setFormData({ ...FormData, Edu2_end_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input defaultValue={DefaultFormData.Edu2_degree} type="text" className='form_input' placeholder='Degree Name' onChange={(e) => setFormData({ ...FormData, Edu2_degree: e.target.value })} /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe yourself in 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150} defaultValue={DefaultFormData.Edu2_details}
                                                onChange={(e) => setFormData({ ...FormData, Edu2_details: e.target.value })}
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
                                <Grid item xs={6}> <input defaultValue={DefaultFormData.Hob1} type="text" id="name" placeholder='Name' className='form_input' onChange={(e) => setFormData({ ...FormData, Hob1: e.target.value })} /><br /> </Grid>
                                <Grid item xs={6}> <input defaultValue={DefaultFormData.Hob2} type="text" id="name" placeholder='Name' className='form_input' onChange={(e) => setFormData({ ...FormData, Hob2: e.target.value })} /><br /> </Grid>
                                <Grid item xs={6}> <input defaultValue={DefaultFormData.Hob3} type="text" id="name" placeholder='Name' className='form_input' onChange={(e) => setFormData({ ...FormData, Hob3: e.target.value })} /><br /> </Grid>
                                <Grid item xs={6}> <input defaultValue={DefaultFormData.Hob4} type="text" id="name" placeholder='Name' className='form_input' onChange={(e) => setFormData({ ...FormData, Hob4: e.target.value })} /><br /> </Grid>
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
                                        <ListItem> <input defaultValue={DefaultFormData.Exp1_start_year} type="number" className='form_input' placeholder='Start' maxLength={4} onChange={(e) => setFormData({ ...FormData, Exp1_start_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp1_end_year} type="number" className='form_input' placeholder='End' onChange={(e) => setFormData({ ...FormData, Exp1_end_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp1_compnay_name} type="text" className='form_input' placeholder='Company Name' onChange={(e) => setFormData({ ...FormData, Exp1_compnay_name: e.target.value })} /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe into 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150} defaultValue={DefaultFormData.Edu1_details}
                                                onChange={(e) => setFormData({ ...FormData, Exp1_details: e.target.value })}
                                            /></ListItem>
                                    </Grid>


                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>Second Experience <span className="required" style={{ color: 'red', fontSize: '0.8em' }}>*</span></Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp2_start_year} type="number" className='form_input' placeholder='Start' onChange={(e) => setFormData({ ...FormData, Exp2_start_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp2_end_year} type="number" className='form_input' placeholder='End' onChange={(e) => setFormData({ ...FormData, Exp2_end_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp2_compnay_name} type="text" className='form_input' placeholder='Company Name' onChange={(e) => setFormData({ ...FormData, Exp2_compnay_name: e.target.value })} /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe into 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150} defaultValue={DefaultFormData.Edu2_details}
                                                onChange={(e) => setFormData({ ...FormData, Exp2_details: e.target.value })}
                                            /></ListItem>
                                    </Grid>

                                    <Grid item xs={12} >
                                        <Typography variant="body1" color="initial" textAlign='center' fontWeight={600}>Third Experience</Typography>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp3_start_year} type="number" className='form_input' placeholder='Start' onChange={(e) => setFormData({ ...FormData, Exp3_start_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp3_end_year} type="number" className='form_input' placeholder='End' onChange={(e) => setFormData({ ...FormData, Exp3_end_year: e.target.value })} /></ListItem>
                                    </Grid>
                                    <Grid item xs={12} >
                                        <ListItem> <input defaultValue={DefaultFormData.Exp3_compnay_name} type="text" className='form_input' placeholder='Company Name' onChange={(e) => setFormData({ ...FormData, Exp3_compnay_name: e.target.value })} /></ListItem>
                                        <ListItem>
                                            <textarea
                                                type="about"
                                                id="about"
                                                placeholder='Describe into 150 letters'
                                                className='textarea_input'
                                                rows="6" cols="50"
                                                maxLength={150} defaultValue={DefaultFormData.Edu3_details}
                                                onChange={(e) => setFormData({ ...FormData, Exp3_details: e.target.value })}
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
                                        <Grid xs={12} >
                                            <ListItem><input defaultValue={DefaultFormData.Language1} type="text" placeholder='1st language' className='form_input' onChange={(e) => setFormData({ ...FormData, Language1: e.target.value })} /></ListItem>
                                            <ListItem><input defaultValue={DefaultFormData.Language2} type="text" placeholder='2nd language' className='form_input' onChange={(e) => setFormData({ ...FormData, Language2: e.target.value })} /></ListItem>
                                            <ListItem><input defaultValue={DefaultFormData.Language3} type="text" placeholder='3rd language' className='form_input' onChange={(e) => setFormData({ ...FormData, Language3: e.target.value })} /></ListItem>
                                        </Grid>
                                    </Grid>
                                </List>
                            </Card>
                        </Box>
                    </Grid>
                </Grid>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
                    <Button onClick={handleInput}>Submit</Button>
                    <Button
                        sx={{
                            background: 'linear-gradient(45deg, #B02E0C 30%, #EB4511 90%)',
                            color: "#fff",
                            '&:hover': {
                                backgroundColor: 'red',
                            },
                        }}
                        onClick={ClearState}
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
            <ToastContainer />
        </Box>
    )
}

export default EditTemplate




// {category === 'IT' && (
//     <>
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="IT input 1" />
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="IT input 2" />
//         {/* Additional IT-specific input fields */}
//     </>
// )}

// {category === 'health' && (
//     <>
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="Health input 1" />
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="Health input 2" />
//         {/* Additional health-specific input fields */}
//     </>
// )}

// {category === 'managment' && (
//     <>
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="Business input 1" />
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="Business input 2" />
//         {/* Additional business-specific input fields */}
//     </>
// )}

// {category === 'business' && (
//     <>
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="Business input 1" />
//         <input defaultValue={DefaultFormData.Name} type="text" placeholder="Business input 2" />
//         {/* Additional business-specific input fields */}
//     </>
// )}