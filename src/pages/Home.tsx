import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { SearchBox } from '../components';

export const Home = () => {
  return (
    <Container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        transform: 'translateY(50%)',
      }}
    >
      <CssBaseline />
      {/* Search box */}
      <SearchBox showSiteName={true} />
    </Container>
  );
};
