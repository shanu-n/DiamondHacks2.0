import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';



export default function ProfileScreen() {
  const [inputs, setInputs] = useState({
    Name: '',
    DOB: '', 
    Phone: '',
    Adress: '',
    EmContact: '',
  });

    useEffect(() => {
    const loadInputs = async () => {
      try {
        const savedInputs = await AsyncStorage.getItem('profileInputs');
        if (savedInputs) {
          setInputs(JSON.parse(savedInputs));
        }
      } catch (error) {
        console.error("Failed to load profile inputs", error);
      }
    };
  
    loadInputs();
  }, []);
  

  const handleInputChange = async (name: string, value: string) => {
    const updatedInputs = { ...inputs, [name]: value };
    setInputs(updatedInputs);
    try {
      await AsyncStorage.setItem('profileInputs', JSON.stringify(updatedInputs));
    } catch (error) {
      console.error("Failed to save profile inputs", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#ccc"
        value={inputs.Name}
        onChangeText={(text) => handleInputChange('Name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        placeholderTextColor="#ccc"
        value={inputs.DOB}
        onChangeText={(text) => handleInputChange('DOB', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone #"
        placeholderTextColor="#ccc"
        value={inputs.Phone}
        onChangeText={(text) => handleInputChange('Phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Adress"
        placeholderTextColor="#ccc"
        value={inputs.Adress}
        onChangeText={(text) => handleInputChange('Address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contacts"
        placeholderTextColor="#ccc"
        value={inputs.EmContact}
        onChangeText={(text) => handleInputChange('EmContact', text)}
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
