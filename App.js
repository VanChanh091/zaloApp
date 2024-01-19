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
