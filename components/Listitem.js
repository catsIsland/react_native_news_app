import { StyleSheet, Image, Text, View } from 'react-native';

export const ListItem = () => {
  // テキスト変数
  const someText = 'aaBoth Android and iOS allow you to display formatted text by annotating Both Android and iOS allow you to display formatted text by annotating'

  return (
    <View style={styles.itemContainer}>
      {/* 写真 */}
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/id/1/200/300',
          }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.mainText}>{someText}</Text>
        <Text style={styles.subText}>from VXX</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row', // 横並び
    backgroundColor: '#fff'
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between' // flex boxの中にあるものを均等に調整してくれるもの
  },
  image: {
    width: 100,
    height: 100
  },
  mainText: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  }
});

