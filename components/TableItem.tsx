import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/Colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from 'react'
import { GuestType } from '@/types/GuestType';
import { TableType } from '@/types/TableType';

type Props = {
  table: TableType;
  guests: GuestType[];
}

export default function TableItem({ table, guests }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setIsExpanded(prev => !prev)
  }

  const guestsAtTheTable = guests.filter(guest => guest.tableId === table.id).length

  return (
    <View>
      <TouchableOpacity style={[styles.table, isExpanded ? {borderBottomLeftRadius: 0, borderBottomRightRadius: 0} : {}]} onPress={handleExpand}>
        <Text style={styles.tableText}>{table.name}</Text>
        <View style={styles.tableInfo}>
          <Text style={styles.tableText}>{guestsAtTheTable}/{table.capacity}</Text>
          <MaterialIcons name={isExpanded ? "arrow-drop-up" : "arrow-drop-down"} color={colors.text} size={22} />
        </View>
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.guestList}>
          {guests.length > 0 ? (
            guests.map(guest => (
              <Text key={guest.id} style={[styles.tableText, guest.side === "Groom" ? {color: "lightgreen"} : {color: "lightpink"} ]}>
                • {guest.name}
              </Text>
            ))
          ) : (
            <Text style={styles.tableText}>Гости не назначены</Text>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  table: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tableText: {
    color: colors.text,
    fontSize: 20,
  },
  tableInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  guestList: {
    backgroundColor: colors.primary,
    gap: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopColor: colors.text,
    borderTopWidth: 1,
  }
})