import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
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
        debugger
        setAccountDetails(response.data.accountDetails);
      } catch (err) {
        debugger
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
    <div>
      <h1>Welcome, {accountDetails.username}</h1>
      <p>Account Number: {accountDetails.accountNumber}</p>
      <p>Balance: ${accountDetails.balance}</p>
    </div>
  );
};

export default Dashboard;
