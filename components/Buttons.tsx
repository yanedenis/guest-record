import { View, StyleSheet } from 'react-native'
import React from 'react'
import AddButton from "@/components/AddButton";

type Props = {
  functions: (() => void)[];
}

export default function Buttons({ functions }: Props) {
  const [addTable, openModal] = functions;

  return (
    <View style={styles.buttonList}>
      <AddButton buttonTitle="Добавить стол" onPress={addTable} />
      <AddButton buttonTitle='Добавить гостя' onPress={openModal} />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonList: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
})