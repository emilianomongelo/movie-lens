import { useEffect } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { Titles } from '../components';
import { getTitles } from '../store/titles/titles-actions';

export const Favourites = () => {
  const favourites = useAppSelector((state) => state.user.favourites);
  const titles = useAppSelector((state) => state.titles.titles);
  const loading = useAppSelector((state) => state.titles.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTitles(favourites));
  }, [dispatch, favourites]);

  return (
    <main className={'search-container'}>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexFlow: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <CssBaseline />

        {/* Search Results */}
        {!loading && <Titles titles={titles} sectionTitle={'Favourites'} />}
      </Container>
    </main>
  );
};
