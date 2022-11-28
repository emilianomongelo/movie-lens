import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchBox } from '../components';

export const Home = () => {
  return (
    <main className={'home-container'} style={{ position: 'relative' }}>
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          transform: { xs: 'translateY(20%)', sm: 'translateY(100%)' },
        }}
        disableGutters
      >
        <CssBaseline />
        {/* Search box */}
        <SearchBox showSiteName={true} />
      </Container>
    </main>
  );
};
