import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home/Home';
import Appointment from './screens/Appointment/Appointment';
import AppointmentDetail from './screens/AppointmentDetail/AppointmentDetail';
import Profile from './screens/Profile/Profile';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import Success from './screens/Success/Success';
import Pharmacy from './screens/Pharmacy/Pharmacy';
import Welcome from './screens/Welcome/Welcome';
import Doctor from './screens/Doctor/Doctor';
import DoctorDetail from './screens/DoctorDetail/DoctorDetail';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Welcome}
          name="Welcome"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Login}
          name="Login"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Register}
          name="Register"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Doctor}
          name="Doctor"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={DoctorDetail}
          name="DoctorDetail"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Appointment}
          name="Appointment"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AppointmentDetail}
          name="AppointmentDetail"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Pharmacy}
          name="Pharmacy"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Profile}
          name="Profile"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Success}
          name="Success"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
