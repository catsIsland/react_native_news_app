import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';
import articles from './dummies/articles';

export default function App() {
  const items = articles.map((article, index) => {
    return (
      <ListItem
        imageUrl={article.urlToImage}
        title={article.title}
        author={article.author}
        key={index.toString()}
      />
    )
  })

  return (
    <View style={styles.container}>
      {items}
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面を全部使うという意味
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

