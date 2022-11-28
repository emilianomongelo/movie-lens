import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import WatchLaterIconOutlined from '@mui/icons-material/WatchLaterOutlined';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { ImdbPlayer, TitleDetailsColumn } from '../components';
import {getTitle, reset} from '../store/titles/titles-actions';
import { setFavourites, setWatchLater } from '../store/user/user-actions';

export const Title = () => {
  const { id } = useParams();
  const theme = useTheme();
  const title = useAppSelector((state) => state.titles.title);
  const favourites = useAppSelector((state) => state.user.favourites);
  const watchLater = useAppSelector((state) => state.user.watchLater);
  const dispatch = useAppDispatch();

  const handleFav = () => {
    if (title) {
      dispatch(setFavourites(title.id));
    }
  };

  const handleWatchLater = () => {
    if (title) {
      dispatch(setWatchLater(title.id));
    }
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getTitle(id as string));
  }, [dispatch, id]);

  return (
    title && (
      <main>
        <CssBaseline />
        <Container sx={{ backgroundColor: alpha(theme.palette.grey[900], 0.7), width: '100%', py: 1 }}>
          {/* Movie title */}
          <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={12} md={12} sm={12}>
              <Typography component='h4' variant='h4' align='left' color='text.primary' gutterBottom>
                {title?.title} {title?.year && `(${title?.year})`}{' '}
                {title?.rating && (
                  <Rating name='half-rating-read' defaultValue={title?.rating / 2} precision={0.5} readOnly />
                )}
                {favourites.includes(title.id) ? (
                  <FavoriteIcon sx={{ ml: 2 }} onClick={handleFav} color={'primary'} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={{ ml: 2 }} onClick={handleFav} color={'primary'} />
                )}
                {watchLater.includes(title.id) ? (
                  <WatchLaterIcon sx={{ ml: 1 }} onClick={handleWatchLater} color={'primary'} />
                ) : (
                  <WatchLaterIconOutlined sx={{ ml: 1 }} onClick={handleWatchLater} color={'primary'} />
                )}
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} direction='row' justifyContent='center' alignItems='center'>
            {/* Title Details Column */}
            <Grid item xs={12} sm={12} md={12} lg={6}>
              <TitleDetailsColumn title={title} />
            </Grid>

            {/* Title Trailer Column */}
            {title?.trailer && (
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <ImdbPlayer url={title?.trailer}></ImdbPlayer>
              </Grid>
            )}
          </Grid>
        </Container>
      </main>
    )
  );
};
