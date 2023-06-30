import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuText}> Menu </Text>
      <Image 
        style={styles.image}
        source={require("../../assets/eze.jpg")}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuText: {
    fontSize: 35,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
})