import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack> 
    <Stack.Screen name="index" options={{ title: 'Sign in' }} />
    <Stack.Screen name="welcome" options={{ title: 'Welcome'}} />
    <Stack.Screen name="profile" options={{ titile: 'Profile Screen' }} />
    </Stack>
  );

}
