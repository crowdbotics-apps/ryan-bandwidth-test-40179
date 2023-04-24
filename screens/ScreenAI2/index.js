import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({
  route
}) => {
  const {} = route.params || {};
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [connectionType, setConnectionType] = useState('');

  const handleNext = () => {// handle next button press
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <View style={styles.selectContainer}>
        <Text style={styles.selectLabel}>Location:</Text>
        <View style={styles.select}>
          <Text style={styles.selectOption}>Home</Text>
          <Text style={styles.selectOption}>Work</Text>
        </View>
      </View>
      <View style={styles.radioContainer}>
        <Text style={styles.radioLabel}>Connection Type:</Text>
        <View style={styles.radio}>
          <TouchableOpacity style={styles.radioButton} onPress={() => setConnectionType('Wired')}>
            {connectionType === 'Wired' && <View style={styles.radioSelected} />}
          </TouchableOpacity>
          <Text style={styles.radioOption}>Wired</Text>
          <TouchableOpacity style={styles.radioButton} onPress={() => setConnectionType('Wireless')}>
            {connectionType === 'Wireless' && <View style={styles.radioSelected} />}
          </TouchableOpacity>
          <Text style={styles.radioOption}>Wireless</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00bfff',
    marginBottom: 40,
    textAlign: "center"
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  selectLabel: {
    color: '#fff',
    marginRight: 10
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectOption: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  radioLabel: {
    color: '#fff',
    marginRight: 10
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioButton: {
    borderWidth: 2,
    borderColor: '#00bfff',
    borderRadius: 50,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  radioSelected: {
    backgroundColor: '#00bfff',
    borderRadius: 50,
    width: 10,
    height: 10
  },
  radioOption: {
    color: '#fff',
    marginRight: 20
  },
  button: {
    backgroundColor: '#00bfff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default LoginScreen;