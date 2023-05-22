import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import {styles} from './Login.styles';
import Button from '../../components/Button';
import {Colors} from '../../constants';

const Login = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.login}>Login here</Text>
          <Text style={styles.welcome}>
            Chào mừng quay trở lại với HealthCare
          </Text>
        </View>
        <View style={styles.input}>
          <MyTextInput placeholder="Email" keyboardType="email-address" />
          <MyTextInput placeholder="Mật khẩu" secureTextEntry />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Bạn quên mật khẩu?</Text>
        </TouchableOpacity>
        <Button primary title={'Đăng nhập'} />
        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.btnNewAccount}>Tạo tài khoản mới</Text>
        </TouchableOpacity>
        <View style={styles.otherContainer}>
          <Text style={styles.otherContent}>Hoặc đăng nhập với</Text>
          <View style={styles.icon}>
            <TouchableOpacity style={styles.btnIcon}>
              <Text>gg</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnIcon}>
              <Text> fb</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
