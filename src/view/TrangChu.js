import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TrangChu = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../img/Screen.png')}
        style={{ width: '100%', height: '55%',  }}
      />

      <Text style={{ fontSize: 18, marginBottom: 10 }}>
      Gọi Video Ổn Định
      </Text>

      <Text style={{ fontSize: 15, marginBottom: 10 ,textAlign: 'center'}}>
      Trò chuyện thật đã với hình ảnh sắc nét, tiếng chất, ấm chuẩn dưới mọi điều kiện mạng
      </Text>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginRight: 10 }}></View>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginRight: 10 }}></View>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginRight: 10 }}></View>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginRight: 10 }}></View>
        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: 'white', borderWidth: 1, borderColor: 'black', marginRight: 10 }}></View>
      </View>
     
   
      <TouchableOpacity
        style={{
          backgroundColor: '#0097FB',
          padding: 10,
          borderRadius: 50,
          marginBottom: 10,
          width: '80%', 
        }}
        
        onPress={() => navigation.navigate('TrangTinNhan')}

      >
        <Text style={{ color: 'white', fontWeight: 'bold',textAlign:'center' }}>Đăng Nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#dcdcdc',
          padding: 10,
          borderRadius: 50,
          marginBottom: 20,
          width: '80%', 
        }}
        onPress={() => navigation.navigate('TrangDangKy')}
      >
        <Text style={{ color: 'black', fontWeight: 'bold',textAlign:'center'  }}>Đăng Ký</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginBottom:20, }}>
  <Text style={{ marginRight: 20 }}>Tiếng Việt</Text>
  <Text>English</Text>
</View>

    </View>
  );
};

export default TrangChu;
