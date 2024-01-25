import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const DanhBa = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
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
            <Image
              source={require("../img/itemAdd.png")}
              style={{ width: 40, height: 40, resizeMode: "contain" }}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      {/* body */}
      <View style={{ flex: 2.5,  }}>
        <TouchableOpacity style={{ flex: 1,  flexDirection: "row" }}>
          <View
            style={{
              flex: 1.8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/requestAddfr.png")}
              style={{ width: 42, height: 42, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{ flex: 8.2, justifyContent: "center", paddingLeft: 10 }}
          >
            <Text style={{ fontWeight: "400", fontSize: 18 }}>
              Lời mời kết bạn
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1.8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/danhBa.png")}
              style={{ width: 42, height: 42, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{ flex: 8.2, justifyContent: "center", paddingLeft: 10 }}
          >
            <Text style={{ fontWeight: "400", fontSize: 18 }}>Danh bạ máy</Text>
            <Text style={{ fontWeight: "400", fontSize: 15, color: "grey" }}>
              Liên hệ có dùng zalo
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 1.8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/birthday.png")}
              style={{ width: 42, height: 42, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{ flex: 8.2, justifyContent: "center", paddingLeft: 10 }}
          >
            <Text style={{ fontWeight: "400", fontSize: 18 }}>
              Lịch sinh nhật
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 15, color: "grey" }}>
              Theo dõi sinh nhật của bạn bè
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{flex:0.2, backgroundColor:'#EAE6E6'}}></View>

      {/* footer */}
      <View style={{ flex: 6.6, }}></View>
      <StatusBar />
    </SafeAreaView>
  );
};

export default DanhBa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
