import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';

const EditTemplate = () => {
    var paramName  = useParams();
    console.log(paramName.id);

    return (
        <Box mt={4}>
            <Typography variant="h6" color="initial" fontWeight={600}>Build Your Resume</Typography>
            <Container >
                <div>
                    
                    {paramName.id === 'business' && (
                        <>
                            <input type="text" placeholder="Business input 1" />
                            <input type="text" placeholder="Business input 2" />
                            {/* Additional business-specific input fields */}
                        </>
                    )}

                    {paramName.id === 'IT' && (
                        <>
                            <input type="text" placeholder="IT input 1" />
                            <input type="text" placeholder="IT input 2" />
                            {/* Additional IT-specific input fields */}
                        </>
                    )}

                    {paramName.id === 'health' && (
                        <>
                            <input type="text" placeholder="Health input 1" />
                            <input type="text" placeholder="Health input 2" />
                            {/* Additional health-specific input fields */}
                        </>
                    )}
                </div>
            </Container>
        </Box>
    )
}

export default EditTemplate