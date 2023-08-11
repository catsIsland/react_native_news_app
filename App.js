import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from './components/ListItem';
import dummyArticles from './dummies/articles';

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    setArticles(dummyArticles);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={
          ({ item }) => (
            <ListItem
              imageUrl={item.urlToImage}
              title={item.title}
              author={item.author}
            />
          )
        }
        keyExtractor={(item, index) => { index.toString() }}
      />
      <StatusBar style="auto" />
    </SafeAreaView >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面を全部使うという意味
    backgroundColor: '#eee',
  },
});

