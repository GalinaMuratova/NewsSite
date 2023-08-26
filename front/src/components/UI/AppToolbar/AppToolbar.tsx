import React from 'react';
import { AppBar, Container, styled, Toolbar, Typography } from '@mui/material';
import { Link as NavLink } from 'react-router-dom';

const Link = styled(NavLink)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
  }
});

const AppToolbar = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Container>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">News</Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppToolbar;