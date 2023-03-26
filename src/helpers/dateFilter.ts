import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (items: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split('-');

  items.forEach((item) => {
    if (
      item.date.getFullYear() === +year &&
      item.date.getMonth() + 1 === +month
    ) {
      newList.push(item);
    }
  });

  return newList;
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${day}/${month}/${year}`;
};

export const formatCurrentMonth = (date: string) => {
  const [year, month] = date.split('-');
  const ArrayMonths: string[] = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  return `${ArrayMonths[+month - 1]} de ${year}`;
};

export const newDateAdjusted = (dateField: string) => {
  const [year, month, day] = dateField.split('-');
  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
};
