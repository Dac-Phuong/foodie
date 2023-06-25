import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Feather';

export default function Input({
  password,
  error,
  onForcus = () => {},
  ...props
}) {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View
      style={[
        {
          borderColor: error ? 'red' : isFocused ? 'blue' : '#fff',
        },
      ]}
      className=" w-[100%] border-[1px] rounded-[6px] h-[55px] bg-[#f5f5f5]">
      <TextInput
        secureTextEntry={hidePassword}
        autoCorrect={false}
        placeholderTextColor="#8F959E"
        onFocus={() => {
          onForcus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        className="w-full h-full relative pl-3"
        {...props}
      />
      {password && (
        <View className="absolute right-2 top-4">
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye' : 'eye-off'}
            size={20}
          />
        </View>
      )}
    
    </View>
  );
}

const styles = StyleSheet.create({});
