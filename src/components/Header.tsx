import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { UserMenu } from './UserMenu';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Grid container spacing={2}>
        <Grid
          item
          sm={8}
          pl={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'center',
          }}
        >
          {pathname !== '/' && (
            <a href='/'>
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
            </a>
          )}
        </Grid>
        <Grid
          item
          md={4}
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
    </>
  );
};
