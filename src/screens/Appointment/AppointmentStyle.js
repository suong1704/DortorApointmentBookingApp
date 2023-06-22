import { StyleSheet } from 'react-native';
import { Colors } from '../../constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  methodExamination: {
    flexDirection: 'row',
  },
  dateExamination: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  dateItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.DEFAULT_CORLOR,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    width: '100%',
    height: "100%",
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },

});
