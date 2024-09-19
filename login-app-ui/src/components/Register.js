import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:5000/register', { username, password });
            setMessage('Registration successful!');
            localStorage.setItem('username', response.data.username);
            navigate('/dashboard'); // Navigate to dashboard after successful registration
        } catch (error) {
            setMessage('Registration failed');
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Register
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                    <TextField
                        label="Username"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {message && (
                        <Typography color="primary" align="center">
                            {message}
                        </Typography>
                    )}
                    <Box textAlign="center" marginTop={2}>
                        <Button variant="contained" color="primary" onClick={handleRegister}>
                            Register
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default Register;
