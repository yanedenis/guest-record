import { View, StyleSheet } from 'react-native'
import React from 'react'
import TableItem from './TableItem';
import { TableType } from '@/types/TableType';
import { GuestType } from '@/types/GuestType';

type Props = {
  tablesQte: TableType[],
  guests: GuestType[],
}

export default function TableList({ tablesQte, guests }: Props) {
  return (
    <View style={styles.tableList}>
      {tablesQte.map((table) => (
        <TableItem table={table} key={table.id} guests={guests.filter(guest => guest.tableId === table.id)} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  tableList: {
    gap: 10,
  },
})