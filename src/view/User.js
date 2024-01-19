import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const User = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 80,
          backgroundColor: "#fff",
          marginTop: 12,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/avtVC.png")}
            style={{ width: 70, height: 70, resizeMode: "contain" }}
          ></Image>
        </View>
        <View
          style={{
            flex: 6.5,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 10,
              marginTop: 12,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Văn Chánh</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "grey" }}>
              Xem trang cá nhân
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/changeAcc.png")}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          ></Image>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 80,
          marginTop: 12,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/cloud.png")}
              style={{ width: 35, height: 35, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 6.5,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                paddingLeft: 10,
                marginTop: 12,
              }}
            >
              <Text style={{ fontSize: 20 }}>Cloud của tôi</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 10 }}>
              <Text style={{ fontSize: 15, color: "grey" }}>...</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/nextt.png")}
              style={{ width: 25, height: 25, resizeMode: "contain" }}
            ></Image>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 80,
          marginTop: 12,
          backgroundColor: "#fff",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/capacityBlue.png")}
            style={{ width: 35, height: 35, resizeMode: "contain" }}
          ></Image>
        </View>
        <View
          style={{
            flex: 6.5,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingLeft: 10,
              marginTop: 12,
            }}
          >
            <Text style={{ fontSize: 20 }}>Dung lượng và dữ liệu</Text>
          </View>
          <View style={{ flex: 1, paddingLeft: 10 }}>
            <Text style={{ fontSize: 15, color: "grey" }}>
              Quản lí dữ liệu zalo của bạn
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/nextt.png")}
            style={{ width: 25, height: 25, resizeMode: "contain" }}
          ></Image>
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          height: 130,
          marginTop: 12,
          backgroundColor: "#fff",
        }}
      >
        <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/protection.png")}
              style={{ width: 35, height: 35, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 6.5,
              justifyContent: "center",
              borderColor:'grey',
            }}
          >
            <Text style={{ fontSize: 20, paddingLeft: 12 }}>
              Tài khoản và bảo mật
            </Text>
          </View>
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
              alignItems: "center",
              borderColor:'grey',
            }}
          >
            <Image
              source={require("../img/nextt.png")}
              style={{ width: 25, height: 25, resizeMode: "contain" }}
            ></Image>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/private.png")}
              style={{ width: 32, height: 32, resizeMode: "contain" }}
            ></Image>
          </View>
          <View
            style={{
              flex: 6.5,
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20, paddingLeft: 12 }}>
              Quyền riêng tư
            </Text>
          </View>
          <View
            style={{
              flex: 1.5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../img/nextt.png")}
              style={{ width: 25, height: 25, resizeMode: "contain" }}
            ></Image>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F1F3",
  },
});
