import { Image, StyleSheet, TextInput, Text, Button, View, Alert, Pressable, Modal, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { AddItemModal } from '@/components/AddItemModal/AddItemModal';

export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);
  
  return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/No_data.png')} // Replace with your image path
          style={styles.image}
        />
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Add Item</Text>
        </Pressable>
        <AddItemModal
          modalVisible={modalVisible}
          handleModalClose={() => setModalVisible(false)}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  image : {
    width : 200,
    height: 200,
    marginBottom : 10
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 2, // Add border at the bottom
    borderBottomColor: '#ccc',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
