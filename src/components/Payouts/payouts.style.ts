import styled from "styled-components";

export const TableContainer = styled.div<{ $loading?: boolean }>`
  width: 100%;
  ${({ $loading }) => $loading && "height: 500px;"}
  margin-top: 20px;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: left;
  color: #6F767E;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: -0.12px;
`;

export const TableRow = styled.tr<{ even?: boolean }>`
  position: relative;
  ${({ even }) => even && "background-color: #f9f9f9;"}
`;

export const TableCell = styled.td`
  padding: 10px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.14px;
`;

export const NoRecordFound = styled.td`
  position: absolute;
  right: 50%;
`;

export const Chip = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 6px 12px;
  font-weight: 400;
  border-radius: 5px;
  background-color: ${({ $status }) =>
    $status === "Pending" ? "#6F767E66" : "#60CA57"};
  color: #fff;
`;
