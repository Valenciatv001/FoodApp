import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const FoodItems  = () => {
  const food = [{
    id: 1,
    name: 'Chicken',
    price: 100,
    image: "https://www.pexels.com/photo/close-up-photo-of-roasted-chicken-wings-2338407",
  },
  {
    id: 2,
    name: 'Pizza',
    price: 100,
    image: "https://www.pexels.com/photo/shallow-focus-photography-of-several-pizzas-1566837",
  },
  {
    id: 3,
    name: 'Burger',
    price: 100,
    image: "https://www.pexels.com/photo/burger-and-fries-meal-7497227",
  },
  {
    id: 4,
    name: 'Sandwich',
    price: 100,
    image: "https://www.pexels.com/photo/sandwich-in-close-up-photography-10218397",
  }
];

  return (
    <View style={styles.container}>
      <Text style={styles.popular}> Popular </Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={food}
        renderItem={({item, index}) => (
          <View style={styles.imageItems}>
             <Image style={styles.image} source={require('../../assets/food1.jpg')}/>
             <Text style={styles.textName}> {item.name} </Text>
             <View style={styles.price}>
              <Text style={styles.itemPrice}> 💲{item.price} </Text>
              <Ionicons name="ios-add-circle" size={24} color="green" />
             </View>
          </View>
        )}
      />
      
    </View>
  )
}

export default FoodItems 

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  popular: {
    fontSize: 20,
  },
  text: {
    fontSize: 20,
  },
  textName: {
    fontSize: 20,
    alignItems: "center", 
  },
  imageItems: {
    backgroundColor: "#e3e3e3",
    width: 200,
    height: 200,
    marginRight: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
  },
  price: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrice: {
    color: "blue",
    fontSize: 18,
    fontWeight: "bold",
  }
})

