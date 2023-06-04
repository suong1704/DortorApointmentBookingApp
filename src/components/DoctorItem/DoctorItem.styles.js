import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: Colors.GRAY,
    backgroundColor: Colors.WHITE,
    marginBottom: 10,
    padding: 5,
  },
  doctorInfo: {
    marginLeft: 20,
  },
  name: {
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.GREEN,
    fontSize: Fonts.SMALL,
  },
  department: {
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.GREEN,
    fontSize: Fonts.SMALL,
  },
});
