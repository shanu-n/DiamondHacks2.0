import { Text, View,  StyleSheet } from 'react-native';
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Health Made EZ</Text>
      <Link href="/profile" style={styles.button}>
        Go to Profile screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:30,
    backgroundColor: '#7290b5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

});
