import { formatCurrentMonth } from '../../helpers/dateFilter';
import ResumeItem from '../resumeItem';
import {
  Container,
  MonthArea,
  MonthArrow,
  MonthTitle,
  ResumeArea,
} from './styles';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
};

function InfoArea({ currentMonth, onMonthChange, income, expense }: Props) {
  function handlePrevMonth() {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(+year, +month - 1, 1);
    currentDate.setMonth(currentDate.getMonth() - 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  function handleNextMonth() {
    const [year, month] = currentMonth.split('-');
    const currentDate = new Date(+year, +month - 1, 1);
    currentDate.setMonth(currentDate.getMonth() + 1);
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return (
    <Container>
      <MonthArea>
        <MonthArrow onClick={handlePrevMonth}> ⬅️</MonthArrow>
        <MonthTitle>{formatCurrentMonth(currentMonth)}</MonthTitle>
        <MonthArrow onClick={handleNextMonth}> ➡️</MonthArrow>
      </MonthArea>
      <ResumeArea>
        <ResumeItem title="Receita" value={income} />
        <ResumeItem title="Despesas" value={expense} />
        <ResumeItem
          color={income - expense > 0 ? 'green' : 'red'}
          title="Balanço"
          value={income - expense}
        />
      </ResumeArea>
    </Container>
  );
}

export default InfoArea;
