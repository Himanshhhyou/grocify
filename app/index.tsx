import {View,Text,StyleSheet } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Test Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor : "green",
    justifyContent: 'center',
    alignItems: 'center'
  }
})
