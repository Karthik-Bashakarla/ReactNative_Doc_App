import { View, Text} from "react-native";
import { FlatList } from "react-native";

import data from "../../constants/data.js";
import Profile from "./Profile";
import styles from "./styles";

const ChatList = ({isChat}) => {
  return (
    <View style={styles.chatlist_container}>
      <FlatList
        data={data}
        renderItem={(item) => (
        <View style={styles.inner_chatlist_container}>
          <Profile
            name={item.item.name}
            img={item.item.image}
            isOnline={item.item.isOnline}
            isChat={isChat}
          />
          <View style={styles.chat}>
            <Text style={styles.doc_name}>{`Dr. ${item.item.name}`}</Text>
            <View style={styles.message}>
                <Text>Hello</Text>
                <Text>Hello</Text>
            </View>
          </View>
        </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
   
    </View>
  );
};

export default ChatList;