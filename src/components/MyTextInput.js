import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Colors, Fonts} from '../constants';

const MyTextInput = ({...otherProps}) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={Colors.BLACK}
      style={[styles.input, focused && styles.focused]}
      {...otherProps}
    />
  );
};

export default MyTextInput;
const styles = StyleSheet.create({
  input: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.SMALL,
    padding: 15,
    backgroundColor: Colors.LIGHT_GREEN,
    borderColor: Colors.GREEN,
    borderRadius: 5,
    marginVertical: 10,
  },
  focused: {
    borderWidth: 3,
    borderColor: Colors.GREEN,
    shadowOffset: {width: 4, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});
