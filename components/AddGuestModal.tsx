import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback, TextInput, Pressable } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { colors } from '@/constants/Colors';
import { TableType } from '@/types/TableType';
import { GuestType } from '@/types/GuestType';

type Props = {
  isVisible: boolean,
  addGuest: ({ name, age, gender, side, tableId }: Omit<GuestType, "id">) => void;
  onClose: () => void;
  tablesQte: TableType[],
}

export default function AddGuestModal({ isVisible, addGuest, onClose, tablesQte }: Props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [side, setSide] = useState('');
  const [tableId, setTableId] = useState(undefined);

  const handleAddGuest = () => {
    if (!name || !age || !gender || !side || (tableId === undefined)) {
      alert("Введите все данные")
      return;
    };

    addGuest({
      name,
      age: Number(age),
      gender,
      side,
      tableId
    })

    setName('')
    setAge('')
    setGender('')
    setSide('')
    setTableId(undefined)
    onClose()
  }

  return (
    <View>
      <Modal animationType='fade' transparent={true} visible={isVisible}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback onPress={() => { }}>
              <View style={styles.modalContent}>
                <Text style={[styles.text, { fontSize: 18, textAlign: "center" }]}>Добавить гостя</Text>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.label}>Имя гостя</Text>
                    <TextInput placeholder='Введите имя гостя' value={name} onChangeText={setName} style={styles.input} />
                  </View>
                  <View>
                    <Text style={styles.label}>Возраст</Text>
                    <TextInput placeholder='Введите возраст' value={age} onChangeText={setAge} keyboardType='numeric' style={styles.input} />
                  </View>
                  <View>
                    <Text style={styles.label}>Пол</Text>
                    <Picker selectedValue={gender} onValueChange={value => setGender(value)} style={styles.picker}>
                      <Picker.Item label="Выберите пол" value="" />
                      <Picker.Item label="Мужской" value="Male" />
                      <Picker.Item label="Женский" value="Female" />
                    </Picker>
                  </View>
                  <View>
                    <Text style={styles.label}>Сторона</Text>
                    <Picker selectedValue={side} onValueChange={value => setSide(value)} style={styles.picker}>
                      <Picker.Item label="Выберите сторону" value="" />
                      <Picker.Item label="Жених" value="Groom" />
                      <Picker.Item label="Невеста" value="Bride" />
                    </Picker>
                  </View>
                  <View>
                    <Text style={styles.label}>Стол</Text>
                    <Picker selectedValue={tableId} onValueChange={value => setTableId(value)} style={styles.picker}>
                      <Picker.Item label="Выберите стол" value={undefined} />
                      {tablesQte.map(table => (
                        <Picker.Item key={table.id} label={table.name} value={table.id} />
                      ))}
                    </Picker>
                  </View>
                </View>
                <Pressable onPress={handleAddGuest} style={styles.button} >
                  <Text style={styles.buttonText}>Добавить</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.5)"
  },
  modalContent: {
    width: "80%",
    backgroundColor: colors.text,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  text: {
    color: colors.background,
  },
  input: {
    color: colors.background,
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: colors.text,
    textAlign: "center",
    fontSize: 18,
  },
  form: {
    marginBlock: 18,
    gap: 10,
  },
  label: {
    fontSize: 18,
  },
  picker: {
    padding: 0,
  }
})