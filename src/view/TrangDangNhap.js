import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const TrangDangNhap = () => {
  const navigation = useNavigation();
  const [sdt, setSdt] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const url = 'http://655616db84b36e3a431eff1b.mockapi.io/products';
      const response = await fetch(url);
      const users = await response.json();

      const user = users.find((user) => user.sdt == sdt && user.password === password);

      console.log('users:', users);
      console.log('sdt:', sdt);
      console.log('password:', password);

      if (user) {
        navigation.navigate('TrangTinNhan');
      } else {
        Alert.alert('Error', 'Incorrect login information.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 80, fontWeight: 'bold', color: '#0097FB', marginBottom: 50 }}>Zalo</Text>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderColor: 'black' }}>
        <Ionicons name="ios-call" size={24} color="black" style={{ marginRight: 10 }} />
        <TextInput
          style={{ height: 40, width: '80%', padding: 10 }}
          placeholder="Số điện thoại"
          value={sdt}
          onChangeText={(text) => setSdt(text)}
        />
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderColor: 'black' }}>
        <Ionicons name="ios-lock-closed" size={24} color="black" style={{ marginRight: 10 }} />
        <TextInput
          style={{ height: 40, width: '80%', padding: 10 }}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={{ backgroundColor: '#0097FB', padding: 10, borderRadius: 50, width: '80%' }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrangDangNhap;
