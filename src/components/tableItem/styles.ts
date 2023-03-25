import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td<{ color?: string }>`
  padding: 5px 0px;
`;

export const Category = styled.div<{ color?: string }>`
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
`;

export const Value = styled.div<{ color?: string }>`
  text-shadow: 1px 2px #d8d8d8;
  color: ${(props) => (props.color ? props.color : 'transparent')};
`;
