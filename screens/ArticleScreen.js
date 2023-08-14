import { StyleSheet, SafeAreaView, Text } from 'react-native';


export const ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Article screen</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面を全部使うという意味
    backgroundColor: '#eee',
  },
});