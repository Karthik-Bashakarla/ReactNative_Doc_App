import { StatusBar } from "react-native";
import HomeScreen from "./screens/home/HomeScreen";
import colors from "./constants/colors";

export default function App() {
  return (
    <>
      <StatusBar animation={true} backgroundColor={colors.backgroundColor} />
      <HomeScreen />
    </>
  );
}
