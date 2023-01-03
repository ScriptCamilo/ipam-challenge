import { Circle, Spinner, Wrapper } from './styles';

type Props = {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary'
};

export default function Loading({ size, color }: Props) {

  return (
    <Wrapper>
      <Spinner size={size} color={color}>
        <Circle />
      </Spinner>
    </Wrapper>
  );
}
