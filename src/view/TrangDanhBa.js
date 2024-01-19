import DanhBaTabs from '../View/DanhBaTabs';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';

const url = "http://655616db84b36e3a431eff1b.mockapi.io/products";
const TrangDanhBa = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

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
    <View style={{ flex: 1 }}>
 
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="white" onPress={fetchData} />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm Kiếm"
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate("Screen")}>
          <MaterialIcons name="person-add" size={24} color="white" />
        </TouchableOpacity>
      </View>
      
   
      <DanhBaTabs />



      <View style={styles.bottomBar}>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("Screen")}>
          <Ionicons name="chatbox" size={24} color="black" />
          <Text style={styles.bottomBarItemText}>Tin Nhắn</Text>
        </Pressable>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("TrangDanhBa")}>
          <Ionicons name="call" size={24} color="black" />
          <Text style={styles.bottomBarItemText}>Danh Bạ</Text>
        </Pressable>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("Screen")}>
          <Ionicons name="compass" size={24} color="black" />
          <Text style={styles.bottomBarItemText}>Khám Phá</Text>
        </Pressable>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("SettingDetailsChat")}>
          <Ionicons name="journal" size={24} color="black" />
          <Text style={styles.bottomBarItemText}>Nhật Ký</Text>
        </Pressable>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("User")}>
  <Ionicons name="person" size={24} color="black" />
  <Text style={styles.bottomBarItemText}>Cá Nhân</Text>
</Pressable>
      </View>

    </View>

  );

};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#0097FB",
    height: 60,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#0097FB",
  },
 
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    height: 60,
  },
  bottomBarItem: {
    alignItems: "center",
  },
  bottomBarItemText: {
    marginTop: 5,
  },});

export default TrangDanhBa;
