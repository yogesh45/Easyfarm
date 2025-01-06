import React, { useState } from "react";
import { Modal, TouchableOpacity, View, Text, StyleSheet, } from "react-native";
import { CheckBox } from 'react-native-elements'

interface AddItemModalIF {
    modalVisible : boolean,
    handleModalClose : () => void
}

export const AddItemModal = ({modalVisible, handleModalClose} : AddItemModalIF) => {

  const [isSeconds, setSeconds] = useState(false)
    return(
        <Modal
                animationType="slide" // Options: 'slide', 'fade', 'none'
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleModalClose}
              >
                <View style={styles.modalBackground}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}> Add Item</Text>
                    <View>
                      <CheckBox
                        title="Accept Terms & Conditions"
                        checked={isSeconds}
                        onPress={() => setSeconds(!isSeconds)}
                      />
                    </View>
                    {/* Close Modal Button */}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={handleModalClose}
                    >
                      <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
    )
}

const styles= StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalContent: {
        width: 384,
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
        padding : 10, 
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 10,
        paddingBottom: 10,
        borderBottomWidth: 2, // Add border at the bottom
        borderBottomColor: '#ccc',
        width: '100%',
        
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
})