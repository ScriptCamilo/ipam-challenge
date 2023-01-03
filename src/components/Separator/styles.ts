import * as RadixSeparator from '@radix-ui/react-separator';

import { styled } from 'root/stitches.config';

export const Separator = styled(RadixSeparator.Root, {
  backgroundColor: '$green7',

  '&[data-orientation="horizontal"]': {
    height: '0.1rem',
    width: '100%',
  },

  '&[data-orientation="vertical"]': {
    width: '0.1rem',
  }
});
