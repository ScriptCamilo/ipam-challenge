import { styled } from 'root/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$space4',
  gap: '$space4',
  height: '100vh',

  '@tablet': {
    flexDirection: 'row',
  },
});

export const FormWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$space4',

  '@tablet': {
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  }
});
