import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.container}>
        <Feather name="search" size={24} color="black" />
      <TextInput placeholder='Search' style={styles.textInput}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e3e3e3",
        borderRadius: 60,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 15,
    },
    textInput: {
        fontSize: 15,
        flex: 0.9,
    },
})