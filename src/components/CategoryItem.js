import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { elevation } from '../common/styles';
import { useNavigation } from '@react-navigation/native';


const CategoryItem = ({ category }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Product', {
          id: category.id,
          categoryName: category.categoryName,
        });
      }}
    >
      <View style={[styles.elevation, styles.container]} >
        {/* <Image style={styles.image} source={{ uri: commerce.image_url }} /> */}
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{category.categoryName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryItem;

const styles = StyleSheet.create({
  elevation,
  container: {
    backgroundColor: "white",
    height: 60,
    alignSelf: "stretch",
    // borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,

  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: 'purple'
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold"
  },
});