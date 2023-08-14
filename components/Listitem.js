import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
/**
 * 
 * @param {
 * imageUrl: 画像URL(string)
 * title: タイトル(string)
 * author: ニュース提供元(string)
 * onPress: クリックされた時のイベント
 * } props 
 * @returns 
 */
export const ListItem = (props) => {

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={props.onPress}>
      {/* 写真 */}
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{ uri: props.imageUrl }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.mainText}>
          {props.title}
        </Text>
        <Text style={styles.subText}>
          {props.author}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row', // 横並び
    backgroundColor: '#fff',
    marginVertical: 5,
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

