import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts} from '../../constants';
import MyTextInput from '../../components/MyTextInput';
import {Icon} from 'react-native-vector-icons/FontAwesome';

const Register = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}>
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
        }}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: Fonts.LARGE,
              color: Colors.GREEN,
              fontFamily: Fonts.POPPINS_BOLD,
              marginVertical: 10,
            }}>
            Đăng Ký
          </Text>
          <Text
            style={{
              marginVertical: 10,
              fontFamily: Fonts.POPPINS_REGULAR,
              fontSize: Fonts.MEDIUM,
              maxWidth: '80%',
              textAlign: 'center',
            }}>
            Chào mừng bạn đến với HealthCare
          </Text>
        </View>
        <View
          style={{
            marginVertical: 10,
          }}>
          <MyTextInput placeholder="Email" keyboardType="email-address" />
          <MyTextInput placeholder="Họ và tên" />
          <MyTextInput placeholder="Số điện thoại" keyboardType="phone-pad" />
          <MyTextInput placeholder="Mật khẩu" secureTextEntry />
          <MyTextInput placeholder="Nhập lại mật khẩu" secureTextEntry />
        </View>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: Colors.GREEN,
            marginVertical: 10,
            borderRadius: 10,
            shadowColor: Colors.BLACK,
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_BOLD,
              color: Colors.WHITE,
              textAlign: 'center',
              fontSize: Fonts.MEDIUM,
            }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('Login')}
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_REGULAR,
              color: Colors.BLACK,
              textAlign: 'center',
              fontSize: Fonts.SMALL,
            }}>
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: 10,
          }}>
          <Text
            style={{
              fontFamily: Fonts.POPPINS_BOLD,
              color: Colors.GREEN,
              textAlign: 'center',
              fontSize: Fonts.SMALL,
            }}>
            Or continue with
          </Text>

          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.GRAY,
                borderRadius: 5,
                marginHorizontal: 10,
              }}>
              <Icon name="google" size={30} color={Colors.GREEN} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: Colors.GRAY,
                borderRadius: 5,
                marginHorizontal: 10,
              }}>
              <Icon name="faebook" size={30} color="#900" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
