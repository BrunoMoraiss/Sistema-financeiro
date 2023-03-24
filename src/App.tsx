import { useEffect, useState } from 'react';

import { Body, Container, Header } from './App.style';
import { categories } from './data/categories';
import { Items } from './data/items';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { Categories } from './types/Categories';
import { Item } from './types/Item';

function App() {
  const [list, setList] = useState(Items);
  const [filteredList, setFilteredList] = useState<Item[]>();
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <h1>Sistema Financeiro</h1>
      </Header>
      <Body>
        {/*Área de informaçõee*/}
        {/* Área de inserção */}
        {/* Tabela de itens */}
      </Body>
    </Container>
  );
}

export default App;
