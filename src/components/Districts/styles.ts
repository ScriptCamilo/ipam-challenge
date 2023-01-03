
import { styled } from 'root/stitches.config';

export const InfoWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingHorizontal: '$space4',
  backgroundColor: '$green12',
  height: '$size10',
  borderRadius: '$radius3',
  maxHeight: '$size10',

  p: {
    lineHeight: 0,
    color: '$green8',
    justifySelf: 'flex-start',
  },

  '@tablet': {
    maxWidth: '40rem',
  }
});

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space4',
  justifyContent: 'center',

  '&[data-loading="true"]': {
    [`& ${InfoWrapper}`]: {
      justifyContent: 'center',
    },
  },

  '@tablet': {
    width: '70%',
  }
});

export const Info = styled('section', {
  h2: {
    marginBottom: '$space4',
  },
});


