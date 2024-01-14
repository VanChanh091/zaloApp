import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";

const url = "http://655616db84b36e3a431eff1b.mockapi.io/products";

const TrangTinNhan = () => {
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
        <Icon name="search" size={24} color="white" onPress={fetchData} />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm Kiếm"
          value={searchKeyword}
          onChangeText={(text) => setSearchKeyword(text)}
        />
        <Pressable style={styles.addButton} onPress={() => navigation.navigate("Screen")}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>

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
       <View style={styles.bottomBar}>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("Screen")}>
          <Ionicons name="chatbox" size={24} color="black" />
          <Text style={styles.bottomBarItemText}>Tin Nhắn</Text>
        </Pressable>
        <Pressable style={styles.bottomBarItem} onPress={() => navigation.navigate("Screen")}>
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
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    color: "white",
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
  },
});

export default TrangTinNhan;
