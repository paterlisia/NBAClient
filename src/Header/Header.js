import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Header(props) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }} style={{ background: 'black', opacity: 0.9}}>
        <Button variant="outlined" size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="white"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;