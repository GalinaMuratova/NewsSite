import React from 'react';
import './App.css';
import {CssBaseline} from "@mui/material";
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import News from './features/news/News';

function App() {
  return (
      <>
        <CssBaseline />
        <header>
          <AppToolbar />
        </header>
        <main>
          <News></News>
        </main>
      </>
  );
}

export default App;
