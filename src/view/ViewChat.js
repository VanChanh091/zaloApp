import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

const ViewChat = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View
        style={{
          flex: 0.7,
          flexDirection: "row",
          backgroundColor: "#0097FB",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../img/previous.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            flex: 5,
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("SettingDetailsChat")}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: 500,
              paddingLeft: 5,
              color: "white",
            }}
          >
            Văn Chánh
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 3.7,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../img/callWhite.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../img/videoChat.png")}
                style={{ width: 35, height: 35, resizeMode: "contain" }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SettingDetailsChat")}
            >
              <Image
                source={require("../img/details.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* body */}
      <View style={{ flex: 8.5, backgroundColor: "#E2E8F1" }}></View>

      {/* footer */}
      <View style={{ flex: 0.8, flexDirection: "row" }}>
        <View
          style={{
            flex: 1.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../img/sticker.png")}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5.4, justifyContent: "center" }}>
          <TextInput
            placeholder="Tin nhắn"
            style={{
              paddingLeft: 12,
              fontSize: 16,
              width: "100%",
              height: "100%",
              borderRadius: 5,
            }}
          />
        </View>
        <View style={{ flex: 3.3, flexDirection: "row" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../img/moreChat.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../img/micChat.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TouchableOpacity>
              <Image
                source={require("../img/sendPhoto.png")}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
