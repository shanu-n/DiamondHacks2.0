import React from 'react'; // Import React
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'; // Import Link from expo-router

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Health Made EZ</Text>

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
});