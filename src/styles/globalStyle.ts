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
  },

  /* Chrome, Safari, Edge, Opera */
  [`input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button`]: {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  /* Firefox */
  'input[type=number]': {
    '-moz-appearance': 'textfield',
  },

  h1: {
    fontSize: '$lg2x !important',
  },

  h2: {
    fontSize: '$lgx !important',

    '@tablet': {
      fontSize: '2rem !important',
    },
  },

  h3: {
    fontSize: '$lg !important',
  },

  'p, button, label, input, div, span': {
    fontSize: '$md !important'
  },
});
