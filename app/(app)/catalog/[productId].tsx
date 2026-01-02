import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

type ProductDetailParams = {
  productId: string; // URL se aata hai hamesha string
};

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams<ProductDetailParams>();

  return (
    <View>
      <Text>Product ID: {productId}</Text>
    </View>
  );
}
