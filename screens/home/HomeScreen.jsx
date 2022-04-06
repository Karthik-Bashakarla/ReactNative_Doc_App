import { SafeAreaView,View, Text } from 'react-native'
import FavDoc from '../../components/doctor/FavDoc';
import Search from '../../components/search/Search';
import { styles } from './styles';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <FavDoc />
      
    </SafeAreaView>
  )
}

export default HomeScreen;