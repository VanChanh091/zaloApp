import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SettingDetailsChat = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 3 }}>
        <View
          style={{
            flex: 1.7,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/avtLanvy.png")}
            style={{
              width: 85,
              height: 85,
              resizeMode: "contain",
              marginTop: 20,
            }}
          ></Image>
          <Text style={{ fontSize: 18, marginTop: 7, fontWeight: "bold" }}>
            Lan Vy
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
      <View style={{ flex: 7 }}>
        <View style={{ backgroundColor: "#F0F1F3", flex: 1 }}>
          <ScrollView>
            <TouchableOpacity
              style={{
                width: "100%",
                height: 85,
                backgroundColor: "#fff",
                marginTop: 12,
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
                  source={require("../img/lock.png")}
                  style={{ width: 35, height: 35, resizeMode: "contain" }}
                ></Image>
              </View>
              <View style={{ flex: 8.5 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 12,
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      flex: 3.8,
                      justifyContent: "center",
                      paddingTop: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "600", fontSize: 16 }}>
                      Mã hóa đầu cuối
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 6.2,
                      justifyContent: "center",
                      paddingTop: 10,
                    }}
                  >
                    <View
                      style={{
                        width: 50,
                        height: "75%",
                        borderRadius: 20,
                        backgroundColor: "#34A25B",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 16, color: "white" }}>BETA</Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{ flex: 1, justifyContent: "center", paddingLeft: 12 }}
                >
                  <Text style={{ fontSize: 13, marginTop: -15 }}>
                    Chưa nâng cấp
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

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
                    flex: 6.5,
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Đánh dấu bạn thân
                  </Text>
                </View>
                <View
                  style={{ flex: 2, borderBottomWidth: 1, borderColor: "grey" }}
                ></View>
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
                    flex: 6.5,
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Ghim trò chuyện
                  </Text>
                </View>
                <View
                  style={{ flex: 2, borderBottomWidth: 1, borderColor: "grey" }}
                ></View>
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
                    flex: 6.5,
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Ẩn trò chuyện
                  </Text>
                </View>
                <View
                  style={{ flex: 2, borderBottomWidth: 1, borderColor: "grey" }}
                ></View>
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
                    flex: 6.5,
                    justifyContent: "center",
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderColor: "grey",
                  }}
                >
                  <Text style={{ fontSize: 16, paddingLeft: 12 }}>
                    Báo cuộc gọi đến
                  </Text>
                </View>
                <View
                  style={{ flex: 2, borderBottomWidth: 1, borderColor: "grey" }}
                ></View>
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
