import React from 'react'
import { Box, Button, Container, Divider } from '@mui/material'
import CV from '../Assets/png/CV.png'

const Templates = () => {
    return (
        <Box>
            <Container >
                <Box sx={{
                    display: 'flex', flexWrap: 'wrap',
                    mt: 3, justifyContent: { xs: 'center', md: 'space-between' },
                    gap: { xs: 2, md: 4 }
                }}>
                    <Button sx={{ fontSize: { xs: "0.9rem", md: '1.2rem' }, p: { xs: 1, md: 2.3 } }} >Information Technology</Button>
                    <Button sx={{ fontSize: { xs: "0.9rem", md: '1.2rem' }, p: { xs: 1, md: 2.3 } }}>Health Field</Button>
                    <Button sx={{ fontSize: { xs: "0.9rem", md: '1.2rem' }, p: { xs: 1, md: 2.3 } }}>Finance Management</Button>
                    <Button sx={{ fontSize: { xs: "0.9rem", md: '1.2rem' }, p: { xs: 1, md: 2.3 } }}>Business</Button>
                    <Button sx={{ fontSize: { xs: "0.9rem", md: '1.2rem' }, p: { xs: 1, md: 2.3 } }}>All</Button>
                </Box>
                <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    sx={{ mt: 3 }}
                />

                <Box sx={{
                    display: 'flex', flexWrap: 'wrap',
                    mt: 3, justifyContent: 'center',
                    gap: { xs: 2, md: 4 }
                }}>
                    <img src={CV} alt="" width={250} style={{ boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)" }}/>
                    <img src={CV} alt="" width={250} style={{ boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)" }}/>
                    <img src={CV} alt="" width={250} style={{ boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)" }}/>
                    <img src={CV} alt="" width={250} style={{ boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)" }}/>
                    <img src={CV} alt="" width={250} style={{ boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)" }}/>
                </Box>
            </Container>
        </Box>
    )
}

export default Templates