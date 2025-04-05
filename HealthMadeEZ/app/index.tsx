import React, { useState } from 'react'; // Import React and useState
import { Text, View, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import QRCode from 'react-native-qrcode-svg';

export default function Index() {
  const [qrValue, setQrValue] = useState('');  // State for QR code value

  const generateQRCode = () => {
    setQrValue('https://healthmadeez.com');  // Set the value to generate QR code
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Health Made EZ</Text>
      <Link href="/profile" style={styles.button}>
        Go to Profile screen
      </Link>

      <Button title="Generate QR Code" onPress={generateQRCode} /> {/* Button to trigger QR generation */}

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
    fontSize: 30,
    backgroundColor: '#7290b5',
    alignItems: 'center',
    justifyContent: 'center',
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
  },
  qrCode: {
    marginTop: 20,
  },
});
