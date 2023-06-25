import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

export default function EditProfile({navigation}) {
  const [inputs, setInputs] = useState({
    email: '',
    username: '',
    phone: '',
  });
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
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
          <Text className="text-xl  text-[#000]">Edit Profile</Text>
        </View>
        <View className=" w-full mt-[15%] items-center">
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
          <TouchableOpacity className="absolute bottom-0 z-20 right-[36%] w-[25px] h-[25px] items-center justify-center rounded-[12px] bg-[#FF0000]">
            <AntDesign name="camera" color="#FFF" size={15} />
          </TouchableOpacity>
        </View>
        <View className="pt-16 h-full">
          <View className="pb-4">
            <Input placeholder="User Name" />
          </View>
          <View className="pb-4">
            <Input placeholder="Email" />
          </View>
          <View className="pb-4">
            <Input placeholder="Phone Number" />
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
            className="w-[100%] bg-slate-500 justify-between flex-row items-center pl-4 pr-4 mt-2 h-[60px]">
            <Text className="text-lg text-black">Change Password</Text>
            <Entypo name="chevron-right" color="#000" size={25} />
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
          className="w-[100%] bg-slate-500 justify-center pl-4 pr-4 mt-4 h-[60px]">
          <Text className="text-lg text-black">Location</Text>
        </TouchableOpacity>
        <View className="mt-auto">
          <Button lable={'Save'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
