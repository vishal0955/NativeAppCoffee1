import { useRouter } from 'expo-router';
import {
  Animated,
  Button,
  FlatList,
  Image,
  Pressable,
  SectionList,
  Text,
  View,
  PanResponder,
} from 'react-native';
import { useEffect, useRef } from 'react';

import coffeeIcon from '../../../assets/images/coffee-icon.png';

/* ---------------- DATA ---------------- */

const SECTION_PRODUCTS = [
  {
    title: 'Low Price',
    data: [
      { id: '1', name: 'Product One', price: '$10', img: coffeeIcon },
      { id: '2', name: 'Product Two', price: '$20', img: coffeeIcon },
    ],
  },
  {
    title: 'Medium Price',
    data: [
      { id: '3', name: 'Product Three', price: '$30', img: coffeeIcon },
    ],
  },
  {
    title: 'High Price',
    data: [
      { id: '4', name: 'Product Four', price: '$40', img: coffeeIcon },
      { id: '5', name: 'Product Five', price: '$50', img: coffeeIcon },
    ],
  },
];

/* ---------------- PRODUCT CARD ---------------- */

const ProductCard = ({ item, router, index }) => {
  // Fade + slide animation
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(30)).current;

  // Press animation
  const scale = useRef(new Animated.Value(1)).current;

  // Swipe animation
  const panX = useRef(new Animated.Value(0)).current;

  // Fade-in on mount (STAGGERED)
  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        delay: index * 120,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        delay: index * 120,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // Swipe gesture
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: panX }],
        { useNativeDriver: true }
      ),
      onPanResponderRelease: () => {
        Animated.spring(panX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      },
    })
  ).current;

  // Press effects
  const onPressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          flex: 1,
          margin: 8,
          padding: 12,
          borderWidth: 1,
          borderRadius: 12,
          alignItems: 'center',
          backgroundColor: 'white',
          opacity,
          transform: [
            { translateY },
            { translateX: panX },
            { scale },
          ],
        }}
      >
        <Image
          source={item.img}
          style={{ width: '100%', height: 100, resizeMode: 'cover' }}
        />

        <Text style={{ fontSize: 16, marginTop: 6 }}>
          {item.name}
        </Text>

        <Text style={{ color: 'gray', marginBottom: 8 }}>
          {item.price}
        </Text>

        <Pressable
          onPress={() => router.replace(`/(app)/catalog/${item.id}`)}
        >
          <View
            style={{
              backgroundColor: '#7c3aed',
              paddingVertical: 8,
              paddingHorizontal: 14,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              View Details
            </Text>
          </View>
        </Pressable>
      </Animated.View>
    </Pressable>
  );
};

/* ---------------- SCREEN ---------------- */

export default function ProductListScreen() {
  const router = useRouter();
  const scrollY = useRef(new Animated.Value(0)).current;

  // Header animation
  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [120, 50],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 0.2],
    extrapolate: 'clamp',
  });

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Animated Header */}
      <Animated.View
        style={{
          height: headerHeight,
          justifyContent: 'center',
          opacity: headerOpacity,
          backgroundColor: '#f3e8ff',
          borderRadius: 12,
          paddingHorizontal: 16,
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
          Product List
        </Text>
      </Animated.View>

      {/* Animated List */}
      <Animated.SectionList
        sections={SECTION_PRODUCTS}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 80 }}

        renderSectionHeader={({ section }) => (
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginVertical: 10,
              color: 'purple',
            }}
          >
            {section.title}
          </Text>
        )}

        renderItem={({ section }) => (
          <FlatList
            data={section.data}
            numColumns={2}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <ProductCard
                item={item}
                router={router}
                index={index}
              />
            )}
          />
        )}
      />

      <Button
        title="Go to Profile"
        onPress={() => router.push('/(app)/profile')}
      />
    </View>
  );
}
