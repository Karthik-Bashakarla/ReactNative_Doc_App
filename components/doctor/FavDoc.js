import { View, Text } from "react-native";
import { FlatList } from "react-native";

import data from "../../constants/data.js";
import Profile from "./Profile";
import styles from "./styles";

const FavDoc = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={(item) => (
          <Profile
            name={item.item.name}
            img={item.item.image}
            isOnline={true}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FavDoc;
