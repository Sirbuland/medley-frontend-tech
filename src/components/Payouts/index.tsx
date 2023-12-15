import React from 'react'
import {
  Chip,
  Table,
  TableRow,
  TableCell,
  TableHeader,
  NoRecordFound,
  TableContainer
} from './payouts.style'
import Loader from '../Loader'
import { Payout } from '@/interface/payout'

const Payouts: React.FC<{ data: any, loading: boolean }> = ({ data, loading }) => {
  return (
    <TableContainer $loading={loading || !data.length}>
      <Table>
        <thead>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date & Time</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Value</TableHeader>
          </tr>
        </thead>
        <tbody>
          {
            !loading
              ?
              data.length ?
                data.map((row: Payout, index: number) => (
                  <TableRow key={row.username} even={index % 2 === 0}>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.dateAndTime}</TableCell>
                    <TableCell>
                      <Chip $status={row.status}>{row.status}</Chip>
                    </TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))
                : (
                  <TableRow>
                    <NoRecordFound>No records found.</NoRecordFound>
                  </TableRow>
                )
              : (
                <TableRow>
                  <Loader />
                </TableRow>
              )
          }
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default Payouts