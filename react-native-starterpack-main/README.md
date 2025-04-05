# react-native-starterpack

Template for creating react-native applications.

## Prerequisites
Install NPM and Node <a href="https://nodejs.org/en/download/">here</a>

Install Expo CLI:

Expo CLI is a command line tool that allows you to easily build, run, and deploy React Native applications.

To install Expo CLI, run the following command in your terminal:

    npm install -g expo-cli

To install Expo SDK, which is a collection of libraries that provide access to native device functionality, run the following command in your terminal (we'll be using version 48 for this hackpack)

    npm install expo@48 -g

## Create a new project

To create a new project, run the following command in your terminal:

    npx create-expo-app my-app
    
This will create a new directory called my-app with all the files you need to get started. 

Feel free to replace my-app with your own project name. For the purposes of this starter pack, we will refer to the project name as my-app.

<br>

To run the application, run the following command in your terminal:

    cd my-app
    npm start
    
With Expo, you can directly run your application on your phone. To do so, 

1. Download the Expo app on your phone.
2. Once you have the Expo app, you can scan the QR code that appears in your terminal using the camera app or the built in QR code scanner in the Expo app.

<b>Note</b>: Before running the demo application, make sure to run the command `npm install` from the app directory.

## Tutorial for the demo application
### Hello World!

1. Open the App.js file inside the my-app folder using a code editor of your choice. You should see the following code:

```js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

2. Replace the Text with component with the following:
```js
<Text>Hello World!</Text>
```

3. You should see the text "Hello World!" appear in the Expo app on your phone through live reloading.

<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/5e02a421-d028-4812-a60c-6909163270ad" width="350" />

----
### Styling

1. Observe the following code block at the bottom of App.js
```js
<View style={styles.container}>
  <Text>Hello World!</Text>
  <StatusBar style="auto" />
</View>
```
We can see that style attribute of the View tag is set to styles.container

Now look the definition of style at the bottom of file.
```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

The const styles is declared as a StyleSheet object. This object contains a number of properties that describe how a component should be styled. Each property contains a number of key-value pairs. The key is the name of the style property aka the class, and the value is the value of the style property. For example, the backgroundColor property sets the background color of the component. The value of the backgroundColor property is '#fff', which is a hex code that represents white. Notice how these properties are camelCased versions of CSS properties.

2. Let's change the background colour to light blue. Change the background colour property to '#add8e6', and save the file. You should see the background colour change on your phone.

<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/5431487d-8d9a-4984-92fd-30076c6985f1" width="350" />

---
### Componenets

Components are sets for reusable code that can be used to minimize repetitive code in your project. There are functional and class based components, each with their own pros and cons. For this tutorial, we will be using functional components. 

Think of components like functions in a python script, for example, if you are writing a program where you are adding numbers many times, it makes more sense to create a function that adds two numbers, and call it wherever necessary. This makes the code more readable and manageable.

Similarly, if your application uses a button in many places, it's easier to create a button component, and call it wherever necessary.

Now, let's create a component.

1. Create a folder inside the my-app directory called `components`. Inside the components folder, create a file called `button.component.jsx`
2. Open the `button.component.jsx` file, and paste the following code block.

```js
import { TouchableOpacity, Text } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity onPress={() => console.log('Button Pressed!')}>
      <Text>Click Me!</Text>
    </TouchableOpacity>
  );
};

export default Button;
```

3. Import the button component into App.js using the following line:
```js
import Button from './component/button.component';
```

4. Add the button component after the text. You should see the button appear in the Expo app on your phone
```js
<Text>Hello World!</Text>
<Button />
```

<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/26fbac64-9fb7-4b1d-8551-30944cb85fec" width="350" />


You should now see the text 'Click Me!' below 'Hello World!', and should be able to click it. But it doesn't look like a button, and there is nothing the button does at the moment. To make these changes, we can add props to the component. Think of props like parameters to a functions. It allows you to customize the behaviour of a component each time you call it. 

5. Let's add some props, namely title, onPress, and style. This will allow us to dynamically change the title, onPress function, and style of the button.
```js
const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
```

6. Now, we can customize the button in App.js.
```js
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button
        title='Click Me!'
        onPress={() => console.log('Button Pressed!')}
        style={styles.button}
      />
      <StatusBar style="auto" />
    </View>
  );
}

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
```
----
### Screens

Now that we have a component, let's move on to screens. Screens are components that are like pages in a website. We can use the Button component that we created earlier in a screen. We can manage screens and navigating between them using React Navigation. 

1. Let's install React Navigation.
```
npm install @react-navigation/native @react-navigation/native-stack
```

2. Now, let's create a new screen in a new `screens/` folder named `home.screen.jsx`. This will be the home screen of our app. Let's create a home screen component. Note, that we are using the StatusBar component from Expo to set the status bar style (light or dark) so that it is visible on the screen.
```js
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <StatusBar style='auto' />
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
```

3. In App.js, let's define the navigation stack. The navigation stack is a stack of screens that we can navigate between. We can use the createStackNavigator function to create a stack navigator. The createStackNavigator function takes in a configuration object that contains the screens in the stack. We can use the component property to specify the component to render for each screen. We can also use the options property to specify the title of the screen.
```js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Add this import
import HomeScreen from './screens/home.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

4. Now, let's create a details screen. Let's create a new screen in a new screens/ folder named details.screen.jsx. This will be the details screen of our app. Let's create a details screen component.
```js
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
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

export default DetailsScreen;
```
5. Let's add a button to the home screen. Notice that we can pass in the navigation prop to the component. This allows us to navigate to other screens. We can use the navigate function to navigate to a screen. The navigate function takes in the name of the screen to navigate to, as defined in the createStackNavigator function. In this case, we can navigate to the Details screen by passing in 'Details' as the first argument to the navigate function.
```js
// Add this import
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
```
6. In App.js, let's add the Details screen to the navigation stack and define the initial route to be the Home screen. Make sure to reload the app to update the navigation stack.
```js
// Add this import
import DetailsScreen from './screens/details.screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name='Details'
          component={DetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```
7. Now, we can navigate between the home screen and the details screen. However, we want to be able to go back to the home screen from the details screen. We can do this by adding a button to the details screen.
```js
// Add this import
import Button from '../components/button.component';

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};
```

<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/11494672-9043-46af-b21e-19628282475b" width="350" />
<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/09fc2e83-20ee-4ba3-a929-1c508f91762f" width="350" />

----
### Lists

1. Now, let's create a list of items. Let's create a new component in a called `list-item.component.jsx`. This will be the list item component of our app. Let's create a list item component.
```js
import { View, Text, StyleSheet } from 'react-native';

const ListItem = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
};

