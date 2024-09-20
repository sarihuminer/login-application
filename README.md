# Login Application

This project is a simple login application built with **React** on the frontend and **Node.js** on the backend. It demonstrates how to authenticate users, validate credentials, and navigate between pages using **Material-UI** for styling.

## Features

- **Login Page**: Allows users to log in by entering their username and password.
- **User Authentication**: Checks user credentials on the server using Node.js.
- **Error Handling**: Displays error messages for invalid login attempts.
- **Session Management**: Uses local storage or cookies to persist user data after login.
- **Navigation**: Redirects users to different pages based on their authentication status.
- **Registration Link**: Users can navigate to the registration page via a link on the login form.

## Tech Stack

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **State Management**: React Hooks
- **Session Management**: Cookies/LocalStorage

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/login-app.git
2. Install the dependencies for both client and server:
    ```bash
    cd login-app-server
    npm install
    cd login-app-ui
    npm install

3. Run the backend server:
   ```bash
   cd ..
   npm start

4. Start the React frontend:
   ```bash
   cd login-app-ui
   npm start

6. Navigate to the login page.
Enter your username and password.
If the credentials are correct, you will be logged in and redirected to the homepage.
If credentials are invalid, an error message will be displayed, and you can try again.
