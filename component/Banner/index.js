import { StyleSheet, Text, View , Image } from 'react-native'
import { Colors } from '../../utils'

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}> Promotions </Text>
      <View style={styles.bannerHeader}>
        <View style={styles.banner}> 
        <Text style={styles.text}> Today's offer </Text>
        <Text style={styles.textList}> Free box of fries </Text>
        <Text style={styles.text}> On all orders sbove 💲150 </Text>
        </View>

        <Image 
        style={styles.image}
        source={require('../../assets/chicken.jpg')} />
      </View>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    containerText: {
       fontSize: 20, 
    },
    bannerHeader: {
        backgroundColor: Colors.secondary,
        height: 120,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    banner: {
        gap: 12,
    },
    text: {
        fontSize: 15, 
        color: "#fff",
    },
    textList: {
        fontSize: 20,
        color: "#fff",
        fontWeight: 'bold',
    },
    image: {
        width: 90,
        height: 80,
        borderRadius: 30,
    },
})