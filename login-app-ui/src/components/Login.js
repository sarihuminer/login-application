import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ username: false, password: false, message: '' });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      localStorage.setItem('username', response.data.username); // Save to localStorage
      navigate('/account-details');
    } catch (error) {
      setError({
        username: true,
        password: true,
        message: 'Invalid username or password. Please try again.',
      });
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={error.username}
            helperText={error.username ? 'Invalid username' : ''}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error.password}
            helperText={error.password ? 'Invalid password' : ''}
          />
          {error.message && (
            <Typography color="error" align="center">
              {error.message}
            </Typography>
          )}

          <Grid container spacing={2} style={{ marginTop: 10 }}>
            <Grid item xs={6} textAlign="left">
              {/* Link to Register Page */}
              <Link onClick={() => navigate('/register')} style={{ cursor: 'pointer' }}>
                Register
              </Link>
            </Grid>
            <Grid item xs={6} textAlign="right">
              <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
