import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FinishOrder() {
  return (
    <View className=" bg-white h-full">
      <Image
        className="relative"
        source={require('../image/background/Pattern.png')}
      />
      <View className="absolute justify-center items-center h-full  w-full">
        <Image source={require('../image/banner/Finish.png')} />
        <Text className="text-5xl pt-2 font-bold text-[#FF0000]">
          Food Runs
        </Text>
      </View>
      <View className="absolute justify-center items-center h-full w-full -top-14">
        <Image
          className=" "
          source={require('../image/banner/dots.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
