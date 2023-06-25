import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar,
  Keyboard
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Feather from 'react-native-vector-icons/dist/Feather';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import firestore from '@react-native-firebase/firestore';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetRefProps} from '../../components/BottomSheet';
import RangeSlider from '../../components/RangeSlider';
const {width} = Dimensions.get('window');
const cardWidth = width / 2 - 20;
export default function Search({navigation}) {
  const [products, setProducts] = useState([]);
  const ref = useRef<BottomSheetRefProps>(null);
  const MIN_DEFAULT = 20;
  const MAX_DEFAULT = 115;
  const [minValue, setMinValue] = useState(MIN_DEFAULT);
  const [maxValue, setMaxValue] = useState(MAX_DEFAULT);

  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

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
  const category = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Fast food'},
    {id: 3, name: 'Drink'},
    {id: 4, name: 'Snacks'},
  ];
  return (
    <SafeAreaView className=" flex-1 bg-white">
      <GestureHandlerRootView style={{flex: 1}}>
        <View className=" flex-1 bg-white">
          <View className="p-[10px]">
            <View className="w-[100%] relative justify-center items-center ml-auto mr-auto">
              <View className=" absolute left-2 ">
                <TouchableOpacity
                  style={{
                    elevation: 4,
                    transform: [{rotate: '45deg'}],
                  }}
                  className="w-[40px]  items-center bg-white rounded-[10px] justify-center h-[40px]"
                  onPress={() => navigation.goBack()}>
                  <Icon
                    style={{
                      transform: [{rotate: '-45deg'}],
                    }}
                    name="chevron-small-left"
                    color={'#000'}
                    size={30}
                  />
                </TouchableOpacity>
              </View>
              <Text className="text-xl  text-[#000]">Seach food</Text>
            </View>
            <View className="w-full items-center mt-10 relative  flex-row">
              <View className="w-[85%] items-center pl-2 rounded-[10px] h-[50px] bg-[#F5F3F6] flex-row">
                <Feather name="search" color={'#CCC'} size={24} />
                <TextInput className="w-full h-full" placeholder="Spicy food" />
              </View>
              <View className=" absolute right-0">
                <TouchableOpacity
                  style={{
                    elevation: 10,
                    transform: [{rotate: '45deg'}],
                  }}
                  className="w-[40px]  items-center bg-[#FF0000] rounded-[10px] justify-center h-[40px]"
                  onPress={onPress}>
                  <Ionicons
                    style={{
                      transform: [{rotate: '-45deg'}],
                    }}
                    name="md-options"
                    color={'#fff'}
                    size={18}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="flex-1 justify-between">
            <FlatList
              numColumns={2}
              data={products}
              keyExtractor={item => item.id}
              className="flex-1 "
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      paramKey: item,
                    })
                  }
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
                    margin: 10,
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
                      <Icons name="add-outline" color={'#fff'} size={25} />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <BottomSheet ref={ref}>
            <View className="flex-1 bg-white">
              <View className="justify-center  p-4 items-center">
                <Text className="text-xl text-[#FF0000] ">Filters</Text>
              </View>
              <View className="flex-row  p-4 justify-between">
                <Text className="text-lg text-black">Price Range</Text>
                <Text className="text-base text-[#FF0000] font-normal">
                  ${minValue} - ${maxValue}
                </Text>
              </View>
              <View style={styles.content}>
                <RangeSlider
                  sliderWidth={300}
                  min={MIN_DEFAULT}
                  max={MAX_DEFAULT}
                  step={10}
                  onValueChange={range => {
                    setMinValue(range.min);
                    setMaxValue(range.max);
                  }}
                />
                <View className="pt-6">
                  <Text className="text-lg text-black">Category</Text>
                  <View className="flex-row justify-between flex-wrap">
                    {category.map((item, index) => {
                      return (
                        <TouchableOpacity
                          key={item.id}
                          className="w-[30%] mt-2 mr-2 rounded-md bg-[#F2EFFF] h-[35px] justify-center items-center">
                          <Text className="text-sm font-normal">
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                  <View className="flex-row pt-6 justify-between">
                    <TouchableOpacity
                      style={{borderColor: '#FF0000', borderWidth: 1}}
                      className="h-[50px] w-[47%] rounded-lg justify-center items-center">
                      <Text className="text-[#FF0000] text-sm font-bold">
                        Clear All
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="h-[50px] w-[47%] justify-center rounded-lg items-center bg-[#FF0000]">
                      <Text className="text-[#fff] text-sm font-bold">
                        Apply
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </BottomSheet>
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
});
