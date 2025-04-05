import { View, Text, StyleSheet } from 'react-native';

import Button from '../components/button.component';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#add8e6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#00bfff',
      padding: 10,
      borderRadius: 15,
      margin: 10,
    },
});
export default HomeScreen;