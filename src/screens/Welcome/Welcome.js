import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors, Fonts} from '../../constants';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>HealthCare</Text>
    </View>
  );
};

export default Welcome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.LIGHT_GREEN,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    color: Colors.GREEN,
    fontFamily: Fonts.NOTOSERI,
    fontSize: Fonts.LARGE,
    marginTop: 20,
  },
});
