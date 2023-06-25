import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import BannerSlide from '../../components/Slider';
import Category from '../../components/Category';
import Product from '../../components/Product';

export default function Home({navigation}) {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-1  ">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="p-3">
            <View className="w-[100%] flex-row  justify-between items-center ml-auto mr-auto">
              <View>
                <View
                  style={{
                    elevation: 10,
                    transform: [{rotate: '45deg'}],
                  }}
                  className="w-[40px] items-center bg-white rounded-[10px] justify-center h-[40px]">
                  <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    className="p-2"
                    style={{transform: [{rotate: '-45deg'}]}}>
                    <AntDesign name="menu-fold" color={'#000'} size={22} />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  elevation: 10,
                  overflow: 'hidden',
                  transform: [{rotate: '45deg'}],
                }}
                className="w-[40px] items-center bg-slate-400 rounded-[10px] justify-center h-[40px]">
                <TouchableOpacity
                  style={{transform: [{rotate: '-45deg'}]}}
                  onPress={() => navigation.navigate('Account')}
                  className="w-full h-full">
                  <Image
                    resizeMode="cover"
                    className="w-full h-full"
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View className="w-[100%] items-center pl-2 rounded-[10px] h-[50px] mt-5 bg-[#F5F3F6] flex-row">
              <Feather name="search" color={'#CCC'} size={24} />
              <TextInput
                onFocus={() => navigation.navigate('Search')}
                className="w-full h-full"
                placeholder="Search"
              />
            </View>
            <BannerSlide />
          </View>
          <Category />
          <Product />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
