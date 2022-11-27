import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import noPreview from '../img/no-image.png';
import { TitleModel } from '../models/redux-models';

export const TitleDetailsColumn = ({ title }: { title: TitleModel }) => {
  return (
    title && (
      <>
        <Grid
          container
          spacing={{ xs: 0, sm: 2 }}
          sx={{ ml: 0 }}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item xs={12} sm={6}>
            <CardMedia
              component='img'
              image={title?.image ?? noPreview}
              alt='random'
              sx={{ height: '450px' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container maxWidth='sm' sx={{ opacity: 0.8, pt: { xs: 2 } }}>
              {title?.directors && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Direction: {title?.directors}
                </Typography>
              )}

              {title?.stars && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Cast: {title?.stars}
                </Typography>
              )}

              {title?.genres && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Genre: {title?.genres}
                </Typography>
              )}

              {title?.runtime && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Running time: {title?.runtime} mins
                </Typography>
              )}

              {title?.year && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Country: {title?.year}
                </Typography>
              )}

              {title?.rating && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Rating: {title?.rating}
                </Typography>
              )}

              {title?.countries && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Country: {title?.countries}
                </Typography>
              )}

              {title?.plot && (
                <Typography component='p' variant='subtitle2' align='left' color='text.primary' paragraph>
                  Plot: {title?.plot}
                </Typography>
              )}
            </Container>
          </Grid>
        </Grid>
      </>
    )
  );
};
