import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

import authStack from './authStack';
import mainStack from './mainStack';

const Stack = createNativeStackNavigator();
function Navigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
    const subsciber = auth().onAuthStateChanged(onAuthStateChange);
    return subsciber;
  }, []);
  
  if (initializing) return null;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {user ? mainStack(Stack) : authStack(Stack)}
    </Stack.Navigator>
  );
}

export default Navigation;
