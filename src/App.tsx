import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Slide from '@mui/material/Slide';
import LinearProgress from '@mui/material/LinearProgress';
import { Home, Favourites, Search, Title, WatchLater } from './pages';
import { useAppSelector } from './hooks/redux-hooks';
import {Header} from "./components";

function App() {
  const loading = useAppSelector((state) => state.titles.loading);

  return (
    <Container sx={{ width: '100%', py: 1, position: 'relative' }}>
      <Slide direction='down' in={loading} mountOnEnter unmountOnExit>
        <Stack sx={{ position: 'fixed', top: 0, left: 0, width: '100%', color: 'primary' }} spacing={2}>
          <LinearProgress color='primary' />
        </Stack>
      </Slide>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/movie-lens/' element={<Home />} />
          <Route path='/movie-lens/search' element={<Search />} />
          <Route path='/movie-lens/title/:id' element={<Title />} />
          <Route path='/movie-lens/favourites' element={<Favourites />} />
          <Route path='/movie-lens/watch-later' element={<WatchLater />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
