import { keyframes, styled } from 'root/stitches.config';


const spinner = keyframes({
  '0%': {
    strokeDashoffset: 'calc($$loadingSize * 0.066rem)',
    transform: 'rotate(0deg)',
  },
  '50%': {
    strokeDashoffset: 'calc($$loadingSize * 0.314rem)',
    transform: 'rotate(720deg)',
  },
  '100%': {
    strokeDashoffset: 'calc($$loadingSize * 0.066rem)',
    transform: 'rotate(1080deg)',
  },
});

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Spinner = styled('svg', {
  x: '0rem',
  y: '0rem',
  width: 'calc($$loadingSize * 1rem / 10)',
  height: 'calc($$loadingSize * 1rem / 10)',
  overflow: 'visible',

  variants: {
    size: {
      small: {
        $$loadingSize: 24,
        $$strokeWidth: 2,
      },

      medium: {
        $$loadingSize: 32,
        $$strokeWidth: 4,
      },

      large: {
        $$loadingSize: 48,
        $$strokeWidth: 6,
      }
    },

    color: {
      primary: {
        $$loadingColor: '$colors$green11',
      },
      secondary: {
        $$loadingColor: 'white',
      },
    }
  },

  defaultVariants: {
    size: 'small',
    color: 'primary',
  }
});

export const Circle = styled('circle', {
  fill: 'transparent',
  stroke: '$$loadingColor',
  strokeWidth: '$$strokeWidth',
  strokeLinecap: 'round',
  strokeDasharray: 'calc($$loadingSize * 0.314rem)',
  transformOrigin: 'calc($$loadingSize * 0.05rem) calc($$loadingSize * 0.05rem) 0rem',
  animation: `${spinner} 3s linear infinite`,

  cx: 'calc(($$loadingSize * 1rem / 10) / 2)',
  cy: 'calc(($$loadingSize * 1rem / 10) / 2)',
  r: 'calc((($$loadingSize - 4) / 10) * 1rem / 2)',
});
