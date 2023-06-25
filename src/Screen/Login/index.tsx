import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/Entypo';
import {Auth} from '../../Auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/loader';

const Login = ({navigation}) => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 6) {
      handleError('Min password length of 6', 'password');
      isValid = false;
    }

    if (isValid) {
      Login();
    }
  };
  
  const Login = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        Auth.login(inputs.email, inputs.password);
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <KeyboardAvoidingView className="flex-1  bg-white ">
      <TouchableWithoutFeedback className="flex-1 " onPress={Keyboard.dismiss}>
        <SafeAreaView
          className="flex-1 "
          style={{marginTop: StatusBar.currentHeight}}>
          <Loader visible={loading} />
          <View className="p-4 flex-1">
            <View className="w-[100%] flex-row relative justify-center items-center ml-auto mr-auto">
              <View className="absolute left-0">
                <View
                  style={{
                    elevation: 10,
                    transform: [{rotate: '45deg'}],
                  }}
                  className="w-[40px] items-center bg-white rounded-[10px] justify-center h-[40px]"></View>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  className="absolute top-0 p-1 left-0">
                  <Icon name="chevron-small-left" color={'#000'} size={30} />
                </TouchableOpacity>
              </View>
              <Text className="text-xl  text-[#000]">Sign in</Text>
            </View>
            <View className="items-center mt-[25%] justify-center">
              <Text className="text-2xl text-[#FF0000]">Wellcome Back</Text>
              <Text className="text-lg text-[#737373]">
                Login to your account.
              </Text>
              <View className="w-full items-center  mt-[15%]">
                <Input
                  onFocus={() => handleError(null, 'email')}
                  onChangeText={text => handleOnchange(text, 'email')}
                  placeholder="Email"
                  error={errors.email}
                />
                <View className="w-full items-center mt-[20px]">
                  <Input
                    onFocus={() => handleError(null, 'password')}
                    onChangeText={text => handleOnchange(text, 'password')}
                    password
                    placeholder="Password"
                    error={errors.password}
                  />
                </View>
                <Text className="text-[#FF0000] text-sm font-medium pt-2">
                  {errors.email || errors.password}
                </Text>
                <TouchableOpacity className="ml-auto pt-2">
                  <Text className=" text-[#FF0000]">Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="pt-10 w-full items-center">
              <Button lable={'Login'} onPress={() => validate()} />
              <View className="flex-row">
                <Text className="text-sm text-[#737373]">
                  Don't have an account,
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Register')}>
                  <Text className=" text-[#FF0000] text-sm"> Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({});
