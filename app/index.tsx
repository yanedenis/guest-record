import { useState } from "react";
import { View, StyleSheet, ScrollView } from 'react-native';
import { colors } from "@/constants/Colors";
import Buttons from "@/components/Buttons";
import TableList from "@/components/TableList";
import { TableType } from "@/types/TableType";
import { GuestType } from "@/types/GuestType";
import AddGuestModal from "@/components/AddGuestModal";


export default function Index() {
  const [tablesQte, setTablesQte] = useState<TableType[]>([]);
  const [guests, setGuests] = useState<GuestType[]>([]);
  const [modalState, setModalState] = useState<boolean>(false);

  const addTable = () => {
    const newTableNumber = tablesQte.length + 1;
    const newTableName = `Стол №${newTableNumber}`;
    const newTable: TableType = {
      id: newTableNumber,
      name: newTableName,
      capacity: 8,
    }
    setTablesQte((prevTables) => [...prevTables, newTable]);
  }

  const addGuest = ({ name, age, gender, side, tableId }: Omit<GuestType, "id">) => {
    const guestsAtTheTable = guests.filter(guest => guest.tableId === tableId)?.length
    const tableCapacity = tablesQte.find((table) => table.id === tableId)?.capacity

    const newGuestId = guests.length + 1;
    const newGuest: GuestType = {
      id: newGuestId,
      name,
      age,
      gender,
      side,
      tableId,
    }

    if (tableCapacity) {
      if (guestsAtTheTable >= tableCapacity) {
        alert("Недостаточно мест на данном столе")
      } else {
        setGuests((prevGuests) => [...prevGuests, newGuest])
      }
    }
  }

  const closeModal = () => {
    setModalState(false)
  }

  const openModal = () => {
    if (tablesQte.length === 0) {
      alert("Добавьте хотя бы один стол")
      return;
    }
    setModalState(true)
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <TableList tablesQte={tablesQte} guests={guests} />
      </ScrollView>
      <Buttons functions={[addTable, openModal]} />
      <AddGuestModal isVisible={modalState} onClose={closeModal} addGuest={addGuest} tablesQte={tablesQte} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
    gap: 12,
  },
})
