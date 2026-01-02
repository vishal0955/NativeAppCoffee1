import { useAuth } from '@/src/context/AuthContext';

import { Drawer } from 'expo-router/drawer';
import { Alert, Pressable, Text } from 'react-native';

export default function CatalogLayout() {
  const { logout } = useAuth();

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: logout },
    ]);
   
  }

  return (
    <Drawer
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={handleLogout} style={{ marginRight: 16 }}>
            <Text>Logout</Text>
          </Pressable>
        ),
      }}
    >
      <Drawer.Screen name="index" options={{ title: 'Products' , headerTitle: 'Products'}} />
      <Drawer.Screen name="[productId]" options={{ drawerItemStyle: { display: 'none' }, headerShown: true,  headerTitle: 'Product Details' }} />
    }} />
       <Drawer.Screen name='explore' options={{ title: 'Explore' , headerTitle: 'Explore'}} />
          <Drawer.Screen name='pokemoncard' options={{ title: 'Pokemon Card' , headerTitle: 'Pokemon Card'}} />

    </Drawer>
  );

}
