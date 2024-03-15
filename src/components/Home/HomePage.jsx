import React from 'react';
import { Typography, Container } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h2" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
        Welcome to Life
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore the beauty of life with us.
      </Typography>
    </Container>
  );
};

export default HomePage;