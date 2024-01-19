
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
<<<<<<< HEAD
import DanhBa from './DanhBa'
import TrangDBNhom from './TrangDBNhom'
import TrangDbOA from './TrangDbOA'
=======
import DanhBaBanBe from '../View/TrangDBBanBe';
import DanhBaNhom from '../View/TrangDBNhom';
import DanhBaOA from '../View/TrangDBOA';
>>>>>>> 81d21624f47a91ffa467b50cf7305821ca974d6e

const Tab = createMaterialTopTabNavigator();

const DanhBaTabs = () => {
  return (
    <Tab.Navigator>
<<<<<<< HEAD
      <Tab.Screen name="Bạn Bè" component={DanhBa} />
      <Tab.Screen name="Nhóm" component={TrangDBNhom} />
      <Tab.Screen name="OA" component={TrangDbOA} />
=======
      <Tab.Screen name="Bạn Bè" component={DanhBaBanBe} />
      <Tab.Screen name="Nhóm" component={DanhBaNhom} />
      <Tab.Screen name="OA" component={DanhBaOA} />
>>>>>>> 81d21624f47a91ffa467b50cf7305821ca974d6e
    </Tab.Navigator>
  );
};

export default DanhBaTabs;
