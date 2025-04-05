import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
export default function ProfileScreen() {
  const [inputs, setInputs] = useState({
    Name: '',
    DOB: '', 
    Phone: '',
    Adress: '',
    EmContact: '',
  });

  const handleInputChange = (name: string, value: string) => {
    setInputs({ ...inputs, [name]: value });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ccc"
        value={inputs.input1}
        onChangeText={(text) => handleInputChange('input1', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        placeholderTextColor="#ccc"
        value={inputs.input2}
        onChangeText={(text) => handleInputChange('input2', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone #"
        placeholderTextColor="#ccc"
        value={inputs.input3}
        onChangeText={(text) => handleInputChange('input3', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Adress"
        placeholderTextColor="#ccc"
        value={inputs.input4}
        onChangeText={(text) => handleInputChange('input4', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contacts"
        placeholderTextColor="#ccc"
        value={inputs.input5}
        onChangeText={(text) => handleInputChange('input5', text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7290b5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#5b7aa1',
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    fontSize: 16,
  },
});
