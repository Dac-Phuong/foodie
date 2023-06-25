import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, useWindowDimensions, StyleSheet, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Home from '../Screen/Home';
import Favorite from '../Screen/Favorite';
import Cart from '../Screen/Cart';
import Account from '../Screen/Accout';
import Notification from '../Screen/Notify';

const Tab = createBottomTabNavigator();
export default function MyTabs({}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 10,
          backgroundColor:"#fff",
          height: 65,
          shadowOpacity: 0.15,
          alignItems: 'center',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.btn}>
              <Entypo
                name="home"
                color={focused ? '#FF0000' : '#ccc'}
                size={25}
              />
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.btn}>
              <AntDesign
                name="heart"
                color={focused ? '#FF0000' : '#ccc'}
                size={25}
              />
              {/* <View style={styles.number}>
                <Text className="text-white text-xs">{'1'}</Text>
              </View> */}
            </View>
          ),
        }}
        name="Favorite"
        component={Favorite}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.btn}>
              <MaterialIcons
                name="shopping-cart"
                color={focused ? '#FF0000' : '#ccc'}
                size={25}
              />
              {/* <View style={styles.number}>
                <Text className="text-white text-xs">{1}</Text>
              </View> */}
            </View>
          ),
        }}
        name="Cart"
        component={Cart}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.btn}>
              <Ionicons
                name="notifications"
                color={focused ? '#FF0000' : '#ccc'}
                size={25}
              />
            </View>
          ),
        }}
        name="Notification"
        component={Notification}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.btn}>
              <FontAwesome
                name="user"
                color={focused ? '#FF0000' : '#ccc'}
                size={25}
              />
            </View>
          ),
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  number: {
    width: 16,
    height: 16,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 12,
    top: 12,
  },
});
