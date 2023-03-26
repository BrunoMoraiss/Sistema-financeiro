import { useEffect, useState } from 'react';

import { Body, Container, Header } from './App.style';
import InfoArea from './components/infoArea';
import { InputArea } from './components/InputArea';
import TableArea from './components/tableArea';
import { categories } from './data/categories';
import { Items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Item } from './types/Item';

function App() {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    filteredList.forEach((item) => {
      if (categories[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
    });

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth);
  }
  const handleAddItem = (item: Item) => {
    const newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <Container>
      <Header>
        <h1>Sistema Financeiro</h1>
      </Header>
      <Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
}

export default App;
