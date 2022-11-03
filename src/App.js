import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

// internal components
import Header from './Header/Header';
import StickyFooter from './Footer/Footer';

const sections = [
  { title: 'Home', url: '#' },
  { title: 'Teams', url: '#' },
  { title: 'Players', url: '#' },
  { title: 'Games', url: '#' }
];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container >
    <Header title="NBA" sections={sections} />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <ProTip />
        <StickyFooter />
      </Box>
    </Container>
  );
}
