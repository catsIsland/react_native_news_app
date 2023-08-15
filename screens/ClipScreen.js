import { StyleSheet, SafeAreaView, Text } from 'react-native';

export const ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is clip screen</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // 画面を全部使うという意味
    backgroundColor: '#eee',
  },
});