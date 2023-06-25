import React, {useEffect, useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Auth} from '../Auth';
import MyTabs from './bottomTab';
import Account from '../Screen/Accout';
import Favorite from '../Screen/Favorite';
import Cart from '../Screen/Cart';
import Notification from '../Screen/Notify';
import UserView from '../components/UserView';
import Setting from '../Screen/Setting';
const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
  return (
    <>
      <View className="flex-1 pl-4 pr-4 bg-[#EF0023]">
        <UserView />
        <DrawerContentScrollView>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <DrawerItem
          style={{
            borderBottomWidth: 0.5,
            borderColor: '#fff',
            marginBottom: 50,
            paddingVertical: 20,
            borderTopWidth: 0.5,
          }}
          label="Logout"
          onPress={() => Auth.Logout()}
          icon={({color, size}) => (
            <MaterialIcons color={'#fff'} size={size} name="logout" />
          )}
          labelStyle={{color: '#fff'}}
        />
      </View>
    </>
  );
};
export default function DrawerNavigate({...props}) {
  const dimension = useWindowDimensions();
  const drawerType = dimension.width >= 700 ? 'permanent' : 'front';

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 320,
        },
        drawerActiveBackgroundColor: '#ccc',
        drawerInactiveTintColor: '#FF0000',
        drawerItemStyle: {
          borderRadius: 10,
        },
      }}
      drawerType={drawerType}
      edgeWidth={100}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="HomeScreen"
        component={MyTabs}
        options={{
          drawerIcon: ({color, size,}) => (
            <Entypo
              name="home"
              color={'#fff'}
              size={size}
            />
          ),
          drawerLabelStyle: {
            color: '#fff',
          },
        }}
      />
      <Drawer.Screen
        name="Account Profile"
        component={Account}
        options={{
          drawerIcon: ({color, size}) => (
            <FontAwesome5 name="user-alt" color={'#fff'} size={size} />
          ),
          drawerLabelStyle: styles.drawerLabelStyle,
        }}
      />

      <Drawer.Screen
        name="My Favourites"
        component={Favorite}
        options={{
          drawerIcon: ({color, size}) => (
            <AntDesign name="heart" color={'#fff'} size={size} />
          ),
          drawerLabelStyle: styles.drawerLabelStyle,
        }}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{
          drawerIcon: ({color, size}) => (
            <MaterialIcons name="shopping-cart" color={'#fff'} size={size} />
          ),
          drawerLabelStyle: styles.drawerLabelStyle,
        }}
      />

      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="notifications" color={'#fff'} size={size} />
          ),
          drawerLabelStyle: styles.drawerLabelStyle,
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon name="settings-sharp" color={'#fff'} size={size} />
          ),
          drawerLabelStyle: styles.drawerLabelStyle,
        }}
      />
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  drawerLabelStyle: {
    color: '#fff',
  },
});
