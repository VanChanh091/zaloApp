import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

// const url = "http://655616db84b36e3a431eff1b.mockapi.io/products";

const data = [
{
  image: source(require("../img/avtVC")),
  name: "Văn Chánh",
  Mesage: "abc"
},
{
  image: source(require("../img/avtLanvy.png")),
  name: "Lan Vy",
  Mesage: "xyz"
}
]

const TrangTinNhan = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  // const fetchData = () => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error("Error fetching data:", error));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 0.7,
          flexDirection: "row",
          backgroundColor: "#0097FB",
        }}
      >
        <View
          style={{
            flex: 8.5,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/searchWhite.png")}
              style={{
                width: 35,
                height: 35,
                resizeMode: "contain",
                marginLeft: 5,
              }}
            ></Image>
          </View>
          <View style={{ flex: 8.5 }}>
            <TextInput
              style={{
                height: "100%",
                width: "100%",
                borderRadius: 5,
                paddingLeft: 10,
                color: "white",
                fontSize: 16,
              }}
              placeholder="Tìm kiếm"
              placeholderTextColor="white"
            />
          </View>
        </View>
        <View
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity>
            <Text style={{ fontWeight: 400, fontSize: 30, color: "white" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

<<<<<<< HEAD
      <View style={{ flex: 9.3 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.productItem}
              onPress={() => navigation.navigate("ViewChat")}
            >
              <View 
              style={styles.productImageContainer}
              >
                <Image
                  source={item.image}
                  style={styles.productImage}
                />
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productTinnhan}>{item.tinnhan}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
=======
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
>>>>>>> 81d21624f47a91ffa467b50cf7305821ca974d6e
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
