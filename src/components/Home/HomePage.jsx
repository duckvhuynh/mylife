import React, { useState } from 'react';
import { Typography, Container, TextField, Grid, Paper } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const totalWeeks = 3650; // 70 years * 52 weeks

  // Calculate remaining weeks
  const calculateRemainingWeeks = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const weeksSinceBirth = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24 * 7));
    return Math.max(totalWeeks - weeksSinceBirth, 0); // Ensure non-negative
  };

  const remainingWeeks = dateOfBirth ? calculateRemainingWeeks(dateOfBirth) : totalWeeks;

  // Style for past weeks
  const pastWeekStyle = {
    backgroundColor: 'rgb(127, 140, 141)', // Grey color for past weeks
    width: '100%',
    height: '100%'
  };

  // Style for remaining weeks
  const remainingWeekStyle = {
    backgroundColor: 'rgb(39, 174, 96)', // Green color for remaining weeks
    width: '100%',
    height: '100%'
  };

  const currentWeekStyle = {
    backgroundColor: 'rgb(243, 156, 18)',
    width: '100%',
    height: '100%'
  };

  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: '5vh' }}>
      <Typography variant="h2" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
        Welcome to Life
      </Typography>
      <Typography variant="body1" gutterBottom>
        Enter your date of birth to see your remaining weeks.
      </Typography>
      <TextField
        label="Date of Birth"
        type="date"
        onChange={(e) => setDateOfBirth(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{ marginBottom: '20px' }}
      />
      <Grid container spacing={1}>
        {Array.from({ length: totalWeeks }).map((_, index) => (
          <Grid item key={index} xs={1} style={{ width: '20px', height: '20px' }}>
            <Paper elevation={0} style={index === remainingWeeks ? currentWeekStyle : index < totalWeeks - remainingWeeks ? pastWeekStyle : remainingWeekStyle} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="body1" gutterBottom>
        {dateOfBirth ? `Remaining Weeks: ${remainingWeeks}` : 'Please enter your date of birth.'}
      </Typography>
    </Container>
  );
};

export default HomePage;