import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const {width} = Dimensions.get('window');
const cardWidth = width / 2 - 20;
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

export default function Product() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = firestore().collection('category');
        const snapshot = await productsRef.get();
        const productsData = snapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <View className="m-3">
      
      <View className="flex-wrap justify-between flex-1 flex-row">
        {products.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Detail', {
                  paramKey: item,
                })
              }
              key={index}
              className="h-[250px] rounded-lg "
              style={{
                width: cardWidth,
                shadowOffset: {
                  width: 1,
                  height: 3,
                },
                shadowOpacity: 0.17,
                shadowRadius: 4.65,
                elevation: 5,
                backgroundColor: '#FFF',
                marginVertical: 5,
              }}>
              <Image
                resizeMode="contain"
                className="w-full rounded-lg h-[50%]"
                source={{uri: item.image}}
              />
              <View className="pl-2 pr-2">
                <Text className="text-xl pt-2 font-bold text-black">
                  {item.name}
                </Text>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  className="text-[#A9A9A9]">
                  {item.title}
                </Text>
              </View>
              <View className="pl-2 pr-2 mt-auto pb-2 flex-row items-center justify-between">
                <Text className="text-[#FF0000] text-base font-bold">
                  ${item.price}
                </Text>
                <TouchableOpacity className="w-[40px] items-center justify-center h-[40px] rounded-[20PX] bg-[#FF0000]">
                  <MaterialCommunityIcons name="cart-variant" color={'#fff'} size={25} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
