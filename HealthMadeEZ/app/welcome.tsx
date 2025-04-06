import React, { useState } from 'react'; // Import React and useState
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { Link } from 'expo-router'; // Importing Link for navigation
import QRCode from 'react-native-qrcode-svg'; // Import QRCode

export default function WelcomeScreen() {
  const [qrValue, setQrValue] = useState('');  // State for QR code value
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number input

  const generateQRCode = () => {
    setQrValue('https://healthmadeez.com');  // Set the value to generate QR code
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Health Made EZ!</Text>

      {/* Link to navigate to the Profile page */}
      <Link href="/profile" style={styles.link}>Go to Profile Page</Link>

      {/* Phone number input field */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        placeholderTextColor="#ccc"
        value={phoneNumber}
        onChangeText={setPhoneNumber} // Update the phone number state as user types
        keyboardType="phone-pad" // Display numeric keyboard for phone number
      />

      {/* Button to trigger QR generation */}
      <Button title="Generate QR Code" onPress={generateQRCode} />

      {/* Render QR code only if qrValue is set */}
      {qrValue ? (
        <QRCode value={qrValue} size={200} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7290b5',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline', // Make it look like a clickable link
    marginTop: 20,
  },
  input: {
    width: '80%',
    padding: 12,
    marginVertical: 10,
    backgroundColor: '#5b7aa1',
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    color: '#fff',
    fontSize: 16,
  },
  qrCode: {
    marginTop: 20,
  },
});