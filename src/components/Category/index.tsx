import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore, {firebase} from '@react-native-firebase/firestore';

export default function Category() {
  const [Index, setIndex] = useState(0);
  useEffect(() => {
    const collectionRef = firebase
      .firestore()
      .collection('Category');

    collectionRef
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // Access the document data using doc.data()
          console.log(doc);
        });
      })
      .catch(error => {
        console.error('Error getting collection:', error);
      });
  }, []);
  const category = [
    {
      id: 1,
      name: 'Burder',
      image: require('../../image/product/🍔.png'),
    },
    {
      id: 2,
      name: 'Pizza',
      image: require('../../image/product/🍔.png'),
    },
    {
      id: 3,
      name: 'Sanwich',
      image: require('../../image/product/🍔.png'),
    },
    {
      id: 4,
      name: 'Burder',
      image: require('../../image/product/🍔.png'),
    },
    {
      id: 5,
      name: 'Pizza',
      image: require('../../image/product/🍔.png'),
    },
  ];

  return (
    <View className="w-full h-14 mt-5 pr-3 justify-between">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {category.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setIndex(index)}
              style={[
                {
                  backgroundColor: '#F2EFFF',
                },
                Index === index && {
                  backgroundColor: '#FF0000',
                  width: 140,
                },
              ]}
              key={item.id}
              className="w-[120px] ml-3 pl-3 items-center flex-row rounded-md h-full ">
              <Image source={item.image} resizeMode="contain" />
              <Text
                className="pl-3 font-medium text-white"
                style={[
                  {
                    color: '#000',
                  },
                  Index === index && {
                    color: '#FFF',
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
