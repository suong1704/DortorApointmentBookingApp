import React, {useState} from 'react';
import {SafeAreaView, Text, View, Alert, Image} from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import {styles} from './Register.styles';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../../constants';

const Register = ({navigation: {navigate}}) => {
  const [account, setAccount] = useState({
    email: '',
    name: '',
    phone: '',
    password: '',
  });
  const [rePassword, setRePassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [seeRePassword, setSeeRePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [checkValidPhone, setCheckValidPhone] = useState(false);
  const [checkValidRePass, setCheckValidRePass] = useState(false);

  const handleCheckEmail = e => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setAccount({...account, email: e});
    if (re.test(e) || regex.test(e) || e === '') {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Mật khẩu không bao gồm khoảng trống';
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Mật khẩu dài tối thiểu 8 ký tự, và tối đa 16 ký tự.';
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Mật khẩu phải bao gồm chữ viết thường, chữ viết hoa và số.';
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Mật khẩu phải bao gồm chữ viết thường, chữ viết hoa và số.';
    }
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Mật khẩu phải bao gồm chữ viết thường, chữ viết hoa và số.';
    }
    return null;
  };
  const checkPhoneValidity = value => {
    setAccount({...account, phone: value});
    if (value.length !== 10) {
      return setCheckValidPhone(true);
    }
    return setCheckValidPhone(false);
  };
  const handleCheckRePass = value => {
    setRePassword(value);
    if (value !== account.password) {
      return setCheckValidRePass(true);
    }
    return setCheckValidRePass(false);
  };
  const handleRegister = () => {
    const checkPassowrd = checkPasswordValidity(account.password);
    if (!checkPassowrd) {
      Alert.alert('Thông báo', 'OK');
    } else {
      Alert.alert('Thông báo', checkPassowrd);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.register}>Đăng Ký</Text>
        </View>
        <View>
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Email"
              keyboardType="email-address"
              value={account.email}
              onChangeText={e => handleCheckEmail(e)}
            />
          </View>
          {checkValidEmail ? (
            <Text style={styles.textFailed}>Email không hợp lệ</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={[styles.wrapperInput, styles.spaceBottom]}>
            <MyTextInput
              placeholder="Họ và tên"
              value={account.name}
              onChangeText={e => setAccount({...account, name: e})}
            />
          </View>
          <View style={styles.wrapperInput}>
            <MyTextInput
              placeholder="Số điện thoại"
              keyboardType="phone-pad"
              value={account.phone}
              onChangeText={e => checkPhoneValidity(e)}
            />
          </View>
          {checkValidPhone ? (
            <Text style={styles.textFailed}>Số điện thoại không hợp lệ</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}
          <View style={[styles.wrapperInput, styles.spaceBottom]}>
            <MyTextInput
              placeholder="Mật khẩu"
              secureTextEntry={seePassword}
              value={account.password}
              onChangeText={e => setAccount({...account, password: e})}
            />
            <View style={styles.wrapperIcon}>
              <Button
                title={
                  <Icon
                    name={seePassword ? 'eye' : 'eye-slash'}
                    size={20}
                    color={Colors.BLACK}
                  />
                }
                onPress={() => setSeePassword(!seePassword)}
              />
            </View>
          </View>
          <View style={[styles.wrapperInput, styles.spaceBottom]}>
            <MyTextInput
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={seeRePassword}
              value={rePassword}
              onChangeText={e => handleCheckRePass(e)}
            />
            <View style={[styles.wrapperIcon, styles.icon]}>
              {rePassword !== '' && (
                <Icon
                  style={styles.check}
                  name={checkValidRePass ? 'times-circle-o' : 'check-circle-o'}
                  size={20}
                  color={checkValidRePass ? 'red' : Colors.GREEN}
                />
              )}
              <Button
                title={
                  <Icon
                    name={seeRePassword ? 'eye' : 'eye-slash'}
                    size={20}
                    color={Colors.BLACK}
                  />
                }
                onPress={() => setSeeRePassword(!seeRePassword)}
              />
            </View>
          </View>
        </View>
        <View style={styles.spaceBottom}>
          {account.email === '' ||
          account.name === '' ||
          account.phone === '' ||
          account.password === '' ||
          rePassword === '' ||
          checkValidEmail === true ||
          checkPhoneValidity === true ||
          checkValidRePass === true ? (
            <Button
              disabled
              primary
              title={'Đăng ký'}
              onPress={handleRegister}
            />
          ) : (
            <Button primary title={'Đăng ký'} onPress={handleRegister} />
          )}
        </View>
        <Button
          title={'Bạn đã có tài khoản?'}
          onPress={() => navigate('Login')}
        />
        <View style={styles.other}>
          <View style={styles.otherContainer}>
            <Text style={styles.otherContent}>Hoặc đăng ký với</Text>
            <View style={styles.icon}>
              <Button
                title={<Icon name="facebook" size={20} color={Colors.BLACK} />}
                icon
              />
              <Button
                title={<Icon name="google" size={20} color={Colors.BLACK} />}
                icon
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
