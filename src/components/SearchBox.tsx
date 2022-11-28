import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { SearchParams } from '../types';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { searchTitle } from '../store/titles/titles-actions';

export const SearchBox = ({ showSiteName = false }: { showSiteName?: boolean }) => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const genres = useAppSelector((state) => state.titles.genres);
  const dispatch = useAppDispatch();
  const years = [];
  const minYear = 1888;
  const maxYear = new Date().getFullYear();
  for (let i = minYear; i <= maxYear; i++) {
    years.push(i);
  }

  const [formData, setFormData] = useState<SearchParams>({
    q: search.get('q') ?? '',
    genre: search.get('genre') ?? '',
    year: search.get('year') ?? '',
  });

  const searchHandler = () => {
    if (formData.q) {
      dispatch(searchTitle(formData));
      navigate(`/search?q=${formData.q}&genre=${formData.genre}&year=${formData.year}`);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: alpha(theme.palette.grey[900], 0.7),
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 3,
        borderRadius: 10,
        mt: 2,
        transition: 'all 1s',
        p: 5,
      }}
    >
      {/* Site Name */}
      {showSiteName && (
        <Typography component='h1' variant='h2' align='center' color='text.primary' display={'inline'}>
          Movie{' '}
          <Box color='primary.main' display={'inline'}>
            Lens
          </Box>
        </Typography>
      )}

      {/* Search Form */}
      <Box sx={{ mt: 3, width: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='movie-title-ac'
              value={formData.q}
              onChange={(event) => {
                setFormData({ ...formData, q: event.target.value });
              }}
              fullWidth
              placeholder={'Type a movie title'}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              id='movie-genre-select'
              value={formData.genre}
              displayEmpty
              fullWidth
              onChange={(event) => {
                setFormData({ ...formData, genre: event.target.value });
              }}
              renderValue={(selected) => (selected ? selected : 'Genre')}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {genres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.displayName}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Select
              id='movie-min-year-select'
              value={formData.year}
              displayEmpty
              fullWidth
              onChange={(event) => {
                const value = event.target.value;
                setFormData({ ...formData, year: value ? +value : '' });
              }}
              renderValue={(selected) => (selected ? selected : 'Year from')}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={2}>
            <Button type='submit' variant='contained' fullWidth sx={{ py: 2 }} onClick={searchHandler}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
