import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexExample() {
  return (
    <View className="flex-1 items-center justify-center mt-16 mb-10 bg-white">
      <View className="w-4/5 h-4/5 bg-red-500 border-8 rounded-xl flex-1 items-center justify-center gap-4">
        <Text style={styles.text} className="text-white text-center  bg-blue-500">box 1</Text>
        <Text style={styles.text} className="text-white text-center  bg-blue-500">box 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
      height:100,
      width:"35%",
    }
});