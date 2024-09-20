import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';

const AccountDetails  = () => {
  const [accountDetails, setAccountDetails] = useState(null);
  const [error, setError] = useState(null);
  const username = localStorage.getItem('username'); // Retrieve username from localStorage

  useEffect(() => {
    if (!username) {
      setError('User not logged in');
      return;
    }

    const fetchAccountDetails = async () => {
      try {
        // Use query parameters for GET requests
        const response = await axios.get('http://localhost:5000/bank/bank-details', {
          params: { username: username }, // Pass the username as a query parameter
        });
        setAccountDetails(response.data.accountDetails);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred');
      }
    };

    fetchAccountDetails();
  }, [username]); // Ensure username is included in the dependency array

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!accountDetails) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ marginTop: 4, padding: 2 }}>
        <CardContent>
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h1" gutterBottom>
                Welcome, {accountDetails.username}
              </Typography>
            </Grid>

            <Grid item container direction="column" alignItems="center">
              <Typography variant="subtitle1" color="textSecondary">
                Account Number:
              </Typography>
              <Typography variant="h6">{accountDetails.accountNumber}</Typography>
            </Grid>

            <Grid item container direction="column" alignItems="center">
              <Typography variant="subtitle1" color="textSecondary">
                Balance:
              </Typography>
              <Typography variant="h5" color="primary">
                ${accountDetails.balance}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AccountDetails;
