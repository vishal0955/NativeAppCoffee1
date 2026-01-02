import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to Catalog"
        onPress={() => router.push('/catalog')}
      />
    </View>
  );
}
