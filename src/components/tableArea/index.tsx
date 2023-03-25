import { Item } from '../../types/Item';
import TableItemLine from '../tableItem';
import { Table, TableHeadColumn } from './styles';

type Props = {
  list: Item[];
};
function TableArea({ list }: Props) {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={130}>Data</TableHeadColumn>
          <TableHeadColumn width={150}>Categoria</TableHeadColumn>
          <TableHeadColumn>Título</TableHeadColumn>
          <TableHeadColumn width={150}>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItemLine key={index} item={item} />
        ))}
      </tbody>
    </Table>
  );
}

export default TableArea;
