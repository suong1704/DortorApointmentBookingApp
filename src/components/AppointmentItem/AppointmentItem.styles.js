import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../constants';

export const styles = StyleSheet.create({
  container: {
    height: 130,
    borderRadius: 12,
    backgroundColor: Colors.GREEN,
  },
  top: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.LIGHT_GREEN,
  },
  doctorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    marginLeft: 20,
    fontFamily: Fonts.POPPINS_BOLD,
    color: Colors.WHITE,
    fontSize: Fonts.SMALL,
  },
  department: {
    marginLeft: 20,
    fontFamily: Fonts.POPPINS_LIGHT,
    color: Colors.WHITE,
    fontSize: Fonts.SMALL,
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  wrap: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  info: {
    fontFamily: Fonts.POPPINS_REGULAR,
    fontSize: Fonts.SMALL,
    color: Colors.WHITE,
    paddingTop: 5,
  },
  spaceRight: {
    paddingRight: 10,
  },
});
