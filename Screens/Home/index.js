import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import Header from '../../component/Header'
import Search from '../../component/Search'
import Category from '../../component/Category'
import Banner from '../../component/Banner'
import FoodItems from '../../component/FoodItems'

const HomeScreen  = () => {
  return (
    <ScrollView 
    showsVerticalScrollIndicator={false} 
    style={styles.container}>
      <SafeAreaView style= {styles.menu}>
        <Header />
        <Search />
        <Category />
        <Banner />
        <FoodItems />
      </SafeAreaView>
    </ScrollView>
  )
}

export default HomeScreen 

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  menu: {
    paddingHorizontal: 25,
    paddingTop: 50,
    gap: 20,
  },
})