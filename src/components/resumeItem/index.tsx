import { Container, Info, Title } from './styles';

type Props = {
  title: string;
  value: number;
  color?: string;
};
function ResumeItem({ title, value, color }: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Info color={color}>R$ {value.toFixed(2)}</Info>
    </Container>
  );
}

export default ResumeItem;
