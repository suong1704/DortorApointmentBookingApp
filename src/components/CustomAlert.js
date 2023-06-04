import React, {useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Colors} from '../constants';

const CustomAlert = (danger = false, success = false, warning = false) => {
  return Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    styles.danger,
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  danger: {
    color: 'red',
  },
});
