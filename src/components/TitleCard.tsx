import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import noPreview from '../img/no-image.png';
import { TitleModel } from '../models/redux-models';

export const TitleCard = ({ title }: { title: TitleModel }) => {
  return (
    <Grid item key={title.id} sm={4} xs={6} md={3}>
      <a href={`/title/${title.id}`}>
        <Card
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia
            component='img'
            image={title.image ?? noPreview}
            alt='random'
            sx={{ height: '250px' }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant='h6'>
              {title.title} {title.description}
            </Typography>
          </CardContent>
        </Card>
      </a>
    </Grid>
  );
};
