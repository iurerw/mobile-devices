import { Stack } from 'expo-router/stack';

export default function Layout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'heavy',
    },
  }}>
  {/* Optionally configure static options outside the route.*/}
  <Stack.Screen name="index" options={{title:'Home'}} />
  <Stack.Screen name="Page" options={{title:'Pagina 1'}} />
  <Stack.Screen name="PageTwo" options={{title:'Pagina 2'}} />

  </Stack>;
}