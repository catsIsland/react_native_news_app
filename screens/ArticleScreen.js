import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';


export const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: article.url }}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面を全部使うという意味
    backgroundColor: '#eee',
  },
});