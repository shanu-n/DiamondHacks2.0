// app/qr.tsx (or app/welcome.tsx depending on your setup)
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QRScreen() {
  const [qrValue, setQrValue] = useState('');

  const loadProfileAndGenerateQR = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem('profileInputs');
      if (savedProfile) {
        // Optionally, you could encrypt this JSON string before setting it:
        setQrValue(savedProfile);
      } else {
        alert('No profile data found!');
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your ER QuickPass QR</Text>
      <Button title="Show QR Code" onPress={loadProfileAndGenerateQR} />

      {qrValue ? (
        <View style={styles.qrContainer}>
          <QRCode value={qrValue} size={200} />
        </View>
      ) : (
        <Text style={styles.hint}>Click the button to generate your QR code.</Text>
      )}
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
    fontSize: 24,
    marginBottom: 20,
  },
  hint: {
    color: '#eee',
    fontSize: 16,
    marginTop: 20,
  },
  qrContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
});
