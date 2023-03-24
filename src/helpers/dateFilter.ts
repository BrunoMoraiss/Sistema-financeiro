import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterListByMonth = (items: Item[], date: string): Item[] => {
  const newList: Item[] = [];
  const [year, month] = date.split('-');

  items.forEach((item) => {
    if (item.date.getFullYear() === +year && item.date.getMonth() === +month) {
      newList.push(item);
    }
  });

  return newList;
};
