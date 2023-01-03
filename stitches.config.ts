import { blackA, gray, green, mauve } from '@radix-ui/colors';
import { createStitches, defaultThemeMap } from '@stitches/react';

import { medias } from 'styles/screens.config';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  ...defaultThemeMap,
  theme: {
    colors: {
      ...blackA,
      ...gray,
      ...green,
      ...mauve,
    },
    fontSizes: {
      sm: '1.2rem',
      md: '1.6rem',
      lg: '2rem',
      lgx: '2.4rem',
      lg2x: '2.8rem',
    },
    space: {
      space1: '0.4rem',
      space2: '0.8rem',
      space3: '1.2rem',
      space4: '1.6rem',
      space5: '2rem',
      space6: '2.4rem',
      space7: '2.8rem',
      space8: '3.2rem',
      space9: '3.6rem',
      space10: '4rem',
    },
    radii: {
      radius1: '0.4rem',
      radius2: '0.8rem',
      radius3: '1.2rem',
      radius4: '1.6rem',
      radius5: '2rem',
      radius6: '2.4rem',
      radius7: '2.8rem',
      radius8: '3.2rem',
      radius9: '3.6rem',
      radius10: '4rem',
      circle: '100%',
    },
    sizes: {
      size1: '0.4rem',
      size2: '0.8rem',
      size3: '1.2rem',
      size4: '1.6rem',
      size5: '2rem',
      size6: '2.4rem',
      size7: '2.8rem',
      size8: '3.2rem',
      size9: '3.6rem',
      size10: '4rem',
    }
  },

  utils: {
    paddingHorizontal: (value: string) => ({
      paddingRight: value,
      paddingLeft: value,
    }),
  },

  media: {
    ...medias
  },
});
