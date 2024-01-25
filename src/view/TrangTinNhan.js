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
    image: require("../img/avtVC.png"),
    name: "Văn Chánh",
    message: "abc",
  },
  {
    image: require("../img/avtLanvy.png"),
    name: "Lan Vy",
    message: "xyz",
  },
];

const TrangTinNhan = ({ navigation }) => {
  const [filterData, setData] = useState(data);
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
            <Text style={{ fontWeight: 400, fontSize: 40, color: "white" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 9.3 }}>
        <FlatList
          data={data}
          // keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                width: "100%",
                height: 85,
                flexDirection: "row",
                backgroundColor: "white",
              }}
              onPress={() => navigation.navigate("ViewChat", {data: item})}
            >
              <View
                style={{
                  flex: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={item.image}
                  style={{ resizeMode: "contain", width: 65, height: 65 }}
                />
              </View>

              <View
                style={{
                  flex: 8,
                  justifyContent: "center",
                  borderBottomWidth: 1, 
                  borderColor:"#ddd",
                }}
              >
                <Text style={{fontWeight: 600, fontSize: 22, paddingLeft: 5, }}>{item.name}</Text>
                <Text style={{fontWeight: 400, fontSize: 15, color:'grey', paddingLeft: 7,}}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrangTinNhan;
