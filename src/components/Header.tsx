import { useLocation, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserMenu } from './UserMenu';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <Grid container spacing={2}>
        <Grid
          item
          sm={8}
          xs={10}
          pl={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
          }}
        >
          {pathname !== '/' && (
            <Link to='/'>
              <Typography
                component='h1'
                variant='h2'
                sx={{ textAlign: { xs: 'center', sm: 'left' } }}
                color='text.primary'
                gutterBottom
              >
                Movie{' '}
                <Box color='primary.main' display={'inline'}>
                  Lens
                </Box>
              </Typography>
            </Link>
          )}
        </Grid>
        <Grid
          item
          sm={4}
          xs={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            justifyContent: 'center',
            pr: 0,
          }}
        >
          <UserMenu />
        </Grid>
      </Grid>
    </header>
  );
};
