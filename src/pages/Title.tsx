import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { ImdbPlayer, TitleDetailsColumn } from '../components';
import { getTitle } from '../store/title-actions';

export const Title = () => {
  const { id } = useParams();
  const theme = useTheme();
  const title = useAppSelector((state) => state.title.title);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTitle(id as string));
  });

  return (
    title && (
      <main>
        {/* Header */}
        <Container sx={{ width: '100%', mt: { xs: 0, sm: 2 } }}>
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
        </Container>

        <Container sx={{ backgroundColor: alpha(theme.palette.grey[900], 0.7), width: '100%', py: 1 }}>
          <CssBaseline />
          <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
            {/* Title */}
            <Grid item xs={12} sm={12} sx={{ ml: 2 }}>
              <Typography component='h4' variant='h4' align='left' color='text.primary' gutterBottom>
                {title?.title} {title?.year && `(${title?.year})`}{' '}
                {title?.rating && (
                  <Rating name='half-rating-read' defaultValue={title?.rating / 2} precision={0.5} readOnly />
                )}
              </Typography>
            </Grid>

            {/* Title Details Column */}
            <Grid item xs={12} sm={12} md={6}>
              <TitleDetailsColumn title={title} />
            </Grid>

            {/* Title Trailer Column */}
            {title?.trailer && (
              <Grid item xs={12} sm={12} md={6}>
                <ImdbPlayer url={title?.trailer}></ImdbPlayer>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    )
  );
};
