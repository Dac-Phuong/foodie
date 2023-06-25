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
import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '@react-native-community/checkbox';
import {Auth} from '../../Auth';
import Loader from '../../components/loader';

const Register = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    fullname: '',
    password: '',
    comfirmpassword: '',
  });

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    }

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

    if (!inputs.comfirmpassword) {
      handleError('Please input Comfirm Password', 'comfirmpassword');
      isValid = false;
    } else if (inputs.comfirmpassword !== inputs.password) {
      handleError('Password is not correct', 'comfirmpassword');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };
  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        Auth.register(inputs.fullname, inputs.email, inputs.password);
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
    <KeyboardAvoidingView className="flex-1 bg-white ">
      <TouchableWithoutFeedback className="flex-1 " onPress={Keyboard.dismiss}>
        <SafeAreaView
          style={{marginTop: StatusBar.currentHeight}}
          className="flex-1 bg-white">
          <Loader visible={loading} />
          <View className="p-4">
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
                  className="absolute -top-1 -left-1 p-2 ">
                  <Icon name="chevron-small-left" color={'#000'} size={30} />
                </TouchableOpacity>
              </View>
              <Text className="text-xl  text-[#000]">Sign up</Text>
            </View>
            <View className="items-center mt-[25%] justify-center">
              <Text className="text-2xl text-[#FF0000]">Register</Text>
              <Text className="text-lg text-[#737373]">
                Creact your new account.
              </Text>
              <View className="w-full items-center mt-[15%]">
                <Input
                  onFocus={() => handleError(null, 'fullname')}
                  onChangeText={text => handleOnchange(text, 'fullname')}
                  placeholder="Full Name"
                  error={errors.fullname}
                />
                <View className="w-full items-center mt-[20px]">
                  <Input
                    onFocus={() => handleError(null, 'email')}
                    onChangeText={text => handleOnchange(text, 'email')}
                    placeholder="Email"
                    error={errors.email}
                  />
                </View>
                <View className="w-full items-center mt-[20px]">
                  <Input
                    onFocus={() => handleError(null, 'password')}
                    onChangeText={text => handleOnchange(text, 'password')}
                    password
                    placeholder="Password"
                    error={errors.password}
                  />
                </View>
                <View className="w-full items-center mt-[20px]">
                  <Input
                    onChangeText={text =>
                      handleOnchange(text, 'comfirmpassword')
                    }
                    password
                    onFocus={() => handleError(null, 'comfirmpassword')}
                    placeholder="Comfirm Password"
                    error={errors.comfirmpassword}
                  />
                </View>
                <Text className="text-[#FF0000] text-sm font-medium pt-2">
                  {errors.fullname ||
                    errors.email ||
                    errors.password ||
                    errors.comfirmpassword}
                </Text>
                <View className="flex-row mr-auto mt-3">
                  <View className="-top-[5px]">
                    <CheckBox
                      tintColors={{
                        true: '#FF0000',
                        false: '#FF0000',
                      }}
                      disabled={false}
                      value={toggleCheckBox}
                      onValueChange={newValue => setToggleCheckBox(newValue)}
                    />
                  </View>
                  <View>
                    <Text className="pl-1 ">
                      I agree to you
                      <Text className="text-[#FF0000]"> privacy policy </Text>
                      and
                    </Text>
                    <Text className="text-[#FF0000]"> terms & conditions.</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className="pt-5 w-full items-center">
              <Button onPress={() => validate()} lable={'Sign up'} />
              <View className="flex-row">
                <Text className="text-sm text-[#737373]">
                  Already an account,
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className=" text-[#FF0000] text-sm"> Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({});
