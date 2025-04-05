import { View, Text, StyleSheet } from 'react-native';

const Post = ({ title, body }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
    </View>
  );
};

export default Post;

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