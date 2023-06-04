import React, {Fragment} from 'react';
import AppHeader from '../../components/AppHeader/AppHeader';
import {Colors} from '../../constants';

const Doctor = () => {
  return (
    <Fragment>
      <AppHeader
        back
        title={'Bác Sỹ'}
        right={'bell'}
        headerBg={Colors.GREEN}
        iconColor={Colors.WHITE}
      />
    </Fragment>
  );
};

export default Doctor;
