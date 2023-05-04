import React from 'react'
import React from 'react'
import '../Components/Style.css'
import { Container, Stack } from '@mui/material'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Login = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "300px",
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '1rem',
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const [SecOpen, setSecOpen] = React.useState(false);
    const HandleSignUp = () => {
        setOpen(false);
        setSecOpen(true);
    };
    const handleSecClose = () => {
        setSecOpen(false);
        setOpen(true);
    };
    const handleSecC = () => {
        setSecOpen(false);
    };


    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={style}>
                    <Typography
                        id="transition-modal-title"
                        variant="h4" component="h2"
                        fontWeight='600' textAlign='center'
                    >
                        Log In
                    </Typography>
                    <Box>
                        <Stack direction="column" mt={4}>
                            <label for="" style={{ fontWeight: "600" }}>Email</label>
                            <input type="email" placeholder='Email' className='input' /><br />
                            <label for="" style={{ fontWeight: "600" }}>Password</label>
                            <input type="password" placeholder='password' className='input' /><br />
                        </Stack>
                    </Box>
                    <Button sx={{ width: '100%', mt: 2, fontWeight: '600', p: 2.3 }}>Log In</Button>
                    <Typography variant="body1" color="initial" mt={2}>
                        Create new account
                        <span style={{ cursor: 'pointer', fontWeight: "600", fontStyle: "underline" }} onClick={HandleSignUp}> SignUp</span>
                    </Typography>
                </Box>
            </Modal>

            {/* SignUp  */}
            <Modal
                open={SecOpen}
                onClose={handleSecC}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Box sx={style}>
                    <Typography
                        id="transition-modal-title"
                        variant="h4" component="h2"
                        fontWeight='600' textAlign='center'
                    >
                        Sign Up
                    </Typography>
                    <Box>
                        <Stack direction="column" mt={4}>
                            <label for="">Name</label>
                            <input type="text" placeholder='Name' className='input' /><br />
                            <label for="">Email</label>
                            <input type="email" placeholder='Email' className='input' /><br />
                            <label for="">Password</label>
                            <input type="password" placeholder='password' className='input' /><br />
                            <label for="">Confirm Password</label>
                            <input type="password" placeholder='password' className='input' /><br />
                        </Stack>
                    </Box>
                    <Button sx={{ width: '100%', mt: 2, fontWeight: '600', p: 2.3 }}>Sign Up</Button>
                    <Typography variant="body1" color="initial" mt={2}>Already Registered <span style={{ cursor: 'pointer', fontWeight: "600" }} onClick={handleSecClose}> LogIn</span></Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Login