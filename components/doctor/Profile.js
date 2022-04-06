import { View, Text, Image } from "react-native";

import styles from "./styles";

const Profile = ({ name, img, isOnline }) => {
  return (
    <View style={styles.profile}>
      {isOnline && (
        <View style={styles.outer}>
          <View style={styles.online}></View>
        </View>
      )}
      <Image source={img} style={styles.profile_img} />
      <Text style={styles.text}>{`Dr. ${name}`}</Text>
    </View>
  );
};

export default Profile;
