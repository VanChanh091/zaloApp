
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DanhBaBanBe from '../View/TrangDBBanBe';
import DanhBaNhom from '../View/TrangDBNhom';
import DanhBaOA from '../View/TrangDBOA';

const Tab = createMaterialTopTabNavigator();

const DanhBaTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bạn Bè" component={DanhBaBanBe} />
      <Tab.Screen name="Nhóm" component={DanhBaNhom} />
      <Tab.Screen name="OA" component={DanhBaOA} />
    </Tab.Navigator>
  );
};

export default DanhBaTabs;
