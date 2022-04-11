import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 8,
  },
  chatlist_container: {
    marginTop: 20,
    backgroundColor: "red",
  },
  inner_chatlist_container: {
    backgroundColor: "green",
    marginTop: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
  },
  chat: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 10,
    backgroundColor: "blue",
  },
  doc_name: {
    color: colors.textColor,
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
  },
  message: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "orange",
  },
  profile: {
    width: 80,
    height: 104,
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginHorizontal: 6,
    backgroundColor: "red",
  },
  chatlist_profile: {
    width: 70,
    height: 70,
    position: "relative",
    display: "flex",
    alignItems: "center",
    // marginHorizontal: 6,
    backgroundColor: "red",
  },

  profile_img: {
    width: 64,
    height: 64,
  },
  outer: {
    position: "absolute",
    width: 14,
    height: 14,
    right: 0,
    top: 0,
    borderRadius: 7,
    zIndex: 1,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  online: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.onlineIndicatorColor,
  },
  text: {
    fontSize: 11,
    color: "rgba(255,255,255,0.7)",
    textAlign: "center",
    marginTop: 8,
    backgroundColor: "black",
  },
  no_text: {
    display: "none",
    margin: 0,
  },
});

export default styles;
