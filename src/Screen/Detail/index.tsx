import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypominus from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function Detail({navigation, route}) {
  const item = route.params.paramKey;
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="bg-white flex-1">
        <View className="relative h-[50%] ">
          <Image
            resizeMode="contain"
            className="w-full h-[85%]"
            source={{uri: item.image}}
          />
          <View className="w-[100%] absolute flex-row p-4 justify-between items-center ml-auto mr-auto">
            <View
              style={{
                elevation: 10,
                transform: [{rotate: '45deg'}],
              }}
              className="w-[40px] items-center bg-white rounded-[10px] justify-center h-[40px]">
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="p-2"
                style={{transform: [{rotate: '-45deg'}]}}>
                <Entypo name="chevron-left" color={'#000'} size={22} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                elevation: 10,
                overflow: 'hidden',
                transform: [{rotate: '45deg'}],
              }}
              className="w-[40px] items-center bg-white rounded-[10px] justify-center h-[40px]">
              <TouchableOpacity
                style={{transform: [{rotate: '-45deg'}]}}
                className="p-2 items-center">
                <Icon name="heart" color={'#ccc'} size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex-row items-center justify-center">
            <TouchableOpacity
              style={{
                elevation: 10,
                transform: [{rotate: '45deg'}],
              }}
              className="w-[40px] items-center bg-[#FF0000] rounded-[10px] justify-center h-[40px]"
              onPress={() => alert('oke')}
              style={{transform: [{rotate: '45deg'}]}}>
              <Entypominus
                style={{transform: [{rotate: '-45deg'}]}}
                name="minus"
                color={'#fff'}
                size={25}
              />
            </TouchableOpacity>
            <Text className="p-4 text-base font-bold text-[#FF0000]">1</Text>
            <TouchableOpacity
              style={{
                elevation: 10,
                transform: [{rotate: '45deg'}],
              }}
              className="w-[40px] items-center bg-[#FF0000] rounded-[10px] justify-center h-[40px]"
              onPress={() => alert('oke')}>
              <MaterialIcons
                style={{transform: [{rotate: '-45deg'}]}}
                name="add"
                color={'#fff'}
                size={25}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.21,
            shadowRadius: 7.68,
            elevation: 10,
            backgroundColor: '#FFF',
          }}
          className="w-[93%] rounded-[15px] m-auto p-4 h-[47%]">
          <Text className="text-lg text-[#000]">Fast food</Text>
          <View className="flex-row justify-between items-center">
            <Text className="text-xl text-black">{item.name}</Text>
            <View className="flex-row items-center">
              <FontAwesome color={'#FFC41F'} name="star" size={18} />
              <Text className="pl-2 text-lg">{item.rating}</Text>
            </View>
          </View>
          <View className="pt-2 pb-2">
            <Text className=" text-sm text-[#B1B1B1]">{item.description}</Text>
            <View className="flex-row pt-2  items-center">
              <Text className="text-base text-[#000]">Delivery Time</Text>
              <View className="flex-row justify-center items-center pl-14">
                <Ionicons color={'#FF0000'} name="time-outline" size={24} />
                <Text className="pl-2 text-sm font-bold text-[#000]">
                  25 mins
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-auto mb-2">
            <Text className="text-base text-[#000]">Total Price</Text>
            <View className="flex-row justify-between items-center">
              <Text className="text-lg text-[#000] font-bold">
                ${item.price}.00
              </Text>
              <TouchableOpacity
                style={{
                  elevation: 10,
                  transform: [{rotate: '45deg'}],
                }}
                className="w-[50px] items-center bg-[#FF0000] rounded-[10px] justify-center h-[50px]"
                onPress={() => alert('oke')}
                style={{transform: [{rotate: '45deg'}]}}>
                <MaterialCommunityIcons
                  style={{transform: [{rotate: '-45deg'}]}}
                  name="cart-variant"
                  color={'#fff'}
                  size={25}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
