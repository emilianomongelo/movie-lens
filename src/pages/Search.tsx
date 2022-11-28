import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { SearchBox, Titles } from '../components';
import { searchTitle } from '../store/titles/titles-actions';

export const Search = () => {
  const [search] = useSearchParams();
  const titles = useAppSelector((state) => state.titles.titles);
  const loading = useAppSelector((state) => state.titles.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      searchTitle({
        q: search.get('q'),
        genre: search.get('genre') ?? '',
        year: search.get('year') ?? '',
      })
    );
  }, [dispatch, search]);

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
        disableGutters
      >
        <CssBaseline />
        {/* Search box */}
        <SearchBox />

        {/* Search Results */}
        {!loading && <Titles titles={titles} sectionTitle={'Search results'} />}
      </Container>
    </main>
  );
};
