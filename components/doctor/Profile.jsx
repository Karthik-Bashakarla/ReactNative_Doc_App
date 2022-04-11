import { View, Text, Image } from "react-native";

import styles from "./styles";

const Profile = ({ name, img, isOnline, isChat }) => {
  const {text, no_text, profile, chatlist_profile} = styles;
  const styled = isChat ? no_text : text
  const styled_profile = isChat ? chatlist_profile : profile
  return (
    <View style={styled_profile}>
      {isOnline && (
        <View style={styles.outer}>
          <View style={styles.online}></View>
        </View>
      )}
      <Image source={img} style={styles.profile_img} />
      <Text style={styled}>{`Dr. ${name}`}</Text>
    </View>
  );
};

export default Profile;
