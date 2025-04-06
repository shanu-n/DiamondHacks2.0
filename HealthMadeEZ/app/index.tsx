import React, { useState } from 'react'; // Import React and useState
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function Index() {
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number input

  // Regular expression to match a valid phone number (optional +, and digits)
  const handlePhoneNumberChange = (text: string) => {
    // Allow only digits and an optional "+" at the beginning
    const phoneNumberRegex = /^[+]?[0-9]*$/;

    if (phoneNumberRegex.test(text)) {
      setPhoneNumber(text); // Update state if the input is valid
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In to Health Made EZ</Text>

      {/* Phone number input field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor="#ccc"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange} // Handle phone number change
        keyboardType="phone-pad" // Ensure phone number keypad
      />

      {/* Link to navigate to the welcome page */}
      <Link href="/welcome" style={styles.button}>
        Go to Welcome Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 30,
    backgroundColor: '#7290b5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Add padding for better spacing
  },
  text: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    marginTop: 20, // Add some space above the button
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