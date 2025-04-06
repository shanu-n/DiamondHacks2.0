// app/profile.tsx
import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#888"
        value={inputs.Name}
        onChangeText={(text) => handleInputChange('Name', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Birth"
        placeholderTextColor="#888"
        value={inputs.DOB}
        onChangeText={(text) => handleInputChange('DOB', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={inputs.Phone}
        onChangeText={(text) => handleInputChange('Phone', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#888"
        value={inputs.Address}
        onChangeText={(text) => handleInputChange('Address', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Emergency Contact"
        placeholderTextColor="#888"
        value={inputs.EmContact}
        onChangeText={(text) => handleInputChange('EmContact', text)}
      />

      <View style={styles.buttonContainer}>
        <Button title="Save Profile" onPress={handleSaveProfile} color="#fff" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: '#f6faff',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#1e3a5f',
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 14,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d0e1f9',
    fontSize: 16,
    color: '#1e3a5f',
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#3f72af',
    borderRadius: 12,
    overflow: 'hidden',
    width: '100%',
  },
});
