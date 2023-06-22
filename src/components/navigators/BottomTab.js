import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home/Home';
import AppointmentNavigator from './AppointmentNavigator';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MedicalRecord from '../../screens/MedicalRecord/MedicalRecord';
import Profile from '../../screens/Profile/Profile';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constants';
const Tab = createBottomTabNavigator();
function BottomTab() {
  const styles = {
    size: 25,
    activeColor: '#0C7FDA',
    inactiveColor: 'rgba(34, 41, 124, 0.6)',
  };
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 65 + insets.bottom
        },
        tabBarLabelStyle: {
          paddingBottom: 7,
          fontSize: 14,
          fontWeight: 500,
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarActiveBackgroundColor: '#ECF2FF',
        tabBarActiveTintColor: '#0C7FDA',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={'home'}
              size={styles.size}
              color={focused ? Colors.DEFAULT_CORLOR : ''}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="calendar"
              size={styles.size}
              color={focused ? Colors.DEFAULT_CORLOR : ''}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MedicalRecord"
        component={MedicalRecord}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="file-medical"
              size={styles.size}
              color={focused ? Colors.DEFAULT_CORLOR : ''}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontistoIcon
              name={'doctor'}
              size={styles.size}
              color={focused ? Colors.DEFAULT_CORLOR : ''}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
