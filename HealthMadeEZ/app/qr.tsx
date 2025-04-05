// app/qr.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function QRScreen() {
  const [input, setInput] = useState('');
  const [qrValue, setQrValue] = useState('');

  const handleGenerateQR = () => {
    if (input) {
      setQrValue(input);  // Update QR code value with the user input
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Dynamic QR Code</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter text or URL"
        value={input}
        onChangeText={setInput}
      />
      <Button title="Generate QR" onPress={handleGenerateQR} />

      {qrValue ? (
        <QRCode value={qrValue} size={200} />
      ) : (
        <Text style={styles.message}>Enter something above to generate a QR code</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});
