import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTab from './BottomTab';
import { Text, Image } from 'react-native';
// import { logo } from '../assets/images';
// import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomDrawerContent from '../custom/CustomDrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="BottomTab"
        component={BottomTab}
        options={{
          drawerItemStyle: { display: 'none' },
          drawerType: 'front',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