export default ListItem;

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
```
2. Now, let's use the list item component in the details screen. Let's create a list of items and map over the list to render the list items. Note, that we are using the key prop to specify a unique key for each list item. This is required by React to keep track of the list items.
```js
// Add this import
import ListItem from '../components/list-item.component';

const DetailsScreen = ({ navigation }) => {
  const list = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      {list.map((item, index) => (
          <ListItem
            title={item}
            key={index}
          />
        ))}
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};
```
3. What if the `ListItem` is too large to fit on the screen? We can use the `Flatlist` component to render a list of items. The `Flatlist` component takes in a configuration object that contains the list of items to render. We can use the data property to specify the list of items to render. We can also use the renderItem property to specify the component to render for each item. We can also use the keyExtractor property to specify a unique key for each item.
```js
// Add this import
import { FlatList } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  const list = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <FlatList
        style={{
          flexGrow: 0,
        }}
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem title={item}/>}
      />
      <Button
        title='Go back'
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};
```

<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/e3bdb791-df53-4f81-8938-0a9681fa0b92" width="350" />

----
### Networking
1. Now, let's fetch data from a server. Let's create a new component called post.component.jsx to display a post.
```js
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
```

2. Now, let's use the post component in the home screen. Let's fetch posts from the `JSON Placeholder API`. We can use the `fetch` function to fetch data from a server. We can use the `then` function to get the response from the server. We can use the `json` function to convert the response to a JSON object. We can use the `catch` function to catch any errors. Note, that we are using the `useEffect` hook to fetch the data when the component mounts. `useEffect` is used to perform side effects in a component, in other words, react to changes in the component through states or props.
```js
// Add these imports
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
// Add the following styles, and change their usage in the component appropriately.
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
```

<img src="https://github.com/vshree-13/react-native-starterpack/assets/71380417/5b74f18d-c704-415d-9e1c-e4e5d55f9708" width="350" />

# Congratulations! 🎉

You've finished the react-native-starterpack! Now, you can build your own react-native apps!
