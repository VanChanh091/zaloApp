import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingDetailsChat = ({ navigation, route }) => {
  const { data } = route.params;

  const [isEnabledBF, setIsEnabledBf] = useState(false);
  const [isEnabledGhim, setIsEnabledGhim] = useState(false);
  const [isEnabledHide, setIsEnabledHide] = useState(false);
  const [isEnabledNotify, setIsEnabledNotify] = useState(false);

  const NotifyCall = () => {
    setIsEnabledNotify((previousState) => !previousState);
  };

  const bestFriend = () => {
    setIsEnabledBf((previousState) => !previousState);
  };

  const ghimChat = () => {
    setIsEnabledGhim((previousState) => !previousState);
    // Đoạn code này có thể được mở rộng để thực hiện các hành động cụ thể khi bật hoặc tắt
  };

  const HideChat = () => {
    setIsEnabledHide((previousState) => !previousState);
  };
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
          style={{ flex: 1.2, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../img/previous.png")}
              style={{ width: 35, height: 35, resizeMode: "contain" }}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{ flex: 7.8, borderRightWidth: 1, justifyContent: "center" }}
        >
          <Text
            style={{
              fontWeight: 500,
              fontSize: 17,
              color: "white",
              paddingLeft: 5,
            }}
          >
            Tùy chọn
          </Text>
        </View>
      </View>

      {/* body */}
      <View style={{ flex: 2.6, backgroundColor: "white" }}>
        <View
          style={{
            flex: 1.7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={data.data.image}
            style={{
              width: 85,
              height: 85,
              resizeMode: "contain",
              marginTop: 10,
            }}
          ></Image>
          <Text style={{ fontSize: 18, marginTop: 7, fontWeight: "bold" }}>
            {data.data.name}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: -6,
          }}
        >
          <View
            style={{
              width: "75%",
              height: "70%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "68%",
                  height: "75%",
                  borderRadius: 35,
                  backgroundColor: "#EAE6E6",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/search.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
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
              <TouchableOpacity
                style={{
                  width: "68%",
                  height: "75%",
                  borderRadius: 35,
                  backgroundColor: "#EAE6E6",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/user.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
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
              <TouchableOpacity
                style={{
                  width: "68%",
                  height: "75%",
                  borderRadius: 35,
                  backgroundColor: "#EAE6E6",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/theme.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
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
              <TouchableOpacity
                style={{
                  width: "68%",
                  height: "75%",
                  borderRadius: 35,
                  backgroundColor: "#EAE6E6",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../img/bell.png")}
                  style={{ width: 28, height: 28, resizeMode: "contain" }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* footer */}
      <View style={{ flex: 6.7 }}>
        <View style={{ backgroundColor: "#F0F1F3", flex: 1 }}>
          <ScrollView>
            <View
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "#fff",
                marginTop: 12,
              }}
            >
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/edit.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 8.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Đổi tên gợi nhớ
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/star.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Đánh dấu bạn thân
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledBF ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={bestFriend}
                    value={isEnabledBF}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/clock.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 8.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Nhật kí chung
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/gallery.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7.5,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Ảnh, file, link đã gửi
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
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

            <View
              style={{
                width: "100%",
                height: 150,
                backgroundColor: "#fff",
                marginTop: 12,
              }}
            >
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/addUser.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Tạo nhóm với ...
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
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
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/addGroup.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Thêm ... vào nhóm
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
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
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/group.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7.5,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Xem nhóm chung
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
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

            <View
              style={{
                width: "100%",
                height: 250,
                backgroundColor: "#fff",
                marginTop: 12,
              }}
            >
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/ghim.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Ghim trò chuyện
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledGhim ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={ghimChat}
                    value={isEnabledGhim}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/hide.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Ẩn trò chuyện
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledHide ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={HideChat}
                    value={isEnabledHide}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/incoming.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Báo cuộc gọi đến
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1.5,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabledNotify ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={NotifyCall}
                    value={isEnabledNotify}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/settingUser.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Cài đặt cá nhân
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
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
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/stopwatch.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View style={{ flex: 8.5, justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Tin nhắn tự động xóa
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: "100%",
                height: 200,
                backgroundColor: "#fff",
                marginTop: 12,
              }}
            >
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/warning.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 8.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>Báo xấu</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/block.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 7.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Quản lí chặn
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
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
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/capacity.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View
                  style={{
                    flex: 8.5,
                    justifyContent: "center",
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Dung lượng trò chuyện
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1.5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../img/delete.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  ></Image>
                </View>
                <View style={{ flex: 8.5, justifyContent: "center" }}>
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Xóa cuộc trò chuyện
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ width: "100%", height: 20 }} />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SettingDetailsChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
