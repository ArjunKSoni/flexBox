import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlexExample from './screens/flexbox';
import Netflix from './screens/netflix';

export default function App() {
  return (
    <View className="flex-1 mt-16 items-center bg-white">
      <Text className="text-red-600 text-5xl font-bold">NETFLIX</Text>
      <Netflix/>
    </View>
  );
}

const styles = StyleSheet.create({

});
