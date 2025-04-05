import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/button.component';
import ListItem from '../components/list-item.component';
import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import Post from '../components/post.component';

const DetailsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details Screen</Text>
      <FlatList
        style={styles.flatlist}
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Post title={item.title} body={item.body} />}
      />
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
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
  flatlist: {
    flexGrow: 0,
  },
  heading : {
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  }
});
export default DetailsScreen;