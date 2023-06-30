
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../utils'

const Category  = () => {
    const [selected, setselected] = useState(0)

    const category = [
        "All",
        "Burger",
        "Pizza",
        "Desserts",
        "Drinks",
        "Fruits",
        "Vegetables",
        "Others",
    ]

    const getRenderItemImageStyle = (index) => {
      return {
        width: 70,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: selected === index ? Colors.primary : "#e3e3e3",
        borderRadius: 20,
      };
    };


    const text = (index) => {
        return {
            marginTop: 5,
            textAlign: "center",
            color: selected == index ? Colors.primary : "gray",
        }
    }

  return (
    <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={({item, index}) => (
          <TouchableOpacity 
              activeOpacity={0.9}
              onPress={() => {
                  setselected(index)
              }}
              style={styles.category}>
              <View style={getRenderItemImageStyle(index)} >
                  <Image style={styles.renderImage} source={require('../../assets/food4.jpg')}/>
              </View>
          
              <Text style={text(index)}> {item}</Text>
          </TouchableOpacity>
      )}
    />
  )
}

export default Category 

const styles = StyleSheet.create({
    category: {
      margin: 10,
    },
    renderImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
})