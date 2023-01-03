import * as Select from '@radix-ui/react-select';
import { css, styled } from 'root/stitches.config';

export const Icon = styled(Select.Icon, {
  color: '$green11',
});

export const Trigger = styled(Select.Trigger, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$radius1',
  padding: '0 $space4',
  height: '$size9',
  gap: '$space1',
  backgroundColor: 'white',
  color: '$green11',
  $$shadowBlackA8: '$colors$blackA8',
  $$shadowGreen11: '$colors$green11',
  boxShadow: '0 0.2rem 1rem $$shadowBlackA8',
  transition: '0.2s',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$green3',
  },

  '&:focus': {
    boxShadow: '0 0 0 0.2rem $$shadowGreen11',
  },

  '&[data-placeholder]': {
    color: '$green8',
    userSelect: 'none',
  },

  '&[data-disabled]': {
    backgroundColor: '$gray4',
    color: '$gray8',
    cursor: 'default',

    [`& ${Icon}`]: {
      color: '$gray8'
    },
  },

  '@tablet': {
    width: '100%',
    maxWidth: '20rem',
  }
});

export const Content = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: '$radius2',
  boxShadow: '0 1rem 3.8rem -1rem rgba(22, 23, 24, 0.35), 0 1rem 2rem -1.5rem rgba(22, 23, 24, 0.2)'
});

export const Viewport = styled(Select.Viewport, {
  padding: '$space1',
});

export const Item = styled(Select.Item, {
  color: '$green11',
  borderRadius: '$radius1',
  display: 'flex',
  alignItems: 'center',
  height: '$size6',
  padding: '0 $space9 0 $space6',
  position: 'relative',
  userSelect: 'none',

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$green9',
    color: '$green1',
  }
});

export const ItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: '2.5rem',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Separator = styled(Select.Separator, {
  height: '0.1rem',
  backgroundColor: '$green6',
  margin: '$space1',
});

export const scrollButton = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.5rem',
  backgroundColor: 'white',
  color: '$green11',
  cursor: 'default',
});


