import Container from '@mui/material/Container';

export const ImdbPlayer = ({ url }: { url: string }) => {
  return (
    <Container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { sx: 'center', sm: 'center', md: 'center', lg: 'end' },
        justifyContent: 'center',
        pr: 0,
      }}
    >
      <iframe
        width='480'
        height='360'
        src={`${url}?autoplay=false&width=480`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </Container>
  );
};
