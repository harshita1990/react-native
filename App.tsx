import React from 'react';
import {
  View,
  Text, 
  SafeAreaView, 
  Button
} from 'react-native';

function App() {

  const handlePress = () => {
    alert("Hii...Button Pressed!");
  };
  return(
  <SafeAreaView>
    <View >
      <Text>Hello World!</Text>
      <Button title="Press Me" onPress={handlePress} />
    </View>
  </SafeAreaView>);
}
export default App;