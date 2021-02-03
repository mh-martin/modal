import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Pressable, Modal } from 'react-native';

export default function App() {
  const [modalVisible,setModalVisible] = useState(false);

  function close() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Modal
      visible={modalVisible}
      onRequestClose = {close}
      >
        <View style={styles.modal}>
          <Text>This is modal...</Text>
          <Pressable onPress={() => {
            setModalVisible(false);
          }}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </Modal>
      <Pressable onPress={() => {
        setModalVisible(true);
      }}>
        <Text>Show modal message</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    marginTop: 100,
    padding: 20,
    backgroundColor: '#fafafa',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#333',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  close: {
    marginTop: 50,
    color: '#333',
    fontWeight: 'bold',
    backgroundColor: 'red',
  }
});
