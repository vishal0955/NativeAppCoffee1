import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        Pokemon Card Screen
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 16,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
               shadowColor: '#333',
               shadowOffset: { width: 2, height: 2 },
               shadowOpacity: 0.3,
               shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),

    },
    text: {
fontSize: 20,
color: 'blue',
        paddingTop: 70,
    }
})