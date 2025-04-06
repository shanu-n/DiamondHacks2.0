import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";
import QRCode from "react-native-qrcode-svg";

export default function WelcomeScreen() {
  const [qrValue, setQrValue] = useState("");

  const generateQRCode = () => {
    setQrValue("https://healthmadeez.com");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Health Made EZ!</Text>

      {/* Link to Profile page */}
      <Link href="/profile" style={styles.link}>
        Go to Profile Page
      </Link>

      {/* Link to Insurance Upload screen */}
      <Link href="/healthrecord" style={styles.link}>
        Upload Insurance Documents
      </Link>

      {/* QR Code section */}
      <Button title="Generate QR Code" onPress={generateQRCode} />
      {qrValue ? <QRCode value={qrValue} size={200} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7290b5",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "#fff",
    textDecorationLine: "underline",
    marginTop: 20,
  },
});
