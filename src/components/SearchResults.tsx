import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { TitleModel } from '../models/redux-models';
import { TitleCard } from './TitleCard';

export const SearchResults = ({ titles }: { titles: TitleModel[] }) => {
  const titleList = titles.map((title) => <TitleCard key={title.id} title={title} />);
  return (
    <Box
      sx={{
        mt: 2,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 3,
      }}
    >
      <Container sx={{ py: 1 }}>
        <Grid container spacing={2}>
          {titleList}
        </Grid>
      </Container>
    </Box>
  );
};
