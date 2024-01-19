import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'

import SettingDetailsChat from './SettingDetailsChat'
import User from './User'
import TrangChu from './TrangChu'
import TrangDangKy from './TrangDangKy'
import TrangTinNhan from './TrangTinNhan'
import DanhBa from './DanhBa'
import ViewChat from './ViewChat'

const MessageStack = createNativeStackNavigator();
const SettingChat = createNativeStackNavigator();
const PhoneBookStack = createNativeStackNavigator();
const StoryStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();
const loginStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function loginScreen(){
//     <loginStack.Navigator>
//         <loginStack.Screen  />
//     </loginStack.Navigator>
// }

// function messageScreen(){
//     <MessageStack.Navigator>
//         <MessageStack.Screen name='Mess' component={TrangTinNhan} options={{headerShown:false}}/>
//         <MessageStack.Screen name='Chat' component={ViewChat}/>
//     </MessageStack.Navigator>
// }

// function settingChatScreen(){
//   <SettingChat.Navigator>
//     <SettingChat.Screen name='Chat' component={ViewChat}/>
//     <SettingChat.Screen name='SettingChat' component={SettingDetailsChat}/>
//   </SettingChat.Navigator>
// }

// function PhoneBookScreen(){
//     <PhoneBookStack.Navigator>
//         <PhoneBookStack.Screen name='DanhBa' component={DanhBa} />
//     </PhoneBookStack.Navigator>
// }

// function StoryScreen(){
//     <PhoneBookStack.Navigator>
//         <PhoneBookStack.Screen name='DanhBa' component={DanhBa} />
//     </PhoneBookStack.Navigator>
// }

// function UserScreen(){
//     <UserStack.Navigator>
//         <UserStack.Screen name='InfoUser' component={User} />
//     </UserStack.Navigator>
// }

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
          name="Chat"
          component={TrangTinNhan}
          options={{ tabBarLabel: "Tin nhắn",
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="chatbubble-ellipses-outline" color={color} size={size}></Icon>
          )
        }}
        />
        <Tab.Screen name="PhoneBook" component={DanhBa} options={{
          tabBarLabel:"Danh bạ",
          headerShown:false,
          tabBarIcon:({color, size}) => (
            <Icon name="book-outline" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="User" component={User} options={{
          tabBarLabel:"Cá nhân",
          headerShown:false,
          tabBarIcon:({color, size}) => (
            <Icon name="person-outline" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
  )
}

export default TabNavigation