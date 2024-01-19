// ChatScreen.js
import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex: 1, }}>
      <TouchableOpacity
      style={{borderWidth: 1, width: 100, height: 60, borderRadius: 10, justifyContent:'center', alignItems:'center', backgroundColor:"green", }}
        onPress={() => navigation.goBack()}
      >
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;

// FriendScreen.js và NewsScreen.js có cấu trúc tương tự như ChatScreen.js
