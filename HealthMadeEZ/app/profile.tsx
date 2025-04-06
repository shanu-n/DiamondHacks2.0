// app/profile.tsx
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const [inputs, setInputs] = useState({
    Name: '',
    DOB: '',
    Phone: '',
    Address: '',
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

  const handleInputChange = (name: string, value: string) => {
    setInputs({ ...inputs, [name]: value });
  };

  const handleSaveProfile = async () => {
    try {
      await AsyncStorage.setItem('profileInputs', JSON.stringify(inputs));
      Alert.alert("Success", "Profile saved successfully!");
    } catch (error) {
      console.error("Failed to save profile inputs", error);
      Alert.alert("Error", "Failed to save profile.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

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
        placeholder="Phone"
        placeholderTextColor="#ccc"
        keyboardType="phone-pad"
        value={inputs.Phone}
        onChangeText={(text) => handleInputChange('Phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#ccc"
        value={inputs.Address}
        onChangeText={(text) => handleInputChange('Address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact"
        placeholderTextColor="#ccc"
        value={inputs.EmContact}
        onChangeText={(text) => handleInputChange('EmContact', text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save Profile" onPress={handleSaveProfile} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7290b5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    marginBottom: 20,
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
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#406080',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
