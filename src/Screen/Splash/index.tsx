import {StyleSheet, StatusBar, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);
  return (
    <View className="flex-1" style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        style={styles.image}
        className="w-full flex-1 h-full items-center justify-center"
        resizeMode="cover"
        source={require('../../image/banner/Splash.png')}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '$paddingTop',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
});
