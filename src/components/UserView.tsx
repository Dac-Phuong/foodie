import React, {useContext, useState, useEffect} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const UserView = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View className="">
      <View className="flex-row mt-5  items-center">
        <View className="w-[60px] h-[60px] rounded-[30px] justify-center items-center">
          <Image
            resizeMode="contain"
            className="w-full h-full rounded-[30px]"
            source={{
              uri: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
            }}
          />
        </View>
        <View className="pl-2 text-white">
          {user != null ? (
            <Text className=" text-white text-sm font-bold">
              {user.displayName}
            </Text>
          ) : null}
          {user != null ? (
            <Text className=" text-[#AFCBD2] text-sm">{user.email}</Text>
          ) : null}
        </View>
      </View>
      <View
        style={{borderBottomWidth: 0.5, borderColor: '#fff'}}
        className=" mt-5 mb-7"
      />
    </View>
  );
};
export default UserView;
const styles = StyleSheet.create({});
