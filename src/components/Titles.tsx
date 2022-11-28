import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TitleModel } from '../models/redux-models';
import { TitleCard } from './TitleCard';

export const Titles = ({ titles, sectionTitle }: { titles: TitleModel[]; sectionTitle?: string }) => {
  return (
    <Box
      sx={{
        py: 1,
        mt: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 3,
      }}
    >
      {sectionTitle && (
        <Container sx={{ p: 0, m: 0 }} disableGutters>
          <Typography
            component='h3'
            variant='h3'
            align='left'
            pl={0}
            color='text.primary'
            gutterBottom
          >
            {sectionTitle}
          </Typography>
        </Container>
      )}
      <Grid container spacing={2}>
        {titles && titles.map((title) => <TitleCard key={title.id} title={title} />)}
      </Grid>
    </Box>
  );
};
