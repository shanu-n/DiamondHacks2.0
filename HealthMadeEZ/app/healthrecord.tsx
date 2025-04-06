import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function healthrecord() {
  const [images, setImages] = useState({
    insuranceCard: "",
    driversLicense: "",
    medicalHistory: "", // ✅ New field
  });

  useEffect(() => {
    const loadImages = async () => {
      try {
        const savedImages = await AsyncStorage.getItem("uploadedImages");
        if (savedImages) {
          setImages(JSON.parse(savedImages));
        }
      } catch (error) {
        console.error("Failed to load images", error);
      }
    };
    loadImages();
  }, []);

  const pickImage = async (
    type: "insuranceCard" | "driversLicense" | "medicalHistory"
  ) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission denied", "Camera roll permission is required.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      setImages((prev) => ({ ...prev, [type]: uri }));
    }
  };

  const saveImages = async () => {
    try {
      await AsyncStorage.setItem("uploadedImages", JSON.stringify(images));
      Alert.alert("Success", "Images saved successfully!");
    } catch (error) {
      console.error("Failed to save images", error);
      Alert.alert("Error", "Failed to save images.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload Documents</Text>

      {/* Insurance Card Section */}
      <View style={styles.uploadSection}>
        <Text style={styles.label}>Insurance Card</Text>
        {images.insuranceCard ? (
          <Image source={{ uri: images.insuranceCard }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
        <Button
          title="Upload Insurance Card"
          onPress={() => pickImage("insuranceCard")}
        />
      </View>

      {/* Driver’s License Section */}
      <View style={styles.uploadSection}>
        <Text style={styles.label}>Driver's License</Text>
        {images.driversLicense ? (
          <Image source={{ uri: images.driversLicense }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
        <Button
          title="Upload Driver's License"
          onPress={() => pickImage("driversLicense")}
        />
      </View>

      {/* ✅ Medical History Section */}
      <View style={styles.uploadSection}>
        <Text style={styles.label}>Medical History</Text>
        {images.medicalHistory ? (
          <Image source={{ uri: images.medicalHistory }} style={styles.image} />
        ) : (
          <Text style={styles.placeholder}>No image selected</Text>
        )}
        <Button
          title="Upload Medical History"
          onPress={() => pickImage("medicalHistory")}
        />
      </View>

      <View style={styles.saveButton}>
        <Button title="Save Documents" onPress={saveImages} color="#fff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7290b5",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  uploadSection: {
    marginBottom: 30,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 120,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#fff",
  },
  placeholder: {
    color: "#ccc",
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "#406080",
    borderRadius: 8,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 10,
  },
});
