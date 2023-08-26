import React from 'react';
import './App.css';
import { Container, CssBaseline } from '@mui/material';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import News from './features/news/News';
import { Route, Routes } from 'react-router-dom';
import NewNews from './features/news/NewNews';
import OneNewsDetails from './features/news/OneNewsDetails';

function App() {
  return (
      <>
        <CssBaseline />
        <header>
          <AppToolbar />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path='/' element={(<News />)}/>
              <Route path='/news' element={(<News />)}/>
              <Route path='/news/create' element={(<NewNews />)} />
              <Route path='/news/:id' element={(<OneNewsDetails/>)}/>
            </Routes>
          </Container>
        </main>
      </>
  );
}

export default App;
