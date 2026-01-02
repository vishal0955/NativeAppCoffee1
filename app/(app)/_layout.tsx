
import { Tabs } from 'expo-router/tabs';
import { Pressable, Text } from 'react-native';
// import { Pressable } from 'react-native-gesture-handler';
import { useAuth } from '../../src/context/AuthContext';


export default function AppLayout() {
  const { logout } = useAuth();

  return (
    // <Drawer
    //   screenOptions={{
    //     headerRight: () => (
    //       <Pressable onPress={logout} style={{ marginRight: 16 }}>
    //         <Text>Logout</Text>
    //       </Pressable>
    //     ),
    //   }}
    // >
    //   <Drawer.Screen name="catalog" options={{ title: 'Catalog' }} />
    //   <Drawer.Screen name="profile" options={{ title: 'Profile' }} />
    // </Drawer>

    <Tabs >
      <Tabs.Screen name="catalog" options={{ title: 'Products' , headerShown : false}} />
      {/* <Tabs.Screen name="profile" options={{ title: 'Profile' }} /> */}


     <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerRight: () => (
            <Pressable onPress={logout} style={{ marginRight: 16 }}>
              <Text style={{ color: 'red', fontWeight: '600' }}>
                Logout
              </Text>
            </Pressable>
          ),
        }}
      />  

    </Tabs>
  );
}
