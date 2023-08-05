import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';

export default function App() {

  return (
    <View style={styles.container}>
      <ListItem
        imageUrl={'https://picsum.photos/id/20/200/300'}
        title={'Both Android and iOS allow you to display formatted text by annotating Both Android and iOS allow you to display formatted text by annotating'}
        author={'from ANAB'}
      />
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

