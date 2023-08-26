import React from 'react';
import './App.css';
import {CssBaseline} from "@mui/material";
import AppToolbar from './components/UI/AppToolbar/AppToolbar';

function App() {
  return (
      <>
        <CssBaseline />
        <header>
          <AppToolbar />
        </header>
      </>
  );
}

export default App;
