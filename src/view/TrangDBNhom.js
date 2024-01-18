

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Fragment } from 'react';
import { Icon } from 'react-native-elements';
const url = "http://655616db84b36e3a431eff1b.mockapi.io/products";
const DanhBaNhom = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View>
      <View style={styles.container}>
      <TouchableOpacity style={styles.newGroupContainer} onPress={() => {}}>
        <Icon name="group-add" type="material" color="#0097FB" size={20} containerStyle={styles.groupIcon} />
        <Text style={styles.newGroupText}>Tạo nhóm mới</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.createGroupContainer}>
          <Text style={styles.createGroupText}>Tạo nhóm với:</Text>
          <View style={styles.iconsContainer}>
            {/* Hình ảnh và dòng chữ lịch */}
            <View style={styles.iconItem}>
              <Image source={require("../img/lich.png")} style={styles.iconImage} />
              <Text style={styles.iconText}>Lịch</Text>
            </View>
            
            {/* Hình ảnh và dòng chữ nhắc hẹn */}
            <View style={styles.iconItem}>
              <Image source={require("../img/nhachen.png")} style={styles.iconImage} />
              <Text style={styles.iconText}>Nhắc hẹn</Text>
            </View>
            
            {/* Hình ảnh và dòng chữ nhóm offline */}
            <View style={styles.iconItem}>
              <Image source={require("../img/off.png")} style={styles.iconImage} />
              <Text style={styles.iconText}>Nhóm offline</Text>
            </View>
          </View>
          </View>
          <Fragment>
        <Text style={styles.groupCountText}>{`Nhóm đang tham gia (${data.length})`}</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <View style={styles.productImageContainer}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productTinnhan}>{item.tinnhan}</Text>
              </View>
            </View>
          )}
        />
      </Fragment>
    </View>
  );
};
const styles = StyleSheet.create({
newGroupContainer: {
  flexDirection: "row",
  alignItems: "center",
  padding: 10,
  backgroundColor: "#F5F5F5",
  height:60,
},
groupIcon: {
  backgroundColor: "#D3D3D3",
  borderRadius: 50,
  padding: 10,
  marginRight: 10,
},
newGroupText: {
  fontSize: 18,
  color:'#0097FB',
},
createGroupContainer: {
  marginTop: 10,
  paddingHorizontal: 10,
  backgroundColor: "#F5F5F5"
},
createGroupText: {
  fontSize: 16,
  fontWeight: "bold",
 
},
iconsContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 5,
},
iconItem: {
  alignItems: "center",
},
iconImage: {
  width: 50,
  height: 50,
  marginBottom: 5,
},
iconText: {
  fontSize: 12,
},
productItem: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center", 
  margin: 10,
  padding: 10,
  borderBottomWidth: 1, 
  borderBottomColor: "#ddd", 
},

productName: {
  fontWeight: "bold",
  fontSize: 16,
  marginBottom: 5,
},
productTinnhan: {
  color: "#666",
},
productDetails: {
  flex: 1,
  marginLeft: 10,
},
productImageContainer: {
  borderRadius: 50,
  overflow: "hidden",
},
productImage: {
  width: 100,
  height: 100,
},
groupCountText: {
  fontSize: 16,
  fontWeight: "bold",
  marginVertical: 10,
},
});
export default DanhBaNhom;
