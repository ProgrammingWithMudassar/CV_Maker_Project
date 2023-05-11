import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Button, Grid, Stack } from '@mui/material'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import ReplyIcon from '@mui/icons-material/Reply';
import './Style.css'

const EditTemplate = () => {

    const paramName = useParams();
    const [category, setCategory] = useState('')
    const [letterCount, setLetterCount] = useState(0);

    useEffect(() => {
        setCategory(paramName.id);
    }, [])


    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const count = inputValue.length;
        setLetterCount(count);
    };

    return (
        <Box my={4}>
            <Box sx={{ width: "100%" }}>
                <Link to='/resume'>
                    <Button sx={{ position: 'realtive', left: { xs: "120px", sm: "250px", md: "500px" } }}> <ReplyIcon sx={{ ml: -0.5, mt: -0.5 }} /> Back </Button>
                </Link>
            </Box>
            <Container >
                <Typography variant="h6" color="initial" fontWeight={600}>Build Your Resume</Typography>
                <Grid container spacing={4} sx={{ textAlign: 'left', pt: 4 }}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box >
                            <Box>
                                <label for="name" style={{ fontWeight: "600", }}>Name</label>
                                <input type="text" id="name" placeholder='Name' className='form_input' /><br />
                            </Box>
                            <Box mt={1}>
                                <label for="position" style={{ fontWeight: "600", }}>Job Position </label>
                                <input type="text" id="position" placeholder='Job Position' className='form_input' /><br />
                            </Box>
                            <Box mt={2}>
                                <Typography variant="h6" color="initial" fontWeight={600} textAlign="center">Contact Information</Typography>

                                <Box>
                                    <label for="number" style={{ fontWeight: "600", }}>Number</label>
                                    <input type="number" id="number" placeholder='Contact Number' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="email" style={{ fontWeight: "600", }}>Email</label>
                                    <input type="email" id="email" placeholder='Email' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="address" style={{ fontWeight: "600", }}>Address</label>
                                    <input type="address" id="address" placeholder='Address' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="website" style={{ fontWeight: "600", }}>Website Link</label>
                                    <input type="website" id="website" placeholder='Website Link' className='form_input' /><br />
                                </Box>

                            </Box>

                            <Box mt={2}>
                                <Typography variant="h6" color="initial" fontWeight={600} textAlign="center">Your Skills</Typography>

                                <Box>
                                    <label for="number" style={{ fontWeight: "600", }}>Number</label>
                                    <input type="number" id="number" placeholder='Contact Number' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="email" style={{ fontWeight: "600", }}>Email</label>
                                    <input type="email" id="email" placeholder='Email' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="address" style={{ fontWeight: "600", }}>Address</label>
                                    <input type="address" id="address" placeholder='Address' className='form_input' /><br />
                                </Box>
                                <Box mt={1}>
                                    <label for="website" style={{ fontWeight: "600", }}>Website Link</label>
                                    <input type="website" id="website" placeholder='Website Link' className='form_input' /><br />
                                </Box>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <label for="about" style={{ fontWeight: "600" }}>About Me</label>
                        <textarea
                            type="about"
                            id="about"
                            placeholder='Describe yourself in 250 letters'
                            className='textarea_input'
                            rows="10" cols="50"
                            onChange={handleInputChange}
                            maxLength={250}
                        /><br />
                        <p>Number of words: {letterCount}</p>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        Third
                    </Grid>
                </Grid>
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