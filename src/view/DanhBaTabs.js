
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DanhBa from './DanhBa'
import TrangDBNhom from './TrangDBNhom'
import TrangDbOA from './TrangDbOA'

const Tab = createMaterialTopTabNavigator();

const DanhBaTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Bạn Bè" component={DanhBa} />
      <Tab.Screen name="Nhóm" component={TrangDBNhom} />
      <Tab.Screen name="OA" component={TrangDbOA} />
    </Tab.Navigator>
  );
};

export default DanhBaTabs;
