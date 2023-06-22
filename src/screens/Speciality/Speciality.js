import React, { Fragment, useState } from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import { Colors } from '../../constants';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from '../Doctor/Speciality.styles';
import MyTextInput from '../../components/MyTextInput';

const specialities = [
  {
    _id: '647ee9e5aee1ff0c2b4ded18',
    name: 'Đa khoa',
    description:
      '1. Các bệnh nhiễm trùng như cảm lạnh, cúm, viêm họng.\n' +
      '2. Vấn đề tiêu hóa như đau dạ dày, táo bón, tiêu chảy.\n' +
      '3. Vấn đề hô hấp như hen suyễn, viêm phổi.\n' +
      '4. Bệnh tim mạch như huyết áp cao, bệnh lý van tim.\n' +
      '5. Bệnh tiểu đường và các vấn đề liên quan đến chất béo máu.\n' +
      '6. Vấn đề tâm lý như lo âu, trầm cảm.\n' +
      '7. Bệnh hô hấp như viêm phổi, hen suyễn.\n' +
      '8. Vấn đề về da như viêm da cơ địa, mụn trứng cá.\n' +
      '9. Tư vấn về sức khỏe tổng thể và các biện pháp phòng ngừa bệnh.',
    __v: 0,
  },
  {
    _id: '647ee9e5aee1ff0c2b4ded11',
    name: 'Đa khoa',
    description:
      '1. Các bệnh nhiễm trùng như cảm lạnh, cúm, viêm họng.\n' +
      '2. Vấn đề tiêu hóa như đau dạ dày, táo bón, tiêu chảy.\n' +
      '3. Vấn đề hô hấp như hen suyễn, viêm phổi.\n' +
      '4. Bệnh tim mạch như huyết áp cao, bệnh lý van tim.\n' +
      '5. Bệnh tiểu đường và các vấn đề liên quan đến chất béo máu.\n' +
      '6. Vấn đề tâm lý như lo âu, trầm cảm.\n' +
      '7. Bệnh hô hấp như viêm phổi, hen suyễn.\n' +
      '8. Vấn đề về da như viêm da cơ địa, mụn trứng cá.\n' +
      '9. Tư vấn về sức khỏe tổng thể và các biện pháp phòng ngừa bệnh.',
    __v: 0,
  },
];

const Speciality = () => {
  const [speciality, setSpeciality] = useState(false);
  const handleSearch = e => {

  };
  return (
    <Fragment>
      <AppHeader
        back
        title={'Khoa'}
        headerBg={Colors.DEFAULT_CORLOR}
        iconColor={Colors.WHITE}
      />
      <View
        style={{
          backgroundColor: '#fff',
          padding: 20,
          borderRadius: 15,
          marginTop: 20,
        }}>
        <MyTextInput
          placeholder="Search..."
          keyboardType="text"
          value={speciality}
          onChangeText={e => handleSearch(e)}
        />
      </View>
    </Fragment>
  );
};

export default Speciality;
