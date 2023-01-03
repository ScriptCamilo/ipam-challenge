import { globalCss } from 'root/stitches.config';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    outline: 'none',
    border: 0
  },

  'html, body': {
    fontSize: '62.5%',
    fontFamily: '"Inter", sans-serif',
    fontWeight: 500,
    background: '$green4',
    color: '$green12',
  },

  h1: {
    fontSize: '$lg2x',
  },

  h2: {
    fontSize: '$lgx',
  },

  h3: {
    fontSize: '$lg',
  },

  'p, button, label, input, div, span': {
    fontSize: '$md'
  },
});
