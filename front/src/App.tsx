import React from 'react';
import './App.css';
import { Container, CssBaseline } from '@mui/material';
import AppToolbar from './components/UI/AppToolbar/AppToolbar';
import News from './features/news/News';
import { Route, Routes } from 'react-router-dom';

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
              <Route path='/news/create' element={(<div>Add</div>)} />
              <Route path='/news/:id' element={(<div>More info</div>)}/>
            </Routes>
          </Container>
        </main>
      </>
  );
}

export default App;
