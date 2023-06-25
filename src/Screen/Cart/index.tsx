import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function Cart({navigation}) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="">
        <View className="flex-row p-4 items-center justify-center">
          <View className="w-[100%] absolute flex-row justify-between items-center ml-auto mr-auto">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                elevation: 5,
                transform: [{rotate: '45deg'}],
              }}
              className="w-[40px] items-center bg-white rounded-[10px] justify-center h-[40px]">
              <Icon
                style={{transform: [{rotate: '-45deg'}]}}
                name="chevron-small-left"
                color={'#000'}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <Text className="text-xl  text-[#000]">My Cart</Text>
        </View>
        <ScrollView className="w-full pt-4 h-full">
          <View className="items-center w-full">
            <View
              style={{
                shadowOffset: {
                  width: 1,
                  height: 3,
                },
                shadowOpacity: 0.17,
                shadowRadius: 4.65,
                elevation: 10,
                backgroundColor: '#FFF',
                width: '94%',
                borderRadius: 15,
              }}
              className="h-[120px] mb-3 mt-3 flex-row items-center w-full">
              <Image
                className="w-[30%] h-full"
                resizeMode="contain"
                source={require('../../image/product/prd-1.png')}
              />
              <View className="p-3 w-[70%]">
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg text-black">Chicken burger</Text>
                  <Text className="text-sm font-medium text-[#FF0000]">2x</Text>
                </View>
                <Text numberOfLines={2} className="text-sm text-[#ccc]">
                  100 gr checken + tomato +cheesesssssssssss
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-lg font-bold text-[#FF0000]">
                    $20.00
                  </Text>
                  <TouchableOpacity className="w-[40px] items-center justify-center h-[40px] rounded-[20px] bg-[#FF0000]">
                    <MaterialCommunityIcons
                      name="delete-outline"
                      color={'#fff'}
                      size={22}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
