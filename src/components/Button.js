import React from 'react';
import {Colors, Fonts} from '../constants';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, primary = false, text = false, ...otherProps}) => {
  return (
    <TouchableOpacity
      style={[styles.button, primary && styles.primary, text && styles.text]}>
      <Text style={[primary && styles.titlePrimary, text && styles.titleText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  button: {},
  primary: {
    padding: 10,
    backgroundColor: Colors.GREEN,
    marginVertical: 30,
    borderRadius: 10,
    shadowColor: Colors.GREEN,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  titlePrimary: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Fonts.MEDIUM,
  },
  text: {
    backgroundColor: Colors.GREEN,
  },
  titleText: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Fonts.SMALL,
  },
});
