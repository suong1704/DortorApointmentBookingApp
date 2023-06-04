import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import {styles} from './Home.styles';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {Colors, Fonts} from '../../constants';
import AppointmentItem from '../../components/AppointmentItem/AppointmentItem';
import DoctorItem from '../../components/DoctorItem/DoctorItem';

const categories = [
  {
    icon: <FontistoIcon name={'doctor'} size={24} color={Colors.GREEN} />,
    name: 'Bác sỹ',
    to: 'Doctor',
  },
  {
    icon: <AntDesignIcon name={'adduser'} size={24} color={Colors.GREEN} />,
    name: 'Lịch khám',
    to: 'Appointment',
  },
  {
    icon: <FontAwesome5Icon name={'capsules'} size={24} color={Colors.GREEN} />,
    name: 'Đơn thuốc',
    to: 'Pharmacy',
  },
  {
    icon: <FontAwesomeIcon name={'user'} size={24} color={Colors.GREEN} />,
    name: 'Cá nhân',
    to: 'Profile',
  },
];
const doctors = [
  {
    id: 1,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 2,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 3,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 4,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 5,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 6,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 7,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 8,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 9,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
  {
    id: 10,
    name: 'NVA',
    department: 'Khoa Sản',
    uri: 'https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/350137637_229957773084913_5094111242551546349_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WZ-WfYbdVQ0AX8Ua7Ev&_nc_ht=scontent.fdad3-5.fna&oh=00_AfAZIYBn53XMp-8d1fuhQNmX52sIRiuxROHWPG-GuwjS6Q&oe=6480B891',
  },
];

const Home = ({navigation: {navigate}}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.userInfo, styles.spaceX]}>
        <Avatar circle source={require('../../../assets/images/avatar.png')} />
        <Text style={[styles.username, styles.spaceX]}>Suong Phan</Text>
      </View>
      <View style={[styles.categories, styles.spaceX]}>
        {categories?.map((category, index) => {
          return (
            <View style={styles.category} key={index}>
              <Button
                title={category.icon}
                icon
                backgroundColor={Colors.GRAY}
                borderColor={Colors.GRAY}
                width={70}
                height={70}
                borderRadius={35}
                onPress={() => navigate(category.to)}
              />
              <Text>{category.name}</Text>
            </View>
          );
        })}
      </View>
      <View style={[styles.appointment, styles.spaceX, styles.spaceTop]}>
        <AppointmentItem
          id={1}
          name={'BS. Lương Thanh Long'}
          department={'Khoa ngoại'}
          date={'20/02/2023'}
          time={'9:00'}
        />
      </View>
      <View style={[styles.list, styles.spaceX]}>
        <View style={styles.text}>
          <Text style={styles.colorText}>Bác Sỹ</Text>
        </View>
        <FlatList
          data={doctors}
          renderItem={item => <DoctorItem doctor={item.item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
