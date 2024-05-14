import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import Frame7 from '../assets/Frame 7.png';


const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', padding: '20px 0' }}>
      {/* {{<img src={Frame7} alt="Title" style={{width:'150px',textAlign:'left'}}/>}} */}
      <Container >
        <Grid container justifyContent="space-between">
        <hr className='hr-style'/>
          <Grid item xs={12} sm={5}>
          
            <Typography align="left">
              <Link href="/about" style={{ color: 'grey',textDecoration:'none' }}>About</Link>
              <br/>
              <Link href="/working" style={{ color: 'grey',textDecoration:'none' }}>How it works</Link>
              
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Typography align="left">
              <Link href="/privacy" style={{ color: 'grey',textDecoration:'none' }}>Privacy Policy</Link>
              <br/>
              <Link href="/terms" style={{ color: 'grey',textDecoration:'none' }}>Terms & conditions</Link>
              <br/>
              <Link href="/data" style={{ color: 'grey',textDecoration:'none' }}>How your data is managed ?</Link>
            </Typography>
            
          </Grid>
          <hr className='hr-style'/>
          <Typography color="grey">
                2024 Copyright | Mindscape | All rights reserved
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;