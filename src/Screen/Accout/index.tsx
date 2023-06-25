import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';

export default function Account({navigation}) {
  return (
    <SafeAreaView className="flex-1 overflow-hidden bg-white">
      <View className="p-4">
        <View className="flex-row  items-center justify-center">
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
          <Text className="text-xl  text-[#000]">My Profile</Text>
        </View>
        <View className=" w-full mt-[15%]  items-center">
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
              borderRadius: 10,
              borderColor: '#FFF',
            }}
            className="w-[100px] border-2 relative  h-[100px] rounded-xl">
            <Image
              className="w-fll h-full rounded-[10px]"
              resizeMode="contain"
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU',
              }}
            />
          </View>
          <Text className="text-black font-bold text-lg pt-4 ">user name</Text>
          <Text>username@gmail.com</Text>
          <Text>03214554</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            className="w-[100px] rounded-lg mt-4 h-[40px] bg-[#FF0000] items-center justify-center">
            <Text className="text-white ">Edit Profite</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            shadowOffset: {
              width: 1,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 4.65,
            elevation: 10,
            backgroundColor: '#FFF',
            borderRadius: 10,
          }}
          className="w-[100%] bg-slate-500 justify-center pl-4 pr-4 mt-10 h-[60px]">
          <Text className="text-lg text-black">My Order</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowOffset: {
              width: 1,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 4.65,
            elevation: 10,
            backgroundColor: '#FFF',
            borderRadius: 10,
          }}
          className="w-[100%] bg-slate-500 justify-center pl-4 pr-4 mt-4 h-[60px]">
          <Text className="text-lg text-black">My Address</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowOffset: {
              width: 1,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 4.65,
            elevation: 10,
            backgroundColor: '#FFF',
            borderRadius: 10,
          }}
          className="w-[100%] bg-slate-500 justify-center pl-4 pr-4 mt-4 h-[60px]">
          <Text className="text-lg text-black">My Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            shadowOffset: {
              width: 1,
              height: 3,
            },
            shadowOpacity: 0.17,
            shadowRadius: 4.65,
            elevation: 10,
            backgroundColor: '#FFF',
            borderRadius: 10,
          }}
          className="w-[100%] bg-slate-500 justify-center pl-4 pr-4 mt-4 h-[60px]">
          <Text className="text-lg text-black">My Notification</Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
