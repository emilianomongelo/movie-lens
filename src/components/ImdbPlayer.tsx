import { useEffect, useRef, useState } from 'react';
import { pathOr } from 'ramda';
import Container from '@mui/material/Container';

export const ImdbPlayer = ({ url }: { url: string }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const width: any = pathOr(null, ['current', 'offsetWidth'], ref);
    setWidth(width);
  }, [ref]);

  console.log(width);
  return (
    <Container
      className={'embed-container'}
      sx={{
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'end' },
        justifyContent: 'center',
        position: 'relative',
        paddingBottom: { xs: '320px'},
        pr: 0,
      }}
      ref={ref}
      disableGutters
    >
      <iframe
        width={width}
        src={`${url}?autoplay=false&width=${width}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </Container>
  );
};
