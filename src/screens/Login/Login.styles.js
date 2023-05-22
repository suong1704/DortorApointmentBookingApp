import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../constants';

export const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: Colors.GRAY,
  },
  titlePrimary: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREEN,
    textAlign: 'center',
    fontSize: Fonts.MEDIUM,
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    padding: 25,
    backgroundColor: Colors.WHITE,
  },
  top: {
    alignItems: 'center',
  },
  login: {
    fontSize: Fonts.LARGE,
    color: Colors.GREEN,
    fontFamily: Fonts.POPPINS_BOLD,
    marginVertical: 20,
  },
  welcome: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.MEDIUM,
    maxWidth: '80%',
    textAlign: 'center',
  },
  input: {
    marginVertical: 30,
  },
  forgotPassword: {
    fontFamily: Fonts.POPPINS_BOLD,
    fontSize: Fonts.SMALL,
    color: Colors.GREEN,
    alignSelf: 'flex-end',
  },
  btnLogin: {
    padding: 10,
    backgroundColor: Colors.GREEN,
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: Colors.GREEN,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  textLogin: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.WHITE,
    textAlign: 'center',
    fontSize: Fonts.MEDIUM,
  },
  btnNewAccount: {
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Colors.BLACK,
    textAlign: 'center',
    fontSize: Fonts.SMALL,
  },
  otherContainer: {
    backgroundColora: '#000',
    marginVertical: 20,
    marginBottom: 30,
  },
  otherContent: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREEN,
    textAlign: 'center',
    fontSize: Fonts.SMALL,
  },
  icon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnIcon: {
    padding: 10,
    backgroundColor: Colors.GRAY,
    borderRadius: 5,
    marginHorizontal: 10,
  },
});
