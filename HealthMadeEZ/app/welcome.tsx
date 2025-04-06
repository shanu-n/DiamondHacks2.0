import React, { useState } from 'react'; // Import React and useState
import { Text, View, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Importing Link for navigation
import QRCode from 'react-native-qrcode-svg'; // Import QRCode

export default function WelcomeScreen() {
  const [qrValue, setQrValue] = useState('');  // State for QR code value

  const generateQRCode = () => {
    setQrValue('https://healthmadeez.com');  // Set the value to generate QR code
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Health Made EZ!</Text>

      {/* Link to navigate to the Profile page */}
      <Link href="/profile" style={styles.link}>Go to Profile Page</Link>

      {/* Button to trigger QR generation */}
      <Button title="Generate QR Code" onPress={generateQRCode} />

      {/* Render QR code only if qrValue is set */}
      {qrValue ? (
        <QRCode value={qrValue} size={200}/>
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
  qrCode: {
    marginTop: 20,
  },
});