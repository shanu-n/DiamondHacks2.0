import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const imageKeys = ['insuranceCard', 'driversLicense', 'medicalHistory'] as const;
type ImageType = (typeof imageKeys)[number];

export default function UploadMedicalDocuments() {
  const [images, setImages] = useState<{
    insuranceCard: string | null;
    driversLicense: string | null;
    medicalHistory: string | null;
  }>({
    insuranceCard: null,
    driversLicense: null,
    medicalHistory: null,
  });

  const pickImage = async (type: ImageType) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages({ ...images, [type]: result.assets[0].uri });
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Upload Medical Documents</Text>

      {imageKeys.map((type) => (
        <View key={type} style={styles.uploadSection}>
          <Text style={styles.label}>
            {type === 'insuranceCard' && 'Insurance Card'}
            {type === 'driversLicense' && "Driver's License"}
            {type === 'medicalHistory' && 'Medical History'}
          </Text>

          {images[type] ? (
            // Conditional rendering to avoid passing `null` to the Image component
            <Image source={{ uri: images[type] as string }} style={styles.image} />
          ) : (
            <Text style={styles.placeholder}>No image selected</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={() => pickImage(type)}>
            <Text style={styles.buttonText}>
              Upload{' '}
              {type === 'medicalHistory'
                ? 'Medical History'
                : type === 'insuranceCard'
                ? 'Insurance Card'
                : "Driver's License"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#F8FAFC',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1E3A8A', // Dark healthcare blue
  },
  uploadSection: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#0F172A',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  placeholder: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#3B82F6', // Healthcare blue
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
