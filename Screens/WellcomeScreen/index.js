import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '../../utils/index'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreen = () => {
  const nav = useNavigation()
  return (
      <LinearGradient style={styles.container} colors={['rgba(15, 77, 172, 0.82)', 'transparent']}>
        <View style={styles.imageIcon}>
          <Image  style={styles.image} source={require('../../assets/food3.jpg')}/>
        </View>

        <Text style={styles.text}>Enjoy{"\n"}Your Food</Text>
      <TouchableOpacity 
        onPress={() => {
          nav.navigate('Home')
        }}
        style={styles.buttonTouch}>
        <Text style={styles.button}>
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  imageIcon: {
    height: 300,
    width: 300,
    backgroundColor: "#FFF",
    borderRadius: 300,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
  }, 
  image: {
    width: 280,
    height: 280,
    borderRadius: 300,
  },
  text: {
    fontSize: 40,
    color: "#FFF",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 55,
    letterSpacing: 2.5,
    top: -15,
  },
  buttonTouch: {
    backgroundColor: "#fff",
    width: 180,
    height: 55,
    padding: 10,
    borderRadius: 20,
  },
  button: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 30,

  }
})