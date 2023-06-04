import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  view: {
    marginHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleView: {
    flex: 1,
  },
  rightView: {
    justifyContent: 'flex-end',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  badge: {position: 'absolute', top: -5, right: -10},
});
