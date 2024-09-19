import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const Dashboard = () => {
    const username = localStorage.getItem('username'); // Retrieve username from localStorage

    return (
        <Container maxWidth="sm" style={{ marginTop: 50 }}>
            <Paper elevation={3} style={{ padding: 20 }}>
                <Typography variant="h4" align="center">
                    Hello, {username}!
                </Typography>
            </Paper>
        </Container>
    );
};

export default Dashboard;
