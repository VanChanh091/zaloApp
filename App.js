import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import SettingDetailsChat from "./src/view/SettingDetailsChat";
import User from "./src/view/User";
import TrangChu from "./src/view/TrangChu";
import TrangDangKy from "./src/view/TrangDangKy";
import TrangTinNhan from "./src/view/TrangTinNhan";
import DanhBa from "./src/view/DanhBa";
import TabNavigation from "./src/view/TabNavigation";
// import DanhBaTabs from './src/view/DanhBaTabs';
import ViewChat from "./src/view/ViewChat";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <SettingDetailsChat /> */}
      {/* <User /> */}
      {/* <TrangChu/> */}
      {/* <TrangDangKy/> */}
      {/* <TrangTinNhan/> */}
      {/* <DanhBa/> */}
      {/* <TabNavigation/> */}
      {/* <TabNavigator/> */}
      {/* <DanhBaTabs/> */}
      {/* <ViewChat/> */}
      {/* <NavigationTest/> */}

      <Stack.Navigator>
        <Stack.Screen name="MessagePage" component={TrangTinNhan} options={{headerShown:false}}/>
        <Stack.Screen name="ViewChat" component={ViewChat} options={{headerShown:false}} />
        <Stack.Screen name="SettingDetailsChat" component={SettingDetailsChat} options={{headerShown:false}} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
<<<<<<< HEAD
=======

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import TrangChu from '../Zalo/View/TrangChu';
// import TrangTinNhan from'../Zalo/View/TrangTinNhan';
// import TrangDangKy from '../Zalo/View/TrangDangKy';
// import User from '../Zalo/View/User';
// import SettingDetailsChat from'../Zalo/View/SettingDetailsChat';
// import TrangDangNhap from '../Zalo/View/TrangDangNhap';
// import TrangDanhBa from '../Zalo/View/TrangDanhBa';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='TrangChu'>
//         <Stack.Screen
//           name="TrangChu"
//           component={TrangChu}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="TrangTinNhan"
//           component={TrangTinNhan}
//           options={{ title: 'TinNhan' }}
//         />
//         <Stack.Screen
//           name="TrangDangKy"
//           component={TrangDangKy}
//           options={{ title: 'DangKy' }}
//         />
//            <Stack.Screen
//           name="User"
//           component={User}
//           options={{ title: 'User' }}
//         />
//              <Stack.Screen
//           name="SettingDetailsChat"
//           component={SettingDetailsChat}
//           options={{ title: 'User' }}
//         />
//            <Stack.Screen
//           name="TrangDangNhap"
//           component={TrangDangNhap}
//           options={{ title: 'DangNhap' }}
//         />
//          <Stack.Screen
//           name="TrangDanhBa"
//           component={TrangDanhBa}
//           options={{ title: 'DanhBa' }}
//         />


//       </Stack.Navigator>
//     </NavigationContainer>
//   );

// }
>>>>>>> 81d21624f47a91ffa467b50cf7305821ca974d6e
