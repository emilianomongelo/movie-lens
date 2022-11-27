import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { useAppSelector } from '../hooks/redux-hooks';
import { Search, SearchResults } from '../components';

export const Home = () => {
  const titles = useAppSelector((state) => state.title.titles);
  const genres = useAppSelector((state) => state.title.genres);

  return (
    <main className={'home-container'}>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          height: titles?.length === 0 ? '100vh' : 'auto',
        }}
      >
        <CssBaseline />

        {/* Search box */}
        <Search genres={genres} resultsCount={titles?.length} />

        {/* Search Results */}
        {titles?.length > 0 && <SearchResults titles={titles} />}
      </Container>
    </main>
  );
};
