import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, Linking } from 'react-native';
import { useState,useEffect } from 'react';

export default function Netflix() {
    const [index,setIndex]=useState(0)
    const press=()=>{
        Linking.openURL(array[index].url)
    }
    const array=[
        {desc:"Squid Game is a South Korean survival drama television series created by Hwang Dong-hyuk for Netflix.",url:"https://www.netflix.com/in/title/81040344"},
]

  return (
    <View className="flex-1 items-center justify-center w-full h-full bg-black">
      <View className="h-3/4 rounded w-3/4 bg-white">
        <Image className="w-full h-44"
        source={require("../assets/squid.jpeg")}
        />
        <Text className="p-2 font-semibold text-lg text-center">{array[index].desc}</Text>
        <View className="flex-1 justify-center items-center">
        <TouchableOpacity style={styles.button} className="mb-5 bg-orange-400 rounded" onPress={press}>
        <Text className="text-xl text-black-500">Open</Text>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    text:{
      height:100,
      width:"35%",
    },
    button: {
        alignItems: 'center',
        padding: 10,
        width:80
      },
});