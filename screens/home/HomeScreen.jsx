import { SafeAreaView } from 'react-native'
import ChatList from '../../components/doctor/ChatList';
import FavDoc from '../../components/doctor/FavDoc';
import Search from '../../components/search/Search';
import { styles } from './styles';


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <FavDoc isChat={false} />
      <ChatList isChat />
    </SafeAreaView>
  )
}

export default HomeScreen;