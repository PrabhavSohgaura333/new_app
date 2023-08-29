import { StyleSheet, Text, View, StatusBar } from 'react-native';
import NewsTab from './components/NewsTab';
import Context from './API/Context';

function App() {
  return (
    <View style={{...styles.container, backgroundColor: '#282c35'}}>
      <NewsTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  )
}
